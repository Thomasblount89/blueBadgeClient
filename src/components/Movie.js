import React from 'react'

const IMG_API = `https://image.tmdb.org/t/p/w1280`
const search_API = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=`

const Movie = ({title, poster_path, overview, vote_average, id}) => {

    function handleClick(e) {
        e.preventDefault();
        let movieID = id;
        console.log(movieID);
        }

    return(
        <div onClick={handleClick} className='movie'>
            <img  src={IMG_API + poster_path} alt={title} />
            <div className='movie-info'>
                <h3>{title}</h3>
                <span>{vote_average}</span>
            </div>

            <div className='movie-over'>
                <h2>Overview:</h2>
                <p>{overview}</p>
            </div>
        </div> 
    )
}

export default Movie;