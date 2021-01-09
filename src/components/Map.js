import { useState, useEffect } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import env from 'react-dotenv';
import trashPandaIcon from '../assets/trash-panda-icon.svg';

export function MapContainer(props) {
    const { google, location } = props;
    const [selectedPlace, setSelectedPlace] = useState({});
    const [activeMarker, setActiveMarker] = useState({});
    const [showingInfoWindow, setShowingInfoWindow] = useState(false);
    // const [currentLocation, setCurrentLocation] = useState({
    //     lat: 37.774929,
    //     lng: -122.419416
    // });
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
                icon={{
                    url: trashPandaIcon,
                    anchor: new google.maps.Point(24, 24),
                    scaledSize: new google.maps.Size(48, 48),
                }}
            />
        ));
    };

    // const loadMap = () => {
    //     const { lat, lng } = currentLocation
    //     const center = new props.google.maps.LatLng(lat, lng);
    //     const mapConfig = Object.assign({}, {
    //         center: center,
    //         zoom: 14
    //     })

    //     if (props && props.google) {
    //         const map = new props.google.maps.Map(props.mapRef, mapConfig);

    //         map.addListener('dragend', (evt) => {
    //             props.onMove(map);
    //         })
    //     }
    // }

    // useEffect(() => {
    //     console.log(navigator.geolocation)
    //     if (props.centerAroundCurrentLocation) {
    //         if (navigator && navigator.geolocation) {
    //             navigator.geolocation.getCurrentPosition((pos) => {
    //                 const coords = pos.coords;
    //                 setCurrentLocation({
    //                     lat: coords.latitude,
    //                     lng: coords.longitude
    //                 })
    //             })
    //         }
    //     }
    //     loadMap();
    // }, [])

    return (
        <Map google={google} center={location} containerStyle={containerStyle} zoom={16}>
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
