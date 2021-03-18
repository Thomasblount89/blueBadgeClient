import Reviews from './Reviews/Reviews';
import DisplayReviews  from '../SingleMovie/Reviews/DisplayReviews/DisplayReviews';
const IMG_API = `https://image.tmdb.org/t/p/w1280`;

const SingleMovie = props => {
    return(
        <div className="single-movie">
            <div className='single' key={props.singleMovie.id}>
                <img src={IMG_API + props.singleMovie.poster_path} alt={props.singleMovie.title} />
            </div>

                <h3 className='single' >{props.singleMovie.title}</h3>
                <span className='single'>Rating: {props.singleMovie.vote_average}</span>
                        <div className='overviewSingle' >
                            <h2 className='single'>Overview:</h2>
                            <p className='over'>{props.singleMovie.overview}</p>
                        </div>
           
            <div className="single-movieContent">
                <div className='review-create'>
                        <Reviews movieId={props.singleMovie.id} token={props.token} userId={props.userId}/>
                </div>
                <div className='review-display'>
                        <DisplayReviews movieId={props.singleMovie.id} token={props.token} userId={props.userId}/>
                </div>
            </div>
        </div>
    )
}

export default SingleMovie;