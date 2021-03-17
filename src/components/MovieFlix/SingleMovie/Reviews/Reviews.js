import {useState} from 'react';

const SingleReview = (props) => {
    console.log(props.movieId);
    console.log(props.token);
    const [title, setTitle] = useState('');
    const [newReview, setNewReview] = useState('');
    const [reviewToggle, setReviewToggle] = useState(false);

        const handleSubmit = e => {
        e.preventDefault();
        fetch('http://localhost:3001/review/post', {          //movie id = props.id
            method: 'POST',
            body: JSON.stringify({reviewTitle: title, reviewersPost: newReview, movie_id: props.movieId}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => res.json())
        .then((logData) => {
            console.log(logData);
            setReviewToggle(false);
            //fetchReviews();

        })
    }

    return(
        <div className="leaveReview">
            {
                reviewToggle ? 
                <form onSubmit={handleSubmit}>
                    <h3>Leave a Review</h3>
                    <label htmlFor='title'>Title:</label>
                    <br />
                    <input type='text' id='title' value={title} onChange={(e) => setTitle(e.target.value)} /> 
                    <br />
                    <label htmlFor='review'>Review: </label>
                    <br />
                    <textarea rows="6" cols="70" id='review' value={newReview} onChange={e => setNewReview(e.target.value)} />
                    <br />
                    <button type='submit'>Submit</button>
                    <button onClick={() => setReviewToggle(false)}>Back</button>
                </form> : <button onClick={setReviewToggle}>Leave a Review</button>
            }
        </div>
    )
}

export default SingleReview;