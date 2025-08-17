import { useState } from "react";
import { Link } from "react-router-dom";
import { Globe, Facebook, Twitter, Instagram, Youtube, ChevronDown } from "lucide-react";

const sections = [
    {
        title: "Company",
        links: [
            { label: "About us", to: "/about" },
            { label: "Newsroom", to: "/newsroom" },
            { label: "Investors", to: "/investors" },
            { label: "Careers", to: "/careers" },
        ],
    },
    {
        title: "Products",
        links: [
            { label: "Ride", to: "/ride" },
            { label: "Drive", to: "/drive" },
            { label: "Rent", to: "/rent" },
            { label: "Reserve", to: "/reserve" },
        ],
    },
    {
        title: "Support",
        links: [
            { label: "Help Center", to: "/help" },
            { label: "Safety", to: "/safety" },
            { label: "FAQs", to: "/faqs" },
            { label: "Contact us", to: "/contact" },
        ],
    },
    {
        title: "Business",
        links: [
            { label: "Uber for Business", to: "/business" },
            { label: "Delivery partners", to: "/partners" },
            { label: "Developer API", to: "/api" },
        ],
    },
];

export default function Footer() {
    const [open, setOpen] = useState(null);

    const toggle = (i) => {
        setOpen(open === i ? null : i);
    };

    return (
        <footer className="mt-16 border-t border-white/10 bg-black/40 backdrop-blur">
            <div className="container-px py-12 space-y-8">
                {/* Top logo */}
                <div className="flex items-center gap-2">
                    <div className="grid place-items-center h-9 w-9 rounded-xl bg-[rgb(var(--brand))] text-black font-bold">
                        U
                    </div>
                    <span className="font-semibold tracking-wide"> Uber </span>
                </div>

                {/* Desktop Grid */}
                <div className="hidden md:grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-sm">
                    {sections.map((s, i) => (
                        <div key={i}>
                            <h3 className="mb-3 font-semibold text-white">{s.title}</h3>
                            <ul className="space-y-2 text-gray-400">
                                {s.links.map((l, idx) => (
                                    <li key={idx}>
                                        <Link to={l.to} className="hover:text-white">
                                            {l.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Mobile Accordion */}
                <div className="md:hidden space-y-4">
                    {sections.map((s, i) => (
                        <div key={i} className="border-b border-white/10 pb-2">
                            <button
                                onClick={() => toggle(i)}
                                className="flex items-center justify-between w-full py-2 text-left text-white font-semibold"
                            >
                                {s.title}
                                <ChevronDown
                                    className={`h-4 w-4 transition-transform ${
                                        open === i ? "rotate-180" : ""
                                    }`}
                                />
                            </button>
                            {open === i && (
                                <ul className="pl-2 mt-2 space-y-2 text-gray-400 text-sm">
                                    {s.links.map((l, idx) => (
                                        <li key={idx}>
                                            <Link to={l.to} className="hover:text-white">
                                                {l.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-6 gap-4">
                    {/* Socials */}
                    <div className="flex gap-4 text-gray-400">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer">
                            <Facebook className="h-5 w-5 hover:text-white" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer">
                            <Twitter className="h-5 w-5 hover:text-white" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer">
                            <Instagram className="h-5 w-5 hover:text-white" />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noreferrer">
                            <Youtube className="h-5 w-5 hover:text-white" />
                        </a>
                    </div>

                    {/* Language & copyright */}
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                        <button className="flex items-center gap-1 hover:text-white">
                            <Globe className="h-4 w-4" /> English
                        </button>
                        <span>© {new Date().getFullYear()} Uber Dark</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
