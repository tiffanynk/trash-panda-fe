import { useState } from 'react';
import './styles/App.scss';
import SignIn from './components/SignIn';
import Header from './components/Header';
import Home from './components/Home';

const baseURL = 'https://us-central1-trash-panda-shehacks.cloudfunctions.net/api/';

function App() {
    const [user, setUser] = useState({});

    const signUp = (user) => {
        fetch(baseURL + 'users', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user: {
                    email: user.email,
                    username: user.username,
                    password: user.password,
                },
            }),
        })
            .then((response) => response.json())
            .then((user) => setUser(user));
    };

    const logIn = (username, password) => {
        fetch(baseURL + 'login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user: {
                    username,
                    password,
                },
            }),
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.token) {
                    localStorage.setItem('token', result.token);
                    setUser(user);
                    console.log('signed in');
                } else {
                    console.log('nope no login for you');
                }
            });
    };

    return (
        <div className="App">
            <Header />
            <Home user={user} />
          {/* <SignIn logIn={logIn} signUp={signUp}/> */}
        </div>
    );
}

export default App;
