import { useState, useEffect } from 'react';
import env from 'react-dotenv';

export default function SignIn({ signUp, login }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [loginScreen, setLoginScreen] = useState(true);

    const handleUsername = ({ target }) => setUsername(target.value);
    const handlePassword = ({ target }) => setPassword(target.value);
    const handleEmail = ({ target }) => setEmail(target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        loginScreen ? login(email, password) : signUp(username, email, password);
    };

    const handleLogin = (event) => {
        event.preventDefault();
        setLoginScreen(!loginScreen);
    };

    return (
        <div id="form-container">
            <form id="signin-form">
                {loginScreen ? <h1>Log In</h1> : <h1>Sign Up</h1>}
                {!loginScreen ? (
                    <>
                        <label>Username: </label>
                        <input
                            name="Username"
                            value={username}
                            onChange={handleUsername}
                        ></input>
                    </>
                ) : null}
                <label>Email: </label>
                <input name="email" value={email} onChange={handleEmail}></input>
                <label>Password: </label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handlePassword}
                ></input>
                <button onClick={(event) => handleSubmit(event)}>Submit</button>
                {loginScreen ? (
                    <>
                        <p>Already registered?</p>
                        <button onClick={handleLogin}>Log In</button>
                    </>
                ) : (
                    <>
                        <p>Not registered?</p>
                        <button onClick={handleLogin}>Sign Up</button>
                    </>
                )}
            </form>
        </div>
    );
}
