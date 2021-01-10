import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function BottomNavBar() {
    const [showModal, setShowModal] = useState(false);

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
                        <Button onClick={() => setShowModal(false)}>Close</Button>
                    </Modal.Footer>
                </Modal>
            );
        }
    };

    return (
        <>
            {renderRaccoonForm()}
            <ButtonGroup aria-label="Basic example" className="bottom-nav-bar">
                <Button className="nav-button" variant="secondary">
                    ⌂
                </Button>
                <Button
                    className="nav-button"
                    variant="secondary"
                    onClick={() => setShowModal(!showModal)}
                >
                    +
                </Button>
                <Button className="nav-button" variant="secondary">
                    ⚇
                </Button>
            </ButtonGroup>
        </>
    );
}
