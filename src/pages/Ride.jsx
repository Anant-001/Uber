import { useState, useEffect } from "react";
import { MapPin, Navigation, Clock } from "lucide-react";
import MapSection from "../components/MapSection.jsx";

export default function Ride() {
    const [pickup, setPickup] = useState("");
    const [destination, setDestination] = useState("");
    const [pickupSuggestions, setPickupSuggestions] = useState([]);
    const [destinationSuggestions, setDestinationSuggestions] = useState([]);

    // Fetch suggestions from Nominatim API
    const fetchSuggestions = async (query, setFn) => {
        if (!query.trim()) return setFn([]);
        try {
            const res = await fetch(
                `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&addressdetails=1&limit=5`
            );
            const data = await res.json();
            setFn(data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            fetchSuggestions(pickup, setPickupSuggestions);
        }, 300);
        return () => clearTimeout(timeout);
    }, [pickup]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            fetchSuggestions(destination, setDestinationSuggestions);
        }, 300);
        return () => clearTimeout(timeout);
    }, [destination]);

    return (
        <section className="space-y-4">
            <h1 className="text-3xl font-semibold">Ride with Uber</h1>
            <p className="text-gray-400">
                Compare options, see upfront prices, and request a ride.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left: Form */}
                <div className="space-y-4 p-6 card relative">
                    {/* Pickup */}
                    <div className="flex flex-col gap-1 relative">
                        <div className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-3">
                            <MapPin className="h-4 w-4 text-gray-300" />
                            <input
                                value={pickup}
                                onChange={(e) => setPickup(e.target.value)}
                                placeholder="Pick-up location"
                                className="w-full bg-transparent outline-none placeholder:text-gray-500"
                            />
                        </div>
                        {pickupSuggestions.length > 0 && (
                            <div className="absolute top-14 left-0 w-full bg-black/80 border border-white/10 rounded-xl z-10 max-h-48 overflow-auto">
                                {pickupSuggestions.map((s, i) => (
                                    <div
                                        key={i}
                                        onClick={() => {
                                            setPickup(s.display_name);
                                            setPickupSuggestions([]);
                                        }}
                                        className="p-2 text-sm text-gray-200 hover:bg-white/10 cursor-pointer"
                                    >
                                        {s.display_name}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Destination */}
                    <div className="flex flex-col gap-1 relative">
                        <div className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-3">
                            <Navigation className="h-4 w-4 text-gray-300" />
                            <input
                                value={destination}
                                onChange={(e) => setDestination(e.target.value)}
                                placeholder="Drop-off location"
                                className="w-full bg-transparent outline-none placeholder:text-gray-500"
                            />
                        </div>
                        {destinationSuggestions.length > 0 && (
                            <div className="absolute top-14 left-0 w-full bg-black/80 border border-white/10 rounded-xl z-10 max-h-48 overflow-auto">
                                {destinationSuggestions.map((s, i) => (
                                    <div
                                        key={i}
                                        onClick={() => {
                                            setDestination(s.display_name);
                                            setDestinationSuggestions([]);
                                        }}
                                        className="p-2 text-sm text-gray-200 hover:bg-white/10 cursor-pointer"
                                    >
                                        {s.display_name}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Time */}
                    <div className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-3">
                        <Clock className="h-4 w-4 text-gray-300" />
                        <select className="bg-transparent w-full outline-none text-gray-500">
                            <option>Pick up now</option>
                            <option>Schedule for later</option>
                        </select>
                    </div>

                    {/* Search */}
                    <button className="btn btn-primary w-full">Search</button>
                </div>

                {/* Right: Map */}
                <MapSection pickup={pickup} destination={destination} />
            </div>
        </section>
    );
}
