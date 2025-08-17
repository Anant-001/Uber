import { useEffect, useState } from "react";

export default function Investors() {
    const [stock, setStock] = useState(null);
    const [loading, setLoading] = useState(true);

    const highlights = [
        {
            title: "Stock Information",
            desc: "Stay up to date with Uber’s latest stock performance and market updates.",
            link: "#",
        },
        {
            title: "Earnings Reports",
            desc: "Read our quarterly results, financials, and future outlook.",
            link: "#",
        },
        {
            title: "Corporate Governance",
            desc: "Learn about our leadership, board, and governance practices.",
            link: "#",
        },
        {
            title: "Sustainability",
            desc: "Explore our efforts to build a sustainable and zero-emission future.",
            link: "#",
        },
    ];

    useEffect(() => {
        async function fetchStock() {
            try {
                const res = await fetch(
                    `https://finnhub.io/api/v1/quote?symbol=UBER&token=${import.meta.env.VITE_FINNHUB_API_KEY}`
                );
                const data = await res.json();
                setStock(data);
            } catch (err) {
                console.error("Error fetching stock:", err);
            } finally {
                setLoading(false);
            }
        }

        fetchStock();
        const interval = setInterval(fetchStock, 60000); // refresh every 1 min
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="space-y-12 px-6 lg:px-16 py-12">
            {/* Hero Section */}
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold">Investors</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Get the latest Uber financial news, earnings, reports, and
                    sustainability updates for our investors.
                </p>
            </div>

            {/* Stock Widget */}
            <div className="card p-6 text-center space-y-2 max-w-md mx-auto">
                <h2 className="text-xl font-semibold">Uber Stock Price (UBER)</h2>
                {loading ? (
                    <p className="text-gray-500">Loading...</p>
                ) : stock ? (
                    <div className="space-y-1">
                        <p className="text-3xl font-bold">${stock.c}</p>
                        <p className="text-sm text-gray-500">
                            Open: ${stock.o} | High: ${stock.h} | Low: ${stock.l}
                        </p>
                        <p
                            className={`text-sm font-medium ${
                                stock.d >= 0 ? "text-green-500" : "text-red-500"
                            }`}
                        >
                            {stock.d >= 0 ? "▲" : "▼"} {stock.d} ({stock.dp}%)
                        </p>
                    </div>
                ) : (
                    <p className="text-red-500">Error loading stock data</p>
                )}
            </div>

            {/* Featured Banner */}
            <div className="relative rounded-xl overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1634542984003-e0fb8e200e91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEludmVzdG9ycyUyMEJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D"
                    alt="Investors Banner"
                    className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h2 className="text-3xl font-bold text-white">
                        Building the future of mobility together
                    </h2>
                </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {highlights.map((item, i) => (
                    <div
                        key={i}
                        className="card p-6 hover:shadow-lg transition space-y-3"
                    >
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                        <a
                            href={item.link}
                            className="text-brand text-sm hover:underline"
                        >
                            Learn more →
                        </a>
                    </div>
                ))}
            </div>

            {/* Reports Section */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold">Latest Reports</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="card p-4">
                        <h3 className="font-semibold">Q2 2025 Earnings Release</h3>
                        <p className="text-gray-600 text-sm">Published: Aug 5, 2025</p>
                        <a href="#" className="text-brand text-sm hover:underline">
                            Download PDF
                        </a>
                    </div>
                    <div className="card p-4">
                        <h3 className="font-semibold">Annual Report 2024</h3>
                        <p className="text-gray-600 text-sm">Published: Feb 20, 2025</p>
                        <a href="#" className="text-brand text-sm hover:underline">
                            Download PDF
                        </a>
                    </div>
                    <div className="card p-4">
                        <h3 className="font-semibold">Sustainability Report 2024</h3>
                        <p className="text-gray-600 text-sm">Published: Mar 15, 2025</p>
                        <a href="#" className="text-brand text-sm hover:underline">
                            Download PDF
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
