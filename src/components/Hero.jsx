import { motion } from "framer-motion";
import { ArrowRight, MapPin, Navigation, Clock } from "lucide-react";
import { useLoadScript } from "@react-google-maps/api";
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import { useState } from "react";

const libraries = ["places"];

export default function Hero() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY, // store your key in .env
        libraries,
    });

    const [pickup, setPickup] = useState("");
    const [destination, setDestination] = useState("");

    if (!isLoaded) return <p className="text-white">Loading map...</p>;

    return (
        <section className="grid gap-8 lg:grid-cols-2 items-stretch">
            {/* Left: booking card */}
            <motion.div
                initial={{ y: 12, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="card p-6"
            >
                <h2 className="text-3xl font-semibold">Go anywhere with Uber</h2>
                <p className="text-gray-400 mt-1">Request a ride, hop in, and go.</p>

                <div className="mt-6 space-y-3">
                    <AutoCompleteInput
                        icon={<MapPin className="h-4 w-4 text-gray-300" />}
                        placeholder="Pickup location"
                        value={pickup}
                        onChange={setPickup}
                    />
                    <AutoCompleteInput
                        icon={<Navigation className="h-4 w-4 text-gray-300" />}
                        placeholder="Enter destination"
                        value={destination}
                        onChange={setDestination}
                    />
                    <div className="grid grid-cols-2 gap-3">
                        <button className="btn">
                            <Clock className="h-4 w-4" /> Leave now
                        </button>
                        <button className="btn">Schedule</button>
                    </div>
                    <button className="btn btn-primary w-full group">
                        Request now
                        <ArrowRight className="h-4 w-4 transition -translate-x-0 group-hover:translate-x-0.5" />
                    </button>
                </div>
            </motion.div>

            {/* Right: hero art */}
            <motion.div
                initial={{ scale: 0.96, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="card overflow-hidden relative"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-sky-400/10 to-fuchsia-400/10" />
                <img
                    alt="Ride illustration"
                    className="w-full h-full object-cover opacity-80"
                    src="/travel-ilustra.webp"
                />
                <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-black/50 border border-white/10 p-4">
                    <p className="text-sm text-gray-300">
                        Faster pickups. Reliable drivers. Upfront prices.
                    </p>
                </div>
            </motion.div>
        </section>
    );
}

function AutoCompleteInput({ icon, placeholder, value, onChange }) {
    const {
        ready,
        value: inputValue,
        setValue,
        suggestions: { status, data },
        clearSuggestions,
    } = usePlacesAutocomplete();

    const handleSelect = async (description) => {
        setValue(description, false);
        clearSuggestions();

        const results = await getGeocode({ address: description });
        const { lat, lng } = await getLatLng(results[0]);
        console.log("Selected location:", { lat, lng });

        onChange(description);
    };

    return (
        <div className="relative">
            <div className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-3">
                {icon}
                <input
                    value={inputValue}
                    onChange={(e) => setValue(e.target.value)}
                    disabled={!ready}
                    placeholder={placeholder}
                    className="w-full bg-transparent outline-none placeholder:text-gray-500"
                />
            </div>
            {status === "OK" && (
                <ul className="absolute bg-black border border-white/10 mt-1 rounded-lg shadow-lg w-full z-10">
                    {data.map(({ place_id, description }) => (
                        <li
                            key={place_id}
                            className="p-2 hover:bg-white/10 cursor-pointer"
                            onClick={() => handleSelect(description)}
                        >
                            {description}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
