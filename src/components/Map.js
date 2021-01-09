import { useState } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import env from 'react-dotenv';

export function MapContainer(props) {
    const [selectedPlace, setSelectedPlace] = useState({});
    const [activeMarker, setActiveMarker] = useState({});
    const [showingInfoWindow, setShowingInfoWindow] = useState(false);

    const onMarkerClick = (props, marker, event) => {
        setSelectedPlace(props);
        setActiveMarker(marker);
        setShowingInfoWindow(true);
    };

    const onInfoWindowClose = () => {
        console.log('close');
    };

    return (
        <Map google={props.google} zoom={14}>
            <Marker onClick={onMarkerClick} name={'Current location'} />
            <InfoWindow
                marker={activeMarker}
                visible={showingInfoWindow}
                onClose={onInfoWindowClose}
            >
                <div>
                    <h1>{selectedPlace.name}</h1>
                </div>
            </InfoWindow>
        </Map>
    );
}

export default GoogleApiWrapper({
    apiKey: env.GOOGLE_API_KEY,
})(MapContainer);
