import {useState, useEffect} from 'react';
import Movie from './components/Movie'
import Header from './components/Header/Header'
import { BrowserRouter as Router } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import { Navbar } from 'react-bootstrap';


const featured_API = `https://api.themoviedb.org/3/movie/popular?api_key=58269892c382f28ba4692e1cab597755&language=en-US&page=1`
const search_API = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=`



function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(featured_API)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setMovies(data.results)
      });


  }, [])


  const [sessionToken, setSessionToken] = useState(undefined);
  console.log(sessionToken);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'));
    }
  }, []);

  const updateLocalStorage = newToken => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
  }

  const clearLocalStorage = () => {
    localStorage.clear();
    setSessionToken(undefined);
  }

  // this function is not complete below, will add a ternary later...
  const viewConductor = () => {
    <Auth updateLocalStorage={updateLocalStorage} />   // secind part of ternary
  }

  // below is for the logout but... we should create a ternary somewhere so that the logout button replaces the signup/login button once a user is logged in

  return (
    <>
      <div className="App">
         <Navbar clearLocalStorage={clearLocalStorage} />
        {viewConductor()}
      </div>

      <div>
        <Router>
          <header >
            <Header />
            <input className='search' type='text' placeholder='Search...'></input>
          </header>
        </Router>

        <div className='movie-container'>
          {movies.length > 0 && movies.map(movie => (
            <Movie key={movie.id} {...movie} />
          ))}
        </div>

      </div>
    </>
  );

}

export default App;
