import { useState } from 'react';
import env from 'react-dotenv';

export default function MapSearch({ setLocation }) {
    const [searchTerm, setSearchTerm] = useState('');

    const GEOCODE_URL = `https://maps.googleapis.com/maps/api/geocode/json?address=${searchTerm}&key=${env.GOOGLE_API_KEY}`;

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(GEOCODE_URL)
            .then((response) => response.json())
            .then((response) => setLocation(response.results[0].geometry.location));
    };

    return (
        <form className="map-search" onSubmit={handleSubmit}>
            <input
                placeholder="Input location"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
            />
            <input type="submit" />
        </form>
    );
}
