import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function MapSection({ pickup, destination }) {
    const mapRef = useRef(null);
    const pickupMarkerRef = useRef(null);
    const destMarkerRef = useRef(null);

    // Initialize map only once
    useEffect(() => {
        if (!mapRef.current) {
            mapRef.current = L.map("map", {
                center: [28.6139, 77.2090], // Default: New Delhi
                zoom: 13
            });

            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution:
                    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(mapRef.current);
        }
    }, []);

    // Helper: Geocode an address and return [lat, lon]
    const geocodeAddress = async (address) => {
        if (!address.trim()) return null;
        try {
            const res = await fetch(
                `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`
            );
            const data = await res.json();
            if (data.length > 0) {
                return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
            }
        } catch (err) {
            console.error("Geocoding error:", err);
        }
        return null;
    };

    // Update pickup marker
    useEffect(() => {
        if (!pickup || !mapRef.current) return;
        geocodeAddress(pickup).then((coords) => {
            if (!coords) return;
            if (pickupMarkerRef.current) {
                pickupMarkerRef.current.setLatLng(coords);
            } else {
                pickupMarkerRef.current = L.marker(coords, { title: "Pickup" }).addTo(mapRef.current);
            }
            mapRef.current.setView(coords, 13);
        });
    }, [pickup]);

    // Update destination marker
    useEffect(() => {
        if (!destination || !mapRef.current) return;
        geocodeAddress(destination).then((coords) => {
            if (!coords) return;
            if (destMarkerRef.current) {
                destMarkerRef.current.setLatLng(coords);
            } else {
                destMarkerRef.current = L.marker(coords, { title: "Destination" }).addTo(mapRef.current);
            }
        });
    }, [destination]);

    return (
        <div className="flex-1">
            <div id="map" className="w-full h-[500px] lg:h-full rounded-xl border border-white/10"></div>
        </div>
    );
}
