import React, {useState} from 'react';

const ReviewEdit = (props) => {
    const [editTitle, setEditTitle] = useState(props.reviewTitle);
    const [editReview, setEditReview] = useState(props.reviewersPost);
    const [editReviewToggle, setEditReviewToggle] = useState(false);
    const reviewToUpdate = (e, review) => {
        e.preventDefault();
        console.log("in reviewToUpdate");
        console.log(props.reviewId);
        fetch(`http://localhost:3001/review/${props.reviewId}`, {
            method:"PUT",
            body: JSON.stringify({reviewTitle: editTitle, reviewersPost: editReview}),
            headers: new Headers({
                "Content-Type": 'application/json',
                'Authorization': props.token
            })
        }).then((res) => res.json()
            .then(
                props.fetchReviews(),
                setEditReviewToggle(false)
            ));
    }
    return(
        <>
            {
                editReviewToggle ? 
                <form onSubmit={reviewToUpdate}>
                    <h3>Edit Review</h3>
                    <label htmlFor='title'>Title:</label>
                    <br />
                    <input type='text' id='title' value={editTitle} onChange={(e) => setEditTitle(e.target.value)} /> 
                    <br />
                    <label htmlFor='review'>Review: </label>
                    <br />
                    <textarea rows="6" cols="70" id='review' value={editReview} onChange={e => setEditReview(e.target.value)} />
                    <br />
                    <button type='submit'>Submit</button>
                    <button onClick={() => setEditReviewToggle(false)}>Back</button>
                </form> : <button onClick={setEditReviewToggle}>Edit</button>
            }
        </>
    )
}

export default ReviewEdit;