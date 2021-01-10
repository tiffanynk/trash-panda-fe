import { useState, useEffect } from 'react';
import env from 'react-dotenv';
import Button from 'react-bootstrap/Button';

export default function Profile({ logOut }) {
    let user = {
        username: 'kelsey',
        email: 'kelsey@kelsey.com',
        points: 10,
    };

    const handleLogout = (user) => {
        logOut(user);
    };

    return (
        <div id="profile-container">
            <h1>Profile</h1>
            {user ? (
                <>
                    <h2 id="info">User Information</h2>
                    <h3>Username: {user.username}</h3>
                    <h3>Email: {user.email}</h3>
                    <h3>Total Points: {user.points}</h3>
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
