import { useSelector } from "react-redux";
import { MdLocalOffer } from 'react-icons/md';
import { selectFavorites } from "../../redux/camperSelectors";
import { Container } from "../../components/Layout/Layout.styled";
import AdvertCard from "../../components/Card/Card";
import {
    AdvertsList,
    CardItem,
    GoToCatalogLink,
    NoItemsMsg,
} from "../../components/Card/Card.styled";

const Favorites = () => {
    const favorites = useSelector(selectFavorites);
    return (
        <>
            <Container>
                {favorites.length > 0 ? (
                    <AdvertsList>
                        {favorites.map((fav) => (
                            <CardItem key={fav._id}>
                                <AdvertCard card={fav} />
                            </CardItem>
                        ))}
                    </AdvertsList>
                ) : (
                    <NoItemsMsg className="favs">
                        You have not added anything to favorites ...
                        <GoToCatalogLink to="/catalog">
                            Catalog <MdLocalOffer size={20} fill="var(-rating-color)" />
                        </GoToCatalogLink>
                    </NoItemsMsg>
                )}
            </Container>
        </>
    );
};

export default Favorites;