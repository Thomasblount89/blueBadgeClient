import {useState} from 'react';


const Auth = (props) => {
    console.log(props)

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(true);

    const handleSubmit = event => {
        event.preventDefault();

        let reqBody = login ? { email: email, password: password} : {
            firstName:firstName,
            lastName: lastName,
            email: email,
            password: password
        };

        let url = login ? 'http://localhost:3001/user/login':'http://localhost:3001/user/register';

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(reqBody),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then(response => response.json())
        .then(json => props.updateLocalStorage(json.token))
    }

    const title = () => {
        return login ? 'Login' : 'Signup';

    }

    const loginToggle = (e) => {
        e.preventDefault ();

        setLogin(!login);

        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
    }

    const signupFields = () => !login ?
    (
        <div>
            <label htmlFor='firstName'>First Name:</label>
            <br />
            <input type='text' id='firstName' value={firstName} onchange={e => setFirstName(e.target.value)} /> 
            <br />
            <label htmlFor='lastName'>Last Name:</label>
            <br />
            <input type='text' id='lastName' value={lastName} onChange={e => setLastName(e.target.value)} />
        </div>
    ) : null;

return(
    <div>
        <form onSubmit={handleSubmit}>
            <h1>{title()}</h1>
            {signupFields()}
            <label htmlFor='email'>Email:</label>
            <br />
            <input type='text' id='email' value={email} onChange={(e) => setEmail(e.target.value)} /> 
            <br />
            <label htmlFor='password' value={password} onChange={e => setPassword(e.target.value)} />
            <br />
            <button onClick={loginToggle}>Login/Signup Toggle</button>
            <br />
            <button type='submit'>Submit User Data</button>
        </form>
    </div>
);

};

export default Auth;