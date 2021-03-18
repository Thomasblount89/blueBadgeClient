import Auth from './components/Auth/Auth';
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
      {/* <button onClick={clearToken}>Logout</button> */}
     <Auth updateToken={updateToken} logout={clearToken} token={sessionToken}/> 
    </div>
  );
}

export default App;

