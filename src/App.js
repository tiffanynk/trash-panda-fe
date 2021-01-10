import { useState } from 'react';
import './styles/App.scss';
import SignIn from './components/SignIn';
import Header from './components/Header';
import Home from './components/Home';

const baseURL = 'https://us-central1-trash-panda-shehacks.cloudfunctions.net/api/';

function App() {
    const [user, setUser] = useState({});
    const [showHome, isShowingHome] = useState(true);

    const signup = (username, email, password) => {
        console.log('email', email);
        fetch(baseURL + 'signup', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                email,
                password,
            }),
        })
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then((result) => {
                setUser(result.user);
                isShowingHome(true);
            });
    };

    const login = (email, password) => {
        fetch(baseURL + 'login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.token) {
                    localStorage.setItem('token', result.token);
                    setUser(result.user);
                    isShowingHome(true);
                } else {
                    console.log('nope no login for you');
                }
            });
    };

    return (
        <div className="App">
            <Header />
            {showHome ? (
                <Home user={user} setUser={setUser} isShowingHome={isShowingHome} />
            ) : (
                <SignIn login={login} signup={signup} />
            )}
        </div>
    );
}

export default App;
