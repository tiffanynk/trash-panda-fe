import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import MdHome from 'react-ionicons/lib/MdHome';
import MdContact from 'react-ionicons/lib/MdContact';
import IosAdd from 'react-ionicons/lib/IosAdd';
import trashPandaIcon from '../assets/trash-panda-icon.svg';

export default function BottomNavBar({
    setLocationSelect,
    setHomeSelect,
    setProfileSelect,
}) {
    const [showModal, setShowModal] = useState(false);

    const handleRaccoonClick = () => {
        console.log('click');
        setLocationSelect(true);
        setHomeSelect(false);
        setProfileSelect(false);
    };

    const handleHomeClick = () => {
        console.log('home');
        setHomeSelect(true);
        setProfileSelect(false);
        setLocationSelect(false);
    };

    const handleProfileClick = () => {
        console.log('profile');
        setProfileSelect(true);
        setLocationSelect(false);
        setHomeSelect(false);
    };

    const renderRaccoonForm = () => {
        if (showModal === true) {
            return (
                <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Add a Racoon!
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Centered Modal</h4>
                        <p>
                            Hey add a raccoon! Blah blah check here for recycle here for
                            trash
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={setShowModal(false)}>Close</Button>
                    </Modal.Footer>
                </Modal>
            );
        }
    };

    return (
        <>
            {renderRaccoonForm()}
            <ButtonGroup aria-label="Basic example" className="bottom-nav-bar">
                <Button
                    onClick={handleHomeClick}
                    className="nav-button"
                    variant="secondary"
                >
                    <MdHome className="nav-icon" fontSize="32px" />
                </Button>
                <Button
                    className="nav-button"
                    variant="secondary"
                    onClick={() => setShowModal(!showModal)}
                >
                    <IosAdd className="nav-icon" fontSize="40px" />
                    <img src={trashPandaIcon} className="nav-icon"></img>
                    {/* <MdTrash className="nav-icon" fontSize='32px' /> */}
                </Button>
                <Button
                    onClick={handleProfileClick}
                    className="nav-button"
                    variant="secondary"
                >
                    <MdContact className="nav-icon" fontSize="32px" />
                </Button>
            </ButtonGroup>
        </>
    );
}
