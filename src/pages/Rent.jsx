import React from "react";

export default function Rent() {
    const features = [
        {
            icon: "🚗",
            title: "Flexible Rentals",
            desc: "Choose from hourly, daily, or weekly plans."
        },
        {
            icon: "🛡️",
            title: "Insurance Included",
            desc: "Drive with peace of mind with coverage."
        },
        {
            icon: "📍",
            title: "Nearby Locations",
            desc: "Pick up from convenient spots near you."
        }
    ];

    return (
        <section className="space-y-6 p-4">
            {/* Header */}
            <div className="space-y-2">
                <h1 className="text-3xl font-semibold">Uber Rent</h1>
                <p className="text-gray-500">
                    Rent a car nearby and hit the road with ease.
                </p>
            </div>

            {/* Promo Banner */}
            <div className="bg-gradient-to-r from-emerald-500 to-green-400 text-white p-4 rounded-xl shadow-lg">
                <h2 className="text-lg font-bold">✨ Special Offer</h2>
                <p className="text-sm">Get 20% off on your first rental booking this week!</p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {features.map((item, index) => (
                    <div
                        key={index}
                        className="bg-gray-700 shadow-md rounded-xl p-4 text-center space-y-2 hover:shadow-lg transition"
                    >
                        <div className="text-3xl">{item.icon}</div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>

            {/* Placeholder for Partners/Pricing */}
            <div className="bg-gray-200 border border-gray-200 rounded-xl p-6 text-center text-gray-500">
                Rental partners and pricing table coming soon.
            </div>

            {/* Call to Action */}
            <div className="text-center">
                <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
                    Book a Rental
                </button>
            </div>
        </section>
    );
}
