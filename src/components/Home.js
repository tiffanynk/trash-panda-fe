import { useEffect, useState } from 'react';
import Map from './Map';
import MapSearch from './MapSearch';
import BottomNavBar from './BottomNavBar';
import Button from 'react-bootstrap/Button';
import Profile from './Profile';
import Modal from 'react-bootstrap/Modal';
import env from 'react-dotenv';

const BACKEND_URL = 'https://us-central1-trash-panda-shehacks.cloudfunctions.net/api';

export default function Home({ user }) {
    const [locations, setLocations] = useState([]);
    const [location, setLocation] = useState({});
    const [homeSelect, setHomeSelect] = useState(true);
    const [locationSelect, setLocationSelect] = useState(false);
    const [profileSelect, setProfileSelect] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [lat, setLat] = useState(0);
    const [lng, setLng] = useState(0);
    const [trash, setTrash] = useState(false);
    const [recycling, setRecycling] = useState(false);
    const [submitted, isSubmitted] = useState(false);

    const GEOCODE_URL = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${env.GOOGLE_API_KEY}`;

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleName = ({ target }) => setName(target.value);
    const handleAddress = ({ target }) => setAddress(target.value);
    const handleTrash = ({ target }) => setTrash(target.value);
    const handleRecycling = ({ target }) => setRecycling(target.value);

    const handleSubmit = () => {
        isSubmitted(true);
        if (address) {
            fetch(GEOCODE_URL)
                .then((response) => response.json())
                .then((response) => {
                    setLat(response.results[0].geometry.location.lat);
                    setLng(response.results[0].geometry.location.lng);
                });
        }
    };

    const navRendering = () => {
        if (profileSelect === true) {
            return <Profile />;
        } else if (locationSelect === true) {
            return <p>location!</p>;
        } else {
            return (
                <>
                    <MapSearch setLocation={setLocation} />
                    <Map location={location} locations={locations} />
                </>
            );
        }
    };

    useEffect(() => {
        fetch(`${BACKEND_URL}/locations/`)
            .then((response) => response.json())
            .then(setLocations);
    }, []);

    useEffect(() => {
        if (lat !== 0 && lng !== 0) {
            fetch(`${BACKEND_URL}/location`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    trash,
                    recycling,
                    lat,
                    lng,
                }),
            })
                .then((response) => response.json())
                .then((location) => {
                    setLocations([...locations, location]);
                });
        }
    }, [lat, lng]);

    return (
        <>
            {navRendering()}
            <Modal
                show={showModal}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        {submitted ? 'Thank you!' : 'Add A Location!'}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {submitted ? (
                        user.email ? (
                            <>
                                <p>
                                    Your location has been added and you've earned
                                    yourself 100 points!
                                </p>
                            </>
                        ) : (
                            <>
                                <p>Your location has been added!</p>
                            </>
                        )
                    ) : (
                        <>
                            <form id="location-form">
                                <label>Location Name: </label>
                                <input
                                    name="location"
                                    value={name}
                                    onChange={handleName}
                                />
                                <label>Address: </label>
                                <input
                                    name="address"
                                    value={address}
                                    onChange={handleAddress}
                                />
                                <label>Is there a trash can at this location? </label>
                                <input
                                    type="checkbox"
                                    name="trash"
                                    value={trash}
                                    onChange={handleTrash}
                                />
                                <label>Is there a recycling bin at this location? </label>
                                <input
                                    type="checkbox"
                                    name="recycling"
                                    value={recycling}
                                    onChange={handleRecycling}
                                />
                            </form>
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        {submitted ? 'Close' : 'Cancel'}
                    </Button>
                    {!submitted && (
                        <Button onClick={handleSubmit} variant="primary">
                            Submit
                        </Button>
                    )}
                </Modal.Footer>
            </Modal>
            {user.email ? (
                <BottomNavBar
                    handleShow={handleShow}
                    setHomeSelect={setHomeSelect}
                    setLocationSelect={setLocationSelect}
                    setProfileSelect={setProfileSelect}
                />
            ) : (
                <Button className="login-button">LOGIN/SIGNUP FOR POINTS!</Button>
            )}
        </>
    );
}
