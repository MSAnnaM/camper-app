import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import {Links} from "./Links/Links"
import {
    Backdrop,
    CLoseBtn,
    Content,
    HeadInfo,
    ModalDescr,
    PicsList,
    Window,
} from "./Modal.styled";
import { Container } from 'components/Layout/Layout.styled';
import {
    LocationWrap,
    Price,
    RatingLocationWrap,
    RatingWrap,
    Title,
} from "../Card/Card.styled";
import {CloseIcon, StarIcon, PinIcon } from "../Icons/AllIcons";

export const Modal = ({
    card,
    isModalShown,
    closeModal,
    activeLink,
    setActiveLink,
    clickToReviews,
}) => {
    const tabsRef = useRef();
    useEffect(() => {
        const handleESCClose = (e) => {
            if (e.code === "Escape") closeModal();
        };

        window.addEventListener("keydown", handleESCClose);

        return () => window.removeEventListener("keydown", handleESCClose);
    }, [closeModal]);

    useEffect(() => {
        clickToReviews &&
            tabsRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
                duration: 1000,
            });
    }, [clickToReviews]);

    const handleBackdropClose = ({ target, currentTarget }) => {
        if (target === currentTarget) {
            closeModal();
            document.body.style.overflow = "visible";
        }
    };

    return createPortal(
        <Backdrop
            className={isModalShown ? "is-shown" : "is-hidden"}
        
            onClick={handleBackdropClose}
        >
            <Container onClick={handleBackdropClose}>
                <Window className={isModalShown ? "is-shown" : "is-hidden"}>
                    <CLoseBtn type="button" aria-label="Close modal" onClick={closeModal}>
                        <CloseIcon width={20} height={20} />
                    </CLoseBtn>

                    <Content>
                        <HeadInfo>
                            <Title>{card.name}</Title>

                            <RatingLocationWrap id="rating-wrap">
                                <RatingWrap>
                                    <StarIcon
                                        width={20}
                                        height={20}
                                        fillColor={"var( --rating-color)"}
                                    />
                                    <p>{`${card.rating}(${card.reviews.length} Reviews)`}</p>
                                </RatingWrap>

                                <LocationWrap>
                                    <PinIcon width={20} height={20} />
                                    <p>{card.location.split(",").reverse().join(", ")}</p>
                                </LocationWrap>
                            </RatingLocationWrap>

                            <Price>€{card.price.toFixed(2)}</Price>
                        </HeadInfo>

                        <PicsList>
                            {card.gallery.length > 0 &&
                                card.gallery.map((link, i) => (
                                    <li key={`${card._id}/${i}`}>
                                        <img src={link} alt={card.name} />
                                    </li>
                                ))}
                        </PicsList>

                        <ModalDescr>{card.description}</ModalDescr>

                        <div ref={tabsRef}>
                            <Links
                                card={card}
                                activeLink={activeLink}
                                setActiveLink={setActiveLink}
                            />
                        </div>
                    </Content>
                </Window>
            </Container>
        </Backdrop>,
        document.getElementById("modal-root")
    );
};
