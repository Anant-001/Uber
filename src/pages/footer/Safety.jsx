import { Shield, PhoneCall, MapPin, AlertTriangle } from "lucide-react";

const safetyFeatures = [
    {
        icon: Shield,
        title: "Safety features",
        desc: "Every ride includes built-in safety tools and 24/7 support.",
    },
    {
        icon: PhoneCall,
        title: "Emergency assistance",
        desc: "Easily connect with local authorities directly from the app.",
    },
    {
        icon: MapPin,
        title: "Ride tracking",
        desc: "Share your trip in real-time with trusted contacts.",
    },
    {
        icon: AlertTriangle,
        title: "Driver screening",
        desc: "Background checks and ongoing monitoring for peace of mind.",
    },
];

export default function Safety() {
    return (
        <section className="py-12 space-y-12">
            {/* Hero */}
            <div className="text-center max-w-2xl mx-auto">
                <h1 className="text-4xl font-bold">Safety at Uber Dark</h1>
                <p className="text-gray-400 mt-3">
                    Your safety drives us. We’re committed to ensuring every ride is
                    secure, from start to finish.
                </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {safetyFeatures.map((item, i) => (
                    <div
                        key={i}
                        className="card p-6 flex flex-col items-center text-center space-y-3 hover:bg-white/10 transition"
                    >
                        <item.icon className="h-10 w-10 text-[rgb(var(--brand))]" />
                        <h2 className="text-lg font-semibold">{item.title}</h2>
                        <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
