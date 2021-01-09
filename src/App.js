import { useState } from 'react';
import './App.css';
import Map from './components/Map';
import MapSearch from './components/MapSearch';

function App() {
    // const mapRef = useRef(null)
    const [location, setLocation] = useState({});

    return (
        <div className="App">
            <header>
                <h1>TRASH PANDA</h1>
            </header>
            <MapSearch setLocation={setLocation} />
            <Map location={location} />
        </div>
    );
}

export default App;
