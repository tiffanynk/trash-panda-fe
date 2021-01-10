import { useState } from 'react';
import env from 'react-dotenv';

export default function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [loginScreen, setLoginScreen] = useState(true);

    const handleUsername = () => setUsername(target.value);
    const handlePassword = () => setPassword(target.value);
    const handleEmail = () => setEmail(target.value);

    const handleSubmit = () => {};

    return (
        <div id="form-container">
            <form>
                {loginScreen ? <h1>Log In</h1> : <h1>Sign Up</h1>}
                {!loginScreen ? (
                    <>
                        <label>Username</label>
                        <input
                            name="Username"
                            value={username}
                            onChange={handleUsername}
                        ></input>
                    </>
                ) : null}
                <label>Email</label>
                <input name="Email" value={email} onChange={handleEmail}></input>
                <label>Password</label>
                <input name="Password" value={password} onChange={handlePassword}></input>
                <button onClick={handleSubmit}>Submit</button>
                {loginScreen ? (
                    <>
                        <p>Already registered?</p>
                        <button onClick={() => setLoginScreen(!loginScreen)}>
                            Log In
                        </button>
                    </>
                ) : (
                    <>
                        <p>Not registered?</p>
                        <button onClick={() => setLoginScreen(!loginScreen)}>
                            Sign Up
                        </button>
                    </>
                )}
            </form>
        </div>
    );
}
