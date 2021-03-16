import {
    Route,
    Link,
    Switch 
} from 'react-router-dom';
import {useEffect, useState} from 'react'
import SingleMovie from './SingleMovie';

const IMG_API = `https://image.tmdb.org/t/p/w1280`
//const search_API = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=`

const Movie = (props) => {
    console.log(props);
    function HandleClick(e) {
        e.preventDefault();
        let movieID = props.movie.id;
        console.log(movieID);
        const featured_API = `https://api.themoviedb.org/3/movie/${props.movie.id}?api_key=58269892c382f28ba4692e1cab597755&language=en-US`
        fetch(featured_API)
            .then(res => res.json())
            .then(data => { 
            console.log(data.title);
            props.setSingleMovie(data);
        });
    }
    

    return(
        <div>
            <div onClick={HandleClick} className='movie'>
                <Link className='Home' to='/SingleMovie'>
                    <img  src={IMG_API + props.movie.poster_path} alt={props.movie.title} />
                    <div className='movie-info'>
                        <h3>{props.movie.title}</h3>
                        <span>{props.movie.vote_average}</span>
                    </div>

                    <div className='movie-over'>
                        <h2>Overview:</h2>
                        <p>{props.movie.overview}</p>
                    </div>
                </Link>
            </div>
            <SingleMovie />
        </div>
    )
}

export default Movie;
