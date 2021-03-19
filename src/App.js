//import Auth from './components/Auth/Auth';
import {useState, useEffect} from 'react';
import Site from './Site';

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
     <Site updateToken={updateToken} logout={clearToken} token={sessionToken}/>
     {/* <Auth updateToken={updateToken} logout={clearToken} token={sessionToken}/>  */}

    </div>
  );
}

export default App;

