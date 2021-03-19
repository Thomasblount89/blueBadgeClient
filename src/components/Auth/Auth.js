import {useState} from 'react';
//import MovieFlix from '../MovieFlix/MovieFlix';

const Auth = (props) => {
    

    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [userId, setUserId] = useState('');
    
    // const [login, setLogin] = useState(true);
    const [hideSignIn, setHideSignIn] = useState(true);

    // const handleSubmit = event => {
    //     event.preventDefault();
    //     let emailFormat = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,10})$/i;
    //     if (password.length < 5) {
    //         alert('requires more than 5 characters')
    //     } else if (emailFormat.test(email)) {
    //         let reqBody = login ? { email: email, password: password } : {
    //             firstName: firstName,
    //             lastName: lastName,
    //             email: email,
    //             password: password
    //         };
            
    //         let url = login ? 'http://localhost:3001/user/login' : 'http://localhost:3001/user/register';
            
    //         fetch(url, {
    //             method: 'POST',
    //             body: JSON.stringify(reqBody),
    //             headers: new Headers({
    //                 'Content-Type': 'application/json'
    //             })
    //         }).then((response) => response.json())
    //         .then((json) => {
    //             props.updateToken(json.token)
    //             setUserId(json.user.id)
    //         })
    //     } else  {
    //         alert('requires (@ .) i.e: me@email.com')
    //         console.log(email)
    //     }
    // }
    
    const title = () => {
        return props.login ? 'Login' : 'Signup';
    }
    const loginToggle = (e) => {
        e.preventDefault();

        props.setLogin(!props.login);

        props.setEmail('');
        props.setPassword('');
        props.setFirstName('');
        props.setLastName('');
    }

    const signupFields = () => !props.login ?
    (
        <div>
            <label htmlFor='firstName'>First Name:</label>
            <br />
            <input type='text' id='firstName' value={props.firstName} onChange={e => props.setFirstName(e.target.value)} /> 
            <br />
            <label htmlFor='lastName'>Last Name:</label>
            <br />
            <input type='text' id='lastName' value={props.lastName} onChange={e => props.setLastName(e.target.value)} />
        </div>
    ) : null;

    
    
    
    return(
        
        <div className="signIn"> 
            <form onSubmit={props.handleSubmit}>
            {
                hideSignIn ? 
                <div>
                <h1>{title()}</h1>
                {signupFields()}
                <label htmlFor='email'>Email:</label>
                <br />
                <input type='text' id='email' value={props.email} onChange={(e) => props.setEmail(e.target.value)} /> 
                <br />
                <label htmlFor='password'>Password: </label>
                <br />
                <input type='password' id='password' value={props.password} onChange={e => props.setPassword(e.target.value)} />
                <br />
                <button onClick={loginToggle}>Sign Up Now!</button>
                <br />
                </div> : <h1>Welcome To MyFlix</h1>
            }
            <button onClick={() => setHideSignIn(!hideSignIn)}type='submit'>Go!</button>
                
            </form> 
        </div>

    );
}


export default Auth;
