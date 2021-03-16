import {useState} from 'react';
import Auth from './components/Auth/Auth';
import MovieFlix from './components/MovieFlix/MovieFlix';


function App() {
const [sessionToken, setSessionToken] = useState(undefined);
console.log(sessionToken);

  return (
    <div className='root' >
      <MovieFlix />
    </div>
  );
}

export default App;