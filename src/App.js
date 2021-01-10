import { useState } from 'react';
import './styles/App.scss';
import Map from './components/Map';
import MapSearch from './components/MapSearch';
import SignIn from './components/SignIn';

function App() {
    // const mapRef = useRef(null)
    const [location, setLocation] = useState({});

    return (
        <div className="App">
            <header>
                <h1>TRASH PANDA</h1>
            </header>
            {/* <MapSearch setLocation={setLocation} />
            <Map location={location} /> */}
            <SignIn />
        </div>
    );
}

export default App;
