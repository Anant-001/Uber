import { motion } from "framer-motion";
import { CarFront, Bike, Truck, TrainFront, Umbrella, Package } from "lucide-react";

const items = [
    { icon: CarFront, title: "UberX", desc: "Affordable, everyday rides" },
    { icon: Bike, title: "Moto", desc: "Beat traffic on two wheels" },
    { icon: Truck, title: "UberXL", desc: "Extra seats for groups" },
    { icon: TrainFront, title: "Intercity", desc: "Outstation rides" },
    { icon: Package, title: "Packages", desc: "Send items easily" },
    { icon: Umbrella, title: "Reserve", desc: "Plan a ride for later" },
];

export default function Suggestions() {
    return (
        <section className="mt-14">
            <h3 className="text-xl font-semibold mb-4">Suggestions</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((it, i) => (
                    <motion.div
                        key={i}
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="card p-4 hover:bg-white/10 transition group"
                    >
                        <div className="flex items-center gap-3">
              <span className="grid place-items-center h-10 w-10 rounded-xl bg-white/10 border border-white/10">
                <it.icon className="h-5 w-5" />
              </span>
                            <div>
                                <div className="font-medium">{it.title}</div>
                                <div className="text-xs text-gray-400">{it.desc}</div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
