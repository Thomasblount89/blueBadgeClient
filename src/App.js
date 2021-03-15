import {useState, useEffect} from 'react';
import Auth from './components/Auth/Auth';
import Navbar from './components/Navbar/Navbar';
import Header from './Header';

// import logo from './logo.svg';


function App() {

const [sessionToken, setSessionToken] = useState(undefined);
console.log(sessionToken);

useEffect(() => {
  if(localStorage.getItem('token'))  {
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
  <Auth updateLocalStorage= {updateLocalStorage} />   // secind part of ternary
}

// below is for the logout but... we should create a ternary somewhere so that the logout button replaces the signup/login button once a user is logged in
  return (
    <div className="App">
<Navbar clearLocalStorage={clearLocalStorage} />
{viewConductor()}

<Header />
    </div>
  );
}

export default App;
