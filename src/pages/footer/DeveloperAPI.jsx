import { FaCode, FaBook, FaCogs, FaPlug } from "react-icons/fa";

const features = [
    {
        icon: <FaCode className="h-8 w-8 text-brand" />,
        title: "Powerful APIs",
        desc: "Integrate ride-hailing, delivery, and maps into your own applications.",
    },
    {
        icon: <FaBook className="h-8 w-8 text-brand" />,
        title: "Comprehensive Docs",
        desc: "Step-by-step guides, SDKs, and API references to get you building fast.",
    },
    {
        icon: <FaCogs className="h-8 w-8 text-brand" />,
        title: "Flexible Solutions",
        desc: "Build for mobility, logistics, and delivery—all on a single developer platform.",
    },
    {
        icon: <FaPlug className="h-8 w-8 text-brand" />,
        title: "Easy Integration",
        desc: "Use standard REST APIs with clear authentication and sample projects.",
    },
];

export default function DeveloperAPI() {
    return (
        <section className="py-12 container-px">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold">Uber Developer Platform</h1>
                <p className="text-gray-400 mt-2">
                    Build the future of mobility with Uber APIs and SDKs.
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
                    Explore Docs
                </button>
                <p className="text-gray-400 text-sm mt-3">
                    Visit the <a href="#" className="text-brand underline">API reference</a> for full details.
                </p>
            </div>
        </section>
    );
}
