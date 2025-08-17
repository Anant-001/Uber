import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function PromoGrid() {
    return (
        <section className="mt-14 grid gap-6 md:grid-cols-2">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card overflow-hidden"
            >
                <img
                    className="h-52 w-full object-cover"
                    src="/public/Airport-rides.webp"
                    alt="Make money by driving"
                />
                <div className="p-6">
                    <h4 className="text-lg font-semibold">Earn by driving with Uber</h4>
                    <p className="text-sm text-gray-400 mt-1">
                        Set your schedule and get paid fast with in-app earnings tracking.
                    </p>
                    <Link to="/drive" className="btn mt-4">Start driving</Link>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card overflow-hidden"
            >
                <img
                    className="h-52 w-full object-cover"
                    src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop"
                    alt="Business travel"
                />
                <div className="p-6">
                    <h4 className="text-lg font-semibold">Uber for Business</h4>
                    <p className="text-sm text-gray-400 mt-1">
                        Manage rides, meals, and deliveries with powerful controls and insights.
                    </p>
                    <Link to="/business" className="btn mt-4">
                        <Users className="h-4 w-4" /> Learn more
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}
