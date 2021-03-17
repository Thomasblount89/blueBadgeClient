import {useState, useEffect} from 'react';

const DisplayReviews = (props) =>{
    console.log(props.movieId);
    const [reviews, setReviews] = useState([]);

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
                    </div>
                ))
            }
        </div>
    )
}

export default DisplayReviews;