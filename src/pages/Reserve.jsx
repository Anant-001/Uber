import React, { useState } from "react";
import { MapPin, Navigation, Clock } from "lucide-react";
import Map from "../components/Map";
import TripList from "../layout/Ride/TripList.jsx";

export default function Reserve() {
    const [pickup, setPickup] = useState("");
    const [destination, setDestination] = useState("");
    const [schedule, setSchedule] = useState("now");
    const [pickupCoords, setPickupCoords] = useState(null);
    const [destinationCoords, setDestinationCoords] = useState(null);

    const fetchCoords = async (address, setter) => {
        try {
            const res = await fetch(
                `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`
            );
            const data = await res.json();
            if (data.length > 0) {
                setter([parseFloat(data[0].lat), parseFloat(data[0].lon)]);
            }
        } catch (err) {
            console.error("Geocoding error:", err);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (pickup) await fetchCoords(pickup, setPickupCoords);
        if (destination) await fetchCoords(destination, setDestinationCoords);
    };

    return (
        <section className="p-4 space-y-6">
            {/* Search Form */}
            <form
                onSubmit={handleSubmit}
                className="space-y-4 p-4 rounded-xl border border-gray-700 bg-white/5 backdrop-blur"
            >
                <div className="flex items-center gap-3 p-3 rounded-xl bg-black/30 border border-gray-700">
                    <MapPin className="h-4 w-4 text-gray-300" />
                    <input
                        type="text"
                        value={pickup}
                        onChange={(e) => setPickup(e.target.value)}
                        placeholder="Pick-up location"
                        className="w-full bg-transparent outline-none placeholder:text-gray-400"
                    />
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-black/30 border border-gray-700">
                    <Navigation className="h-4 w-4 text-gray-300" />
                    <input
                        type="text"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        placeholder="Drop-off location"
                        className="w-full bg-transparent outline-none placeholder:text-gray-400"
                    />
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-black/30 border border-gray-700">
                    <Clock className="h-4 w-4 text-gray-300" />
                    <select
                        value={schedule}
                        onChange={(e) => setSchedule(e.target.value)}
                        className="bg-transparent w-full outline-none text-gray-400"
                    >
                        <option value="now">Pick up now</option>
                        <option value="later">Schedule for later</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary w-full">
                    Search
                </button>
            </form>

            {/* Responsive Layout */}
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0 space-y-6">
                {/* Map Section */}
                <div className="w-full h-64 sm:h-80 md:h-[400px] lg:h-full rounded-xl overflow-hidden border border-gray-700 shadow-md">
                    <Map pickupCoords={pickupCoords} destinationCoords={destinationCoords} />
                </div>

                {/* Trip Options */}
                <div className="flex flex-col space-y-4">
                    <h1 className="text-xl md:text-2xl font-semibold text-center lg:text-left">
                        Choose a trip
                    </h1>
                    <TripList pickupCoords={pickupCoords} destinationCoords={destinationCoords} />
                </div>
            </div>
        </section>
    );
}
