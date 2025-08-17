import { FaCarSide, FaClock, FaMoneyBillWave, FaShieldAlt } from "react-icons/fa";

export default function Drive() {
    const benefits = [
        {
            icon: <FaClock className="text-3xl text-emerald-500" />,
            title: "Work when you want",
            desc: "Choose your own hours and drive anytime that works for you."
        },
        {
            icon: <FaMoneyBillWave className="text-3xl text-emerald-500" />,
            title: "Earn weekly",
            desc: "Get paid weekly or instantly with Uber’s payment options."
        },
        {
            icon: <FaShieldAlt className="text-3xl text-emerald-500" />,
            title: "Drive safely",
            desc: "We provide safety tools and 24/7 support for every trip."
        }
    ];

    return (
        <section className="space-y-8 p-6 bg-gray-700 rounded-2xl shadow-lg">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-semibold flex items-center gap-3">
                    <FaCarSide className="text-emerald-500" /> Drive with Uber
                </h1>
                <p className="text-gray-500 mt-2">
                    Flexible hours, weekly pay, and safety built in.
                </p>
            </div>

            {/* Benefits grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((item, index) => (
                    <div
                        key={index}
                        className="p-5 border rounded-xl hover:shadow-lg transition-shadow duration-300 bg-gray-400"
                    >
                        {item.icon}
                        <h3 className="font-semibold mt-3">{item.title}</h3>
                        <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                    </div>
                ))}
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors">
                    Sign up to Drive
                </button>
                <button className="border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Learn More
                </button>
            </div>
        </section>
    );
}
