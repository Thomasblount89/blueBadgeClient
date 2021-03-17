import Reviews from './Reviews/Reviews';
import DisplayReviews  from '../SingleMovie/Reviews/DisplayReviews/DisplayReviews';
const IMG_API = `https://image.tmdb.org/t/p/w1280`;

const SingleMovie = props => {
    return(
        <div>
            <div className='movie' key={props.singleMovie.id}>
                <img src={IMG_API + props.singleMovie.poster_path} alt={props.singleMovie.title} />
                <div className='movie-info'>
                    <h3>{props.singleMovie.title}</h3>
                    <span>{props.singleMovie.vote_average}</span>
                </div>
                <div className='movie-over'>
                    <h2>Overview:</h2>
                    <p>{props.singleMovie.overview}</p>
                </div>
            </div>
            <div className='review-create'>
                {
                    <Reviews movieId={props.singleMovie.id}/>
                }
            </div>
            <div className='review-display'>
                {
                    <DisplayReviews movieId={props.singleMovie.id} />
                }
            </div>
            <button onClick={() => props.setToggleSingleMovie(false)}>Exit</button>
        </div>
    )
}

export default SingleMovie;