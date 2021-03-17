import React, {useState} from 'react';

const ReviewEdit = (props) => {
    const [editTitle, setEditTitle] = useState(props.reviewTitle);
    const [editReview, setEditReview] = useState(props.reviewersPost);
    const reviewToUpdate = (e, review) => {
        e.preventDefault();
        console.log("in reviewToUpdate");
        console.log(props.reviewId);
        //console.log(review);
        fetch(`http://localhost:3001/review/${props.reviewId}`, {
            method:"PUT",
            body: JSON.stringify({reviewTitle: editTitle, reviewersPost: editReview}),
            headers: new Headers({
                "Content-Type": 'application/json',
                'Authorization': props.token
            })
        }).then((res) => res.json())
    }
    return(
        <div>
            <form onSubmit={reviewToUpdate}>
                <h3>Edit Review</h3>
                <label htmlFor='title'>Title:</label>
                <br />
                <input type='text' id='title' value={editTitle} onChange={(e) => setEditTitle(e.target.value)} /> 
                <br />
                <label htmlFor='review'>Review: </label>
                <br />
                <input type='text' id='review' value={editReview} onChange={e => setEditReview(e.target.value)} />
                <br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default ReviewEdit;