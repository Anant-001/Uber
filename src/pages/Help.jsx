import { FaCar, FaCarSide, FaUtensils, FaStore, FaBicycle, FaBriefcase, FaTruck } from "react-icons/fa";

export default function Help() {

    const categories = [
        { icon: <FaCar size={28} />, label: "Riders" },
        { icon: <FaCarSide size={28} />, label: "Driving & Delivering" },
        { icon: <FaUtensils size={28} />, label: "Uber Eats" },
        { icon: <FaStore size={28} />, label: "Merchants & Restaurants" },
        { icon: <FaBicycle size={28} />, label: "Bikes & Scooters" },
        { icon: <FaBriefcase size={28} />, label: "Uber for Business" },
        { icon: <FaTruck size={28} />, label: "Freight" },
    ];

    return (
        <section className="space-y-8 py-8">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto">
                <h1 className="text-4xl font-bold">Welcome to Uber Support</h1>
                <p className="mt-2 text-gray-500">
                    We’re here to help. Explore support resources for the relevant products below
                    to find the best way to reach out about your issue.
                </p>
            </div>

            {/* Category Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
                {categories.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center justify-center p-6 bg-gray-500 rounded-lg hover:bg-gray-200 transition cursor-pointer"
                    >
                        {item.icon}
                        <p className="mt-2 text-center text-sm font-medium">{item.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
