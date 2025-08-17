import { motion } from "framer-motion";
import { CalendarCheck2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function ReserveBanner() {
    return (
        <section className="mt-14 grid gap-6 lg:grid-cols-2">
            <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="card p-6"
            >
                <h3 className="text-2xl font-semibold">Get your ride right with Uber Reserve</h3>
                <p className="text-gray-400 mt-1 text-sm">
                    Choose a date and time up to 90 days in advance. Cancel up to 60 minutes before pickup.
                </p>

                <div className="mt-4 flex gap-3">
                    <Link to="/reserve" className="btn btn-primary">
                        <CalendarCheck2 className="h-4 w-4" /> Reserve now
                    </Link>
                    <Link to="/ride" className="btn">See all options</Link>
                </div>
            </motion.div>

            <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="card overflow-hidden"
            >
                <img
                    alt="Reserve promo"
                    className="w-full h-56 object-cover"
                    src="https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1400&auto=format&fit=crop"
                />
            </motion.div>
        </section>
    );
}
