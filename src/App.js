import {useState, useEffect} from 'react';
import { Navbar } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import MovieFlix from './components/MovieFlix'
import { Route, Switch, Link } from "react-router-dom";
import AddReview from './components/AddReview'; 
import Auth from './components/Auth/Auth';
import Reviews from './components/Reviews';
import SingleMovie from './components/SingleMovie';

const search_API = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=`


function App() {

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


  return (
    <div>
      <Router>
        <header >
          <Link className='Home' to='/Reviews'><h3 className='nav'>Reviews</h3></Link>
          <Link className='Home' to='/Auth'><h3 className='nav'>Login/sign up</h3></Link>
          <Link className='Home' to='/'><h3 className='nav'>Home</h3></Link>
          <input className='search' type='text' placeholder='Search...'></input>
        </header>
        <Switch>
          <Route path='/' exact render={() => <MovieFlix />} />
          <Route path='/AddReview' exact component={AddReview} />
          <Route path='/SingleMovie' exact component={SingleMovie}/>
          <Route path='/Reviews' exact component={Reviews} />
          <Route path='/Auth' exact render={() => <Auth updateLocalStorage={updateLocalStorage}/>} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
