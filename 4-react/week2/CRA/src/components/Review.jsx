import StarRating from "./StarRating";

const Review = ({review}) => {
    return (
        <li>
            <StarRating stars={review.stars} />
            <p className="review">{review.comment}</p>
        </li>
    );
}

export default Review;