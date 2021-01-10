import { useState } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import env from 'react-dotenv';
import trashPandaIcon from '../assets/trash-panda-icon.svg';
import IosCheckmarkCircle from 'react-ionicons/lib/IosCheckmarkCircle';
import IosCloseCircle from 'react-ionicons/lib/IosCloseCircle';

export function MapContainer(props) {
    const { google, location, locations } = props;
    const [activeMarker, setActiveMarker] = useState({});
    const [locationInfo, setLocationInfo] = useState({});
    const [showingInfoWindow, setShowingInfoWindow] = useState(false);

    const onMarkerClick = (props, marker, event, location) => {
        setActiveMarker(marker);
        setLocationInfo(location);
        setShowingInfoWindow(true);
    };

    const onInfoWindowClose = () => {
        setShowingInfoWindow(false);
    };

    const renderMarkers = () => {
        return locations.map((location) => (
            <Marker
                key={location.locationId}
                onClick={(props, marker, event) =>
                    onMarkerClick(props, marker, event, location)
                }
                name={location.name}
                position={{ lat: location.lat, lng: location.lng }}
                icon={{
                    url: trashPandaIcon,
                    anchor: new google.maps.Point(24, 24),
                    scaledSize: new google.maps.Size(48, 48),
                }}
            />
        ));
    };

    return (
        <Map
            google={google}
            center={location}
            containerStyle={containerStyle}
            zoom={16}
            initialCenter={{ lat: 39.7623533, lng: -104.9809164 }}
        >
            {renderMarkers()}
            <InfoWindow
                marker={activeMarker}
                visible={showingInfoWindow}
                onClose={onInfoWindowClose}
            >
                <div className="location-details">
                    <h2>{locationInfo.name}</h2>
                    <p>
                        Trash{' '}
                        {locationInfo.trash ? (
                            <IosCheckmarkCircle className="check-icon" />
                        ) : (
                            <IosCloseCircle className="x-icon" />
                        )}
                    </p>
                    <p>
                        Recycling{' '}
                        {locationInfo.recycling ? (
                            <IosCheckmarkCircle className="check-icon" />
                        ) : (
                            <IosCloseCircle className="x-icon" />
                        )}
                    </p>
                    {/* <a href='http://trash-panda.tech'><Button id='log-button' onClick={handleShow}>+ Log Trash/Recyling</Button></a> */}
                </div>
            </InfoWindow>
        </Map>
    );
}

const containerStyle = {
    position: 'absolute',
    width: '100%',
    height: '70%',
};

export default GoogleApiWrapper({
    apiKey: env.GOOGLE_API_KEY,
})(MapContainer);
