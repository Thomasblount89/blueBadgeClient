import {useState} from 'react';

const SingleReview = (props) => {
    console.log(props.movieId);
    const [title, setTitle] = useState('');
    const [newReview, setNewReview] = useState('');

        const handleSubmit = e => {
        e.preventDefault();
        fetch('http://localhost:3001/review/post', {          //movie id = props.id
            method: 'POST',
            body: JSON.stringify({reviewTitle: title, reviewersPost: newReview, movie_id: props.movieId}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjE1OTgzNDUxLCJleHAiOjE2MTYwNjk4NTF9.Nz9dQSkJQcNV6aWSY1ZTuiotYwMaOMkRmXHKALBlsJw"
            })
        }).then((res) => res.json())
        .then((logData) => {
            console.log(logData);
            setTitle('');
            setNewReview('');
        })
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Leave a Review</h3>
                <label htmlFor='title'>Title:</label>
                <br />
                <input type='text' id='title' value={title} onChange={(e) => setTitle(e.target.value)} /> 
                <br />
                <label htmlFor='review'>Review: </label>
                <br />
                <input type='text' id='review' value={newReview} onChange={e => setNewReview(e.target.value)} />
                <br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default SingleReview;