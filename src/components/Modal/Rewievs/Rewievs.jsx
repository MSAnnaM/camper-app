import {
    Avatar,
    Comment,
    NameRatingWrap,
    ReviewHead,
    Reviewer,
    ReviewersList,
    StarsList,
} from "./Rewievs.styled";
import { FeatureReviewsWrap } from "../Features/Features.styled";
import {StarIcon} from "../../Icons/AllIcons";

export const Reviews = ({ card }) => {
    return (
        <FeatureReviewsWrap>
            <ReviewersList>
                {card.reviews.map(({ reviewer_name, reviewer_rating, comment }, i) => (
                    <Reviewer key={`${reviewer_name}/${i}`}>
                        <ReviewHead>
                            <Avatar>{reviewer_name.slice(0, 1)}</Avatar>
                            <NameRatingWrap>
                                <p>{reviewer_name}</p>
                                <StarsList>
                                    {Array(5)
                                        .fill(0)
                                        .map((_, i) => (
                                            <li key={i}>
                                                <StarIcon
                                                    width={20}
                                                    height={20}
                                                    svg={"icon-star"}
                                                    fillColor={
                                                        Math.round(reviewer_rating) < i + 1
                                                            ? "var(--features-color)"
                                                            : "var(--rating-color)"
                                                    }
                                                />
                                            </li>
                                        ))}
                                </StarsList>
                            </NameRatingWrap>
                        </ReviewHead>
                        <Comment>{comment}</Comment>
                    </Reviewer>
                ))}
            </ReviewersList>
        </FeatureReviewsWrap>
    );
};