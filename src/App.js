import MovieFlix from './components/MovieFlix'

const search_API = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=`


function App() {
  return (
    <div>
        <header >
          <input className='search' type='text' placeholder='Search...'></input>
        </header>

    <MovieFlix />
    </div>
  );

}
export default App;
