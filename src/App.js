import {useState, useEffect} from 'react';
import Movie from './components/Movie'

const featured_API = `https://api.themoviedb.org/3/movie/popular?api_key=58269892c382f28ba4692e1cab597755&language=en-US&page=1`
const search_API = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=`



function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(featured_API)
      .then(res => res.json())
      .then(data => { console.log(data);
        setMovies(data.results)});

    
  }, [])

  return (
    <div>
        <header >
          <input className='search' type='text' placeholder='Search...'></input>
        </header>

        <div className='movie-container'>
        {movies.length > 0 && movies.map(movie => (
          <Movie key={movie.id} {...movie}/>
        ))}
        </div>
    
    </div>
  );

}

export default App;
