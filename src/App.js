import {useState} from 'react';
import Auth from './components/Auth/Auth';
// import logo from './logo.svg';


function App() {
const [sessionToken, setSessionToken] = useState(undefined);
console.log(sessionToken);

  return (
    <div className="App">

  
     <Auth />
    </div>
  );
}

export default App;
