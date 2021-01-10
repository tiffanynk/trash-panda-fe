import { useState } from 'react';
import './styles/App.scss';
import Map from './components/Map';
import MapSearch from './components/MapSearch';
import BottomNavBar from './components/BottomNavBar';

function App() {
    // const mapRef = useRef(null)
    const [location, setLocation] = useState({});

    return (
        <div className="App">
            <header className="header">
                <h1>TRASH PANDA</h1>
            </header>
            <MapSearch setLocation={setLocation} />
            <Map location={location} />
            <BottomNavBar />
        </div>
    );
}

export default App;
