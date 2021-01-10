import { useState } from 'react';
import Map from './Map';
import MapSearch from './MapSearch';
import BottomNavBar from './BottomNavBar';
import Button from 'react-bootstrap/Button';

export default function Home({ user }) {
    const [location, setLocation] = useState({});

    return (
        <>
            <MapSearch setLocation={setLocation} />
            <Map location={location} />
            {user ? (
                <BottomNavBar />
            ) : (
                <Button className="login-button">LOGIN/SIGNUP FOR POINTS!</Button>
            )}
        </>
    );
}
