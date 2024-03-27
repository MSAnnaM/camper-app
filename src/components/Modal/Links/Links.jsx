import { Render, LinksList, LinksWrap} from "./Links.styled";
import { Features } from "../Features/Features";
import {Reviews} from "../Rewievs/Rewievs";
import { BookForm } from "../BookForm/BookForm";

export const Links = ({ card, activeLink, setActiveLink }) => {
    return (
        <LinksWrap>
            <LinksList> 
                <li>
                    <button
                        type="button"
                        aria-label="Show features"
                        className={activeLink === "features" ? "active" : ""}
                        onClick={() => setActiveLink("features")}
                    >
                        Features
                    </button>
                </li>

                <li>
                    <button
                        type="button"
                        aria-label="Show reviews"
                        className={activeLink === "reviews" ? "active" : ""}
                        onClick={() => setActiveLink("reviews")}
                    >
                        Reviews
                    </button>
                </li>
            </LinksList>

            <hr />

            {activeLink === "features" ? (
                <Render>
                    <Features card={card} />
                    <BookForm />
                </Render>
            ) : (
                <Render>
                    <Reviews card={card} />
                    <BookForm />
                </Render>
            )}
        </LinksWrap>
    );
};
