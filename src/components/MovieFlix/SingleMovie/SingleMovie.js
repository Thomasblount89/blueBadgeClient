const IMG_API = `https://image.tmdb.org/t/p/w1280`;

const SingleMovie = props => {
    return(
        <div>
            <div className='single' key={props.singleMovie.id}>
                <img src={IMG_API + props.singleMovie.poster_path} alt={props.singleMovie.title} />
                        <div className='movie-info'>
                            
                        </div> 
            </div>

                <h3 className='single' >{props.singleMovie.title}</h3>
                <span className='single'>Rating: {props.singleMovie.vote_average}</span>
                        <div className='overviewSingle' >
                            <h2 className='single'>Overview:</h2>
                            <p className='over'>{props.singleMovie.overview}</p>
                        </div>
           
            
        </div>
    )
}

export default SingleMovie;