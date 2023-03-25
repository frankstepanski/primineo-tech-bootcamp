import StarRating from "./StarRating";

const ReviewForm = ({submitHandler}) => {

    return (
        <div className="review-form">
            <form onSubmit = {submitHandler}>
                <label>Stars:</label>
                    <StarRating name = "stars" stars={null} />
                    <label>Comment:</label>
                    <textarea rows="2" cols="25" name="comment" /> 
                    <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ReviewForm;