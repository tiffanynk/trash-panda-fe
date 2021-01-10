import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import MdHome from 'react-ionicons/lib/MdHome';
import MdContact from 'react-ionicons/lib/MdContact';
import IosAdd from 'react-ionicons/lib/IosAdd';
import trashPandaIcon from '../assets/trash-panda-icon.svg';

export default function BottomNavBar({ handleShow }) {
    return (
        <>
            <ButtonGroup aria-label="Basic example" className="bottom-nav-bar">
                <Button className="nav-button" variant="secondary">
                    <MdHome className="nav-icon" fontSize="32px" />
                </Button>
                <Button className="nav-button" variant="secondary" onClick={handleShow}>
                    <IosAdd className="nav-icon" fontSize="40px" />
                    <img src={trashPandaIcon} className="nav-icon"></img>
                </Button>
                <Button className="nav-button" variant="secondary">
                    <MdContact className="nav-icon" fontSize="32px" />
                </Button>
            </ButtonGroup>
        </>
    );
}
