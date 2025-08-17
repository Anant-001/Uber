import { MapContainer, TileLayer, Marker, Polyline, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

// Default marker fix for Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

// Component to move map to new bounds
function Recenter({ pickupCoords, destinationCoords }) {
    const map = useMap();
    useEffect(() => {
        if (pickupCoords && destinationCoords) {
            map.fitBounds([pickupCoords, destinationCoords], { padding: [50, 50] });
        }
    }, [pickupCoords, destinationCoords, map]);
    return null;
}

export default function Map({ pickupCoords, destinationCoords }) {
    const center = pickupCoords || [28.6139, 77.2090]; // default New Delhi

    return (
        <MapContainer center={center} zoom={13} style={{ height: "100%", width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
            />

            {pickupCoords && <Marker position={pickupCoords} />}
            {destinationCoords && <Marker position={destinationCoords} />}
            {pickupCoords && destinationCoords && (
                <Polyline positions={[pickupCoords, destinationCoords]} color="blue" />
            )}

            <Recenter pickupCoords={pickupCoords} destinationCoords={destinationCoords} />
        </MapContainer>
    );
}
