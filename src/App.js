
import { Navbar } from 'react-bootstrap';


// import Header from './components/Header/Header'
import { BrowserRouter as Router } from 'react-router-dom';
import MovieFlix from './components/MovieFlix'
import { BrowserRouter, Route, Link, Switch, Router } from "react-router-dom";

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
        <Link to='/'>MovieFlix</Link>
          <input className='search' type='text' placeholder='Search...'></input>

        </header>
    </Router>

    <>
      <div className="App">
         <Navbar clearLocalStorage={clearLocalStorage} />
        {viewConductor()}
      </div>
    <BrowserRouter>
        <Switch>
      
          <Route path='/' exact render={() => <MovieFlix />} />
          
          
          
                
        </Switch>
      </BrowserRouter>

    </>
      </div>
  );

}
export default App;
