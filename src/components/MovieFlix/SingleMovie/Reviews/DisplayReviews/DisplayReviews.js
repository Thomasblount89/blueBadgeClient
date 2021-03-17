import {useState, useEffect} from 'react';
import ReviewEdit from '../ReviewEdit';

const DisplayReviews = (props) =>{
    console.log(props.movieId);
    console.log(props.token);
    const [reviews, setReviews] = useState([]);
    //const [updateActive, setUpdateActive] = useState(false);
 

    const fetchReviews = () => {
        fetch(`http://localhost:3001/review/${props.movieId}`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                //'Authorization': props.token
            })
        }).then((res) => res.json())
        .then((data) => {
            setReviews(data);
            console.log(data);
        });
    }

    const deleteReview = (reviews) => {
        fetch(`http://localhost:3001/review/${reviews.id}`, {
            method: 'DELETE',
            headers: new Headers({
                "Content-Type": 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => fetchReviews());
    }

    // const updateOn = () => {
    //     setUpdateActive(true);
    // }

    // const updateOff = () => {
    //     setUpdateActive(false);
    // }

    useEffect(() => {
        fetchReviews();
    },[])

    

    return(
        <div>
            {
                reviews.map((reviews, index) => (
                    <div key={index}>
                        <h3>{reviews.reviewTitle}</h3>
                        <p>{reviews.reviewersPost}</p>
                        <button onClick={() => {deleteReview(reviews)}}>Delete</button>
                        <ReviewEdit reviewTitle={reviews.reviewTitle} reviewersPost={reviews.reviewersPost}
                            token={props.token} reviewId={reviews.id} fetchReviews={fetchReviews}/>
                        {/* <button onClick={!setUpdateActive}>Edit</button>
                        {
                            updateActive ? <ReviewEdit reviewToUpdate={reviewToUpdate} updateOff={updateOff} 
                            token={props.token} fetchReviews={fetchReviews}/> : <></>
                        } */}
                    </div>
                ))
            }
        </div>
    )
}

export default DisplayReviews;