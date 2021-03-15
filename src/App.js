
import Header from './components/Header/Header'
import { BrowserRouter as Router } from 'react-router-dom';
import MovieFlix from './components/MovieFlix'
//import {Navbar} from 'react-router-dom';

const search_API = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=`


function App() {
  return (
    <>
      {/* <div className="App">
        <Navbar clearLocalStorage={clearLocalStorage} />
        {viewConductor()}
      </div> */}

      <div>
        <Router>
          <header >
            <Header />
            <input className='search' type='text' placeholder='Search...'></input>
          </header>
        </Router>
        <MovieFlix />
      </div>
    </>
  );

}
export default App;
