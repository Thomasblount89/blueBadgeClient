import {useState} from 'react';

const Auth = (props) => {

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
                <button type='submit'>Go!</button>
                </div>
            </form> 

        </div>

    );
}


export default Auth;
