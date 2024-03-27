import { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../redux/camperSlice';
import { PiWind } from 'react-icons/pi';
import { selectFavorites } from '../../redux/camperSelectors';
import { Modal } from '../Modal/Modal';
import {
  StarIcon,
  PinIcon,
  AdultsIcon,
  BedIcon,
  KitchenIcon,
  PetrolIcon,
  TransmissionIcon,
  FavIcon,
} from '../Icons/AllIcons';
import {
  VanPic,
  MainInfoWrap,
  TitlePriceWrap,
  Title,
  PriceWrap,
  Price,
  RatingLocationWrap,
  RatingWrap,
  LocationWrap,
  Description,
  DetailsList,
  ShowBtn,
  AddToFavBtn,
} from './Card.styled';

const AdvertCard = ({ card }) => {
  const [isModalShown, setIsModalShown] = useState(false);
  const [activeLink, setActiveLink] = useState('features');
  const [clickToReviews, setClickToReviews] = useState(false);

  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const closeModal = () => {
    setIsModalShown(false);
    document.body.style.overflow = "visible";
};
  const isFavorite = useMemo(
    () => favorites.find(fav => fav._id === card._id),
    [favorites, card._id]
  );

  const openReviews = () => {
    setIsModalShown(true);
    document.body.style.overflow = 'hidden';
    setActiveLink('reviews');
    setClickToReviews(true);
  };

  const openCardModal = () => {
    setClickToReviews(false);
    setIsModalShown(true);
    document.body.style.overflow = 'hidden';
  };

  const addCardToFavorites = () => {
    isFavorite
      ? dispatch(removeFromFavorites(card._id))
      : dispatch(addToFavorites(card));
  };

  return (
    <>
      <VanPic>
        <img src={card.gallery[0]} alt={card.name} />
      </VanPic>

      <MainInfoWrap>
        <TitlePriceWrap>
          <Title>{card.name}</Title>

          <PriceWrap>
            <Price>€{card.price.toFixed(2)}</Price>
            <AddToFavBtn
              type="button"
              aria-label="Add to favorites"
              onClick={addCardToFavorites}
              $isFavorite={!!isFavorite}
            >
              <FavIcon width={20} height={20} />
            </AddToFavBtn>
          </PriceWrap>
        </TitlePriceWrap>

        <RatingLocationWrap>
          <RatingWrap>
            <StarIcon
              width={20}
              height={20}
              fillColor={'var(--rating-color)'}
            />
            <button
              type="button"
              aria-label="Open reviews"
              onClick={openReviews}
            >
              {`${card.rating}(${card.reviews.length} Reviews)`}
            </button>
          </RatingWrap>

          <LocationWrap>
            <PinIcon width={20} height={20} />
            <p>{card.location.split(',').reverse().join(', ')}</p>
          </LocationWrap>
        </RatingLocationWrap>

        <Description>{card.description}</Description>

        <DetailsList>
          <li>
            <AdultsIcon width={20} height={20} />
            {card.adults} adults
          </li>

          <li className="capitalize">
            <TransmissionIcon width={20} height={20} />
            {card.transmission}
          </li>

          <li className="capitalize">
            <PetrolIcon width={20} height={20} />
            {card.engine}
          </li>

          {card.kitchen >= 1 && (
            <li>
              <KitchenIcon width={20} height={20} />
              Kitchen
            </li>
          )}

          <li>
            <BedIcon width={20} height={20} />
            {card.beds} beds
          </li>

          {card.airConditioner >= 1 && (
            <li>
              <PiWind size={20} style={{ fill: 'var(--main-text)' }} />
              AC
            </li>
          )}
        </DetailsList>

        <ShowBtn
          type="button"
          aria-label="Show more details"
          onClick={openCardModal}
        >
          Show more
        </ShowBtn>
      </MainInfoWrap>

      {isModalShown && (
        <Modal
          card={card}
          isModalShown={isModalShown}
          closeModal={closeModal}
          activeLink={activeLink}
          setActiveLink={setActiveLink}
          clickReviews={clickToReviews}
        />
      )}
    </>
  );
};

export default AdvertCard;
