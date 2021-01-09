import { useState } from 'react';
import env from 'react-dotenv';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
        <Form className="map-search" onSubmit={handleSubmit}>
            <Form.Control
                type="text"
                placeholder="Input location"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
            />
            <Button variant="primary" type="submit">
                Search
            </Button>
        </Form>
    );
}
