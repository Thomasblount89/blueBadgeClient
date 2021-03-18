import Auth from './components/Auth/Auth';
// import logo from './logo.svg';
import MovieFlix from './components/MovieFlix/MovieFlix';
import {useState, useEffect} from 'react';


function App() {

const [sessionToken, setSessionToken] = useState('');
useEffect (() => {
  if (localStorage.getItem('token')){
    setSessionToken(localStorage.getItem('token'));
  }
}, [])

const updateToken = (newToken) => {
  localStorage.setItem('token', newToken);
  setSessionToken(newToken);
}
console.log(sessionToken);

const clearToken = () => {
  localStorage.clear();
  setSessionToken('');
}

  return (
    <div className="App">
     {/* <MovieFlix clickLogout={clearToken} token={sessionToken}/>  */}
     <Auth updateToken={updateToken} clickLogout={clearToken} token={sessionToken}/> 
      <button onClick={clearToken}>clearToken</button>
    </div>
  );
}

export default App;

