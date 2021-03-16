const IMG_API = `https://image.tmdb.org/t/p/w1280`

const DisplayMovies = props => {
    console.log(props)
    return (
        <div>
            {
                props.movies.map(movie => (
                    <div className='movie' key={movie.id} onClick={() => {props.setSingleMovie(movie); props.setToggleSingleMovie(true)}}>
                        <img src={IMG_API + movie.poster_path} alt={movie.title} />
                        <div className='movie-info'>
                            <h3>{movie.title}</h3>
                            <span>{movie.vote_average}</span>
                        </div>
                        <div className='movie-over'>
                            <h2>Overview:</h2>
                            <p>{movie.overview}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default DisplayMovies;