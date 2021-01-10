import { useState } from 'react';
import Map from './Map';
import MapSearch from './MapSearch';
import BottomNavBar from './BottomNavBar';
import Button from 'react-bootstrap/Button';
import Profile from './Profile';

export default function Home({ user }) {
    const [location, setLocation] = useState({});
    const [homeSelect, setHomeSelect] = useState(true);
    const [locationSelect, setLocationSelect] = useState(false);
    const [profileSelect, setProfileSelect] = useState(false);

    const navRendering = () => {
        if (profileSelect === true) {
            return <Profile />;
        } else if (locationSelect === true) {
            return <p>location!</p>;
        } else {
            return (
                <>
                    <MapSearch setLocation={setLocation} />
                    <Map location={location} />
                </>
            );
        }
    };

    return (
        <>
            {navRendering()}
            {user ? (
                <BottomNavBar
                    homeSelect={homeSelect}
                    setHomeSelect={setHomeSelect}
                    locationSelect={locationSelect}
                    setLocationSelect={setLocationSelect}
                    profileSelect={profileSelect}
                    setProfileSelect={setProfileSelect}
                />
            ) : (
                <Button className="login-button">LOGIN/SIGNUP FOR POINTS!</Button>
            )}
        </>
    );
}
