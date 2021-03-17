import {useState} from 'react';
import Auth from './components/Auth/Auth';
import MovieFlix from './components/MovieFlix/MovieFlix';
import Navbar from './components/Navbar/Navbar'


function App() {
const [sessionToken, setSessionToken] = useState(undefined);
console.log(sessionToken);

  return (
    <div>
      <Navbar/>
      <MovieFlix />
    </div>
  );
}

export default App;