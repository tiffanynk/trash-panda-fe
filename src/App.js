import { useState } from 'react';
import './styles/App.scss';
import Map from './components/Map';
import MapSearch from './components/MapSearch';
import SignIn from './components/SignIn';
import BottomNavBar from './components/BottomNavBar';

const baseURL = 'https://us-central1-trash-panda-shehacks.cloudfunctions.net/api/';

function App() {
    // const mapRef = useRef(null)
    const [location, setLocation] = useState({});
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
            <header className="header">
                <h1>TRASH PANDA</h1>
            </header>
            {/* <SignIn logIn={logIn} signUp={signUp}/> */}
            <MapSearch setLocation={setLocation} />
            <Map location={location} />
            <BottomNavBar />
        </div>
    );
}

export default App;
