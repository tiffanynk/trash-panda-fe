import { useState } from 'react';
import './styles/App.scss';
import SignIn from './components/SignIn';
import Header from './components/Header';
import Home from './components/Home';

function App() {
    // const mapRef = useRef(null)

    return (
        <div className="App">
            <Header />
            <Home user={{}} />
        </div>
    );
}

export default App;
