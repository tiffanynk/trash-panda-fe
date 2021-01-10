import { useState, useEffect } from 'react';
import env from 'react-dotenv';
import Button from 'react-bootstrap/Button';

export default function Profile({ user, setUser, setHomeSelect, setProfileSelect }) {
    const handleLogout = () => {
        setUser({});
        localStorage.removeItem('token');
        setHomeSelect(true);
        setProfileSelect(false);
    };

    return (
        <div id="profile-container">
            <h1>Profile</h1>
            {user.email ? (
                <>
                    <h2 id="info">User Information</h2>
                    <h3>Email: {user.email}</h3>
                    <h3>Total Points: 500</h3>
                    <Button variant="primary" type="submit" onClick={handleLogout}>
                        Logout
                    </Button>
                    <h2 id="thanks">Thanks for using Trash Panda!</h2>
                </>
            ) : (
                <>
                    <h2>You don't have a profile yet.</h2>
                    <h2>Let's fix that!</h2>
                </>
            )}
        </div>
    );
}
