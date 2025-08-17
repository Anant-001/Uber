import { FaMotorcycle, FaClock, FaMoneyBillWave, FaMobileAlt } from "react-icons/fa";

const features = [
    {
        icon: <FaMotorcycle className="h-8 w-8 text-brand" />,
        title: "Deliver with Uber",
        desc: "Earn by delivering meals and groceries with Uber Eats. Use your bike, scooter, or car.",
    },
    {
        icon: <FaClock className="h-8 w-8 text-brand" />,
        title: "Flexible hours",
        desc: "Work on your own schedule. Deliver part-time or full-time, anytime that suits you.",
    },
    {
        icon: <FaMoneyBillWave className="h-8 w-8 text-brand" />,
        title: "Fast payments",
        desc: "Get paid weekly, with the option for instant payouts straight to your account.",
    },
    {
        icon: <FaMobileAlt className="h-8 w-8 text-brand" />,
        title: "All in one app",
        desc: "Track orders, navigate, and manage your deliveries with the Uber Eats partner app.",
    },
];

export default function DeliveryPartners() {
    return (
        <section className="py-12 container-px">
            {/* Header */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold">Delivery with Uber</h1>
                <p className="text-gray-400 mt-2">
                    Partner with Uber Eats and start earning by delivering meals and groceries.
                </p>
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((f, i) => (
                    <div
                        key={i}
                        className="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                    >
                        {f.icon}
                        <h3 className="mt-4 font-semibold">{f.title}</h3>
                        <p className="text-gray-400 text-sm mt-2">{f.desc}</p>
                    </div>
                ))}
            </div>

            {/* Call to Action */}
            <div className="mt-12 text-center">
                <button className="btn btn-primary px-8 py-3 text-lg">
                    Sign up to deliver
                </button>
                <p className="text-gray-400 text-sm mt-3">
                    Already a delivery partner? <a href="#" className="text-brand underline">Log in</a>
                </p>
            </div>
        </section>
    );
}
