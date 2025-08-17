import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        q: "How do I create an account?",
        a: "Download the Uber Dark app or sign up on our website with your email, phone number, and a password. You can then add payment methods and start riding.",
    },
    {
        q: "How do I schedule a ride?",
        a: "Use the Reserve feature in the app to book a ride up to 90 days in advance. Just enter your pick-up, drop-off, and choose your preferred ride option.",
    },
    {
        q: "What safety measures are in place?",
        a: "We have real-time GPS tracking, share trip options, driver screenings, and 24/7 support to ensure every ride is safe.",
    },
    {
        q: "How do I contact customer support?",
        a: "You can use the Help Center in the app, email support@uberdark.com, or call us for urgent issues.",
    },
    {
        q: "How do I become a driver?",
        a: "Go to the Drive with Uber Dark section, sign up with your details, upload required documents, and our team will guide you through onboarding.",
    },
];

function FAQItem({ q, a, open, onClick }) {
    return (
        <div className="border-b border-white/10">
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between py-4 text-left"
            >
                <span className="font-medium">{q}</span>
                <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                        open ? "rotate-180" : ""
                    }`}
                />
            </button>
            {open && <p className="pb-4 text-gray-400">{a}</p>}
        </div>
    );
}

export default function FAQs() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="py-12 max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-center">Frequently Asked Questions</h1>
            <p className="text-gray-400 text-center mt-2 mb-8">
                Quick answers to the most common questions about Uber Dark.
            </p>

            <div className="card divide-y divide-white/10">
                {faqs.map((faq, i) => (
                    <FAQItem
                        key={i}
                        {...faq}
                        open={openIndex === i}
                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    />
                ))}
            </div>
        </section>
    );
}
