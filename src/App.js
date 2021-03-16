import Auth from './components/Auth/Auth';
// import logo from './logo.svg';
import MovieFlix from './components/MovieFlix/MovieFlix';
import {useState, useEffect} from 'react';


function App() {
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
const [sessionToken, setSessionToken] = useState(undefined);
console.log(sessionToken);

  return (
    <div className="App">
      <MovieFlix />
    </div>
  );
}

export default App;
