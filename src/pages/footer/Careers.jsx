import { motion } from "framer-motion";
import { Briefcase, Cpu, Palette, Users } from "lucide-react";

const categories = [
    {
        icon: Cpu,
        title: "Engineering",
        desc: "Build scalable systems powering millions of rides daily.",
    },
    {
        icon: Palette,
        title: "Design",
        desc: "Create experiences that are intuitive, accessible, and elegant.",
    },
    {
        icon: Users,
        title: "Operations",
        desc: "Shape the way cities move through efficient operations.",
    },
    {
        icon: Briefcase,
        title: "Corporate",
        desc: "Support teams in finance, HR, legal, and global strategy.",
    },
];

export default function Careers() {
    return (
        <section className="space-y-12 py-12">
            {/* Hero Section */}
            <div className="text-center max-w-2xl mx-auto">
                <h1 className="text-4xl font-bold">Careers at Uber Dark</h1>
                <p className="text-gray-400 mt-3">
                    Join us in redefining the way the world moves. Work with brilliant
                    minds to solve real-world challenges.
                </p>
            </div>

            {/* Categories */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((cat, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="card p-6 flex flex-col items-center text-center space-y-3 hover:bg-white/10 transition"
                    >
                        <cat.icon className="h-10 w-10 text-[rgb(var(--brand))]" />
                        <h2 className="text-lg font-semibold">{cat.title}</h2>
                        <p className="text-sm text-gray-400">{cat.desc}</p>
                    </motion.div>
                ))}
            </div>

            {/* CTA */}
            <div className="text-center">
                <button className="btn btn-primary px-6 py-3 text-lg">
                    See all jobs
                </button>
            </div>
        </section>
    );
}
