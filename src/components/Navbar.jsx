import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Globe, ChevronDown, Car, ShipWheel } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { auth } from "../firebase"; // <-- Firebase auth

const nav = [
    { to: "/ride", label: "Ride" },
    { to: "/drive", label: "Drive" },
    { to: "/rent", label: "Rent" },
    { to: "/reserve", label: "Reserve" },
    { to: "/business", label: "Business" },
    { to: "/help", label: "Help" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((u) => {
            setUser(u);
        });
        return unsubscribe;
    }, []);

    return (
        <header className="fixed top-0 inset-x-0 z-50">
            <div className="container-px">
                <div className="mt-4 rounded-2xl border border-white/10 bg-black/40 backdrop-blur shadow-[0_8px_32px_rgba(0,0,0,0.37)]">
                    <div className="flex h-16 items-center justify-between px-4">
                        {/* Brand */}
                        <Link to="/" className="flex items-center gap-2">
                            <div className="grid place-items-center h-9 w-9 rounded-xl bg-[rgb(var(--brand))] text-black font-bold">
                                U
                            </div>
                            <span className="font-semibold tracking-wide"> Uber </span>
                        </Link>

                        {/* Desktop nav */}
                        <nav className="hidden md:flex items-center gap-2">
                            {nav.map((n) => (
                                <NavLink
                                    key={n.to}
                                    to={n.to}
                                    className={({ isActive }) =>
                                        clsx(
                                            "px-3 py-2 rounded-xl text-sm transition border",
                                            isActive
                                                ? "bg-white/20 border-white/20"
                                                : "border-transparent hover:bg-white/10"
                                        )
                                    }
                                >
                                    {n.label}
                                </NavLink>
                            ))}

                            {/* Products dropdown */}
                            <div className="relative">
                                <button
                                    className="btn"
                                    onClick={() => setProductsOpen((s) => !s)}
                                >
                                    <ChevronDown className="h-4 w-4" />
                                    Products
                                </button>
                                <AnimatePresence>
                                    {productsOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -6 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -6 }}
                                            className="absolute right-0 mt-2 w-56 card p-2"
                                        >
                                            <Link
                                                to="/ride"
                                                className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/10"
                                            >
                                                <Car className="h-4 w-4" /> Uber Rides
                                            </Link>
                                            <Link
                                                to="/drive"
                                                className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/10"
                                            >
                                                <ShipWheel className="h-4 w-4" /> Drive with Uber
                                            </Link>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <button className="btn" title="Language">
                                <Globe className="h-4 w-4" />
                            </button>

                            {/* Auth buttons */}
                            {user ? (
                                <Link to="/profile" className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-white/10 transition">
                                    {user.photoURL ? (
                                        <img
                                            src={user.photoURL}
                                            alt="avatar"
                                            className="h-8 w-8 rounded-full border border-white/20"
                                        />
                                    ) : (
                                        <div className="h-8 w-8 rounded-full bg-[rgb(var(--brand))] text-black grid place-items-center font-bold">
                                            {user.displayName ? user.displayName[0] : "U"}
                                        </div>
                                    )}
                                    <span className="hidden md:inline text-sm">{user.displayName || user.email}</span>
                                </Link>
                            ) : (
                                <>
                                    <Link to="/login" className="btn">Log in</Link>
                                    <Link to="/signup" className="btn btn-primary">Sign up</Link>
                                </>
                            )}
                        </nav>

                        {/* Mobile menu button */}
                        <button className="md:hidden btn" onClick={() => setOpen(true)}>
                            <Menu className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setOpen(false)}
                    >
                        <motion.aside
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", bounce: 0, duration: 0.5 }}
                            className="absolute left-0 top-0 h-full w-80 rounded-2xl border border-white/10 bg-white/5 backdrop-blur shadow-[0_8px_32px_rgba(0,0,0,0.37)] p-4"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex items-center justify-between">
                                <span className="font-semibold">Menu</span>
                                <button className="btn" onClick={() => setOpen(false)}>
                                    <X className="h-5 w-5" />
                                </button>
                            </div>
                            <div className="mt-4 space-y-2">
                                {nav.map((n) => (
                                    <NavLink
                                        key={n.to}
                                        to={n.to}
                                        onClick={() => setOpen(false)}
                                        className={({ isActive }) =>
                                            clsx(
                                                "block px-3 py-2 rounded-xl border",
                                                isActive
                                                    ? "bg-white/20 border-white/20"
                                                    : "hover:bg-white/10 border-transparent"
                                            )
                                        }
                                    >
                                        {n.label}
                                    </NavLink>
                                ))}

                                <div className="pt-4 flex gap-2">
                                    {user ? (
                                        <Link
                                            to="/profile"
                                            onClick={() => setOpen(false)}
                                            className="flex items-center gap-2 btn w-full"
                                        >
                                            {user.photoURL ? (
                                                <img
                                                    src={user.photoURL}
                                                    alt="avatar"
                                                    className="h-7 w-7 rounded-full border border-white/20"
                                                />
                                            ) : (
                                                <div className="h-7 w-7 rounded-full bg-[rgb(var(--brand))] text-black grid place-items-center font-bold">
                                                    {user.displayName ? user.displayName[0] : "U"}
                                                </div>
                                            )}
                                            <span>{user.displayName || user.email}</span>
                                        </Link>
                                    ) : (
                                        <>
                                            <Link to="/login" onClick={() => setOpen(false)} className="btn w-full">
                                                Log in
                                            </Link>
                                            <Link to="/signup" onClick={() => setOpen(false)} className="btn btn-primary w-full">
                                                Sign up
                                            </Link>
                                        </>
                                    )}
                                </div>
                            </div>
                        </motion.aside>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
