import { useState } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import env from 'react-dotenv';

export function MapContainer(props) {
    const [selectedPlace, setSelectedPlace] = useState({});
    const [activeMarker, setActiveMarker] = useState({});
    const [showingInfoWindow, setShowingInfoWindow] = useState(false);
    const [markers, setMarkers] = useState([
        { id: 1, name: 'Point1', position: { lat: 37.762391, lng: -122.439192 } },
        { id: 2, name: 'Point2', position: { lat: 37.759703, lng: -122.428093 } },
    ]);

    const onMarkerClick = (props, marker, event) => {
        setSelectedPlace(props);
        setActiveMarker(marker);
        setShowingInfoWindow(true);
    };

    const onInfoWindowClose = () => {
        setShowingInfoWindow(false);
    };

    const renderMarkers = () => {
        return markers.map((marker) => (
            <Marker
                key={marker.id}
                onClick={onMarkerClick}
                name={marker.name}
                position={marker.position}
            />
        ));
    };

    return (
        <Map google={props.google} containerStyle={containerStyle} zoom={14}>
            {renderMarkers()}
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

const containerStyle = {
    position: 'absolute',
    width: '100%',
    height: '75%',
};

export default GoogleApiWrapper({
    apiKey: env.GOOGLE_API_KEY,
})(MapContainer);
