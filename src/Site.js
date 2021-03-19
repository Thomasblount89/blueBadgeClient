// import App from './App';
import {useState, useEffect} from 'react';
import Auth from './components/Auth/Auth';
import MovieFlix from './components/MovieFlix/MovieFlix';
import APIURL from './helpers/environment';

function Site(props) {

    const [movies, setMovies] = useState([]);
    const [toggleSingleMovie, setToggleSingleMovie] = useState(false);
    const [searchTerm, setSearchTerm] = useState('')
    const [signInToggle, setSignInToggle] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userId, setUserId] = useState('');
    const [login, setLogin] = useState(true);

    const search_API = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=`

    const handleSubmit = event => {
        event.preventDefault();
        let emailFormat = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,10})$/i;
        if (password.length < 5) {
            alert('requires more than 5 characters')
        } else if (emailFormat.test(email)) {
            let reqBody = login ? { email: email, password: password } : {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            };
            
            let url = login ? `${APIURL}/user/login` : `${APIURL}/user/register`;
            
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(reqBody),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            }).then((response) => response.json())
            .then((json) => {
                props.updateToken(json.token)
                setUserId(json.user.id)
            })
        } else  {
            alert('requires (@ .) i.e: me@email.com')
            console.log(email)
        }
    }
    console.log(userId);
    const handleOnSubmit= (e) => {
        e.preventDefault();
    
        fetch(search_API + searchTerm)
        .then((res) => res.json())
        .then((data) => {
            setMovies(data.results)
            
        })
    }

    const handleOnChange = (e) => {
        setSearchTerm(e.target.value)
    }

  return (
      <div className="App">
        {
            signInToggle ? <Auth updateToken={props.updateToken} logout={props.clearToken} token={props.token} setFirstName={setFirstName} setLastName={setLastName} setEmail={setEmail} setPassword={setPassword} userId={userId} handleSubmit={handleSubmit} setLogin={setLogin} login={login}/> : <p className='nav' onClick={setSignInToggle} >Sign In</p>
        }
     {/* <Site updateToken={updateToken} logout={clearToken} token={sessionToken}/> */}
     <header>
        <div className="home">
            <h3 className='nav'  onClick={() => setToggleSingleMovie(false)}>Home</h3>  
        </div>
        <div className="search">
            <form onSubmit={handleOnSubmit}>
            <input className='search' placeholder='Search Movie' value={searchTerm} onChange={handleOnChange} />
            </form>
        </div>
        <div className="login-logout"> 
            {/* <p className='nav' onClick={!setSignInToggle}>back</p> */}
            {
                props.token ? <p onClick={props.logout} className='nav'>Logout</p> : <></>
            }
            
        </div>
        </header>
     <MovieFlix movies={movies} setMovies={setMovies} clickLogout={props.clickLogout} toggleSingleMovie={toggleSingleMovie} clickLogout={props.clickLogout} token={props.token} logout={props.logout} setToggleSingleMovie={setToggleSingleMovie} userId={userId}/> 
    </div>
  );
}

export default Site;