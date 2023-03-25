import Review from "./Review";

const ReviewList = ({reviews}) => {
    return (
        <div className="review-list">
            <ul className="reviews">
                 {
                    reviews.map((review, index) => {
                        return <Review key={index} review={review} />
                    })
                 }
            </ul>
        </div>
    );
}

export default ReviewList;