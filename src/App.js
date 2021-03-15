import MovieFlix from './components/MovieFlix'
import { BrowserRouter, Route, Link, Switch, Router } from "react-router-dom";

const search_API = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=`


function App() {
  return (
    <div>
    <Router>
        <header >
        <Link to='/'>MovieFlix</Link>
          <input className='search' type='text' placeholder='Search...'></input>

        </header>

    </Router>

    <BrowserRouter>
        <Switch>
      
          <Route path='/' exact render={() => <MovieFlix />} />
          
          
          
                
        </Switch>
      </BrowserRouter>



    </div>
  );

}
export default App;
