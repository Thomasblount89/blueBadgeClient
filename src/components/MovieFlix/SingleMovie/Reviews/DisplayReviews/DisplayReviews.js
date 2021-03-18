import {useState, useEffect} from 'react';
import ReviewEdit from '../ReviewEdit';

const DisplayReviews = (props) =>{
    console.log(props.userId);
    const [reviews, setReviews] = useState([]);
    
    const fetchReviews = () => {
        fetch(`http://localhost:3001/review/${props.movieId}`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
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
    
            useEffect(() => {
                fetchReviews();
    },[])
    
    
    
    return(
        <div>
            {
                reviews.map((reviews, index) => (
                    <div key={index}>
                        <h4>{reviews.reviewTitle}</h4>
                        <p>{reviews.reviewersPost}</p>
                        {
                            reviews.owner_id == props.userId ? 
                                <>
                                <button onClick={() => {deleteReview(reviews)}}>Delete</button>
                                <ReviewEdit reviewTitle={reviews.reviewTitle} reviewersPost={reviews.reviewersPost}
                                token={props.token} reviewId={reviews.id} fetchReviews={fetchReviews}/>
                                </> 
                            : <></>
                        }
                        <hr/>
                    </div>
                ))
            }
        </div>
    )
}

export default DisplayReviews;