import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { Container } from 'components/Layout/Layout.styled';
import { FaArrowLeft } from "react-icons/fa";
import AdvertCard from "../../components/Card/Card";
import { Filters } from "components/Filter/Filter";
import {
  AdvertsList,
  CardItem,
  ListBtnWrap,
  LoadMoreBtn,
  NoItemsMsg,
} from "../../components/Card/Card.styled";
import {
  CatalogContainer,
  GoToPrevPageBtn,
} from "./Catalog.styled";
import { getAllCards, getTotal } from "../../redux/camperApi";
import { selectCard, selectTotal,selectError } from "../../redux/camperSelectors";

const Catalog = () => {
const [page, setPage] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();
    const [showLoadMore, setShowLoadMore] = useState(true);

    const dispatch = useDispatch();
    const cards = useSelector(selectCard);
    const total = useSelector(selectTotal);
    const error = useSelector(selectError);

    useEffect(() => {
        setShowLoadMore(true);

        if (page >= Math.ceil(total / 4)) {
            setShowLoadMore(false);
        }

        dispatch(getTotal(searchParams));
        dispatch(getAllCards({ page, limit: 4, searchParams }));
    }, [dispatch, page, total, searchParams]);

    const handleLoadMore = () => {
        if (page >= Math.ceil(total / 4) || cards.length < 4) {
            setShowLoadMore(false);
            return;
        }

        setShowLoadMore(true);
        setPage((prev) => prev + 1);
    };

    const handleGoToPrevPage = () => {
        setPage((prev) => prev - 1);
        
    };


  return (
    <>
             <Container>
              <CatalogContainer>
                   <Filters
            setPage={setPage}
            searchParams={searchParams}
            setSearchParams={setSearchParams}
          />
                  <ListBtnWrap id="advertBlock">
            {page > 1 && (
              <GoToPrevPageBtn
                id="goBack"
                type="button"
                onClick={handleGoToPrevPage}
              >
                <FaArrowLeft size={20} fill="var(--light-text)" />
                Go back
              </GoToPrevPageBtn>
            )}
            {cards.length < 0 || error === "Not found" ? (
              <NoItemsMsg>No items</NoItemsMsg>
            ) : (
              <AdvertsList>
                {cards.map((card) => (
                  <CardItem key={card._id}>
                    <AdvertCard card={card} />
                  </CardItem>
                ))}
              </AdvertsList>
            )}

            {showLoadMore && !error && cards.length > 0 && (
              <LoadMoreBtn type="button" onClick={handleLoadMore}>
                Load more
              </LoadMoreBtn>
            )}
          </ListBtnWrap>
                  </CatalogContainer>
              </Container>
    </>
  );
};

export default Catalog;