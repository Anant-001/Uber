import { Mail, Phone, MessageSquare, MapPin } from "lucide-react";

const contacts = [
    {
        icon: Mail,
        title: "Email Support",
        desc: "Get in touch with us via email for help with your account or trips.",
        action: "support@uberdark.com",
    },
    {
        icon: Phone,
        title: "Call Us",
        desc: "Speak directly to our support team for urgent concerns.",
        action: "+1 (800) 555-1234",
    },
    {
        icon: MessageSquare,
        title: "Live Chat",
        desc: "Chat with our support agents in real-time via the app.",
        action: "Start Chat",
    },
    {
        icon: MapPin,
        title: "Visit Office",
        desc: "Come see us at our local headquarters.",
        action: "123 Uber Street, San Francisco, CA",
    },
];

export default function ContactUs() {
    return (
        <section className="py-12 space-y-12">
            {/* Hero */}
            <div className="text-center max-w-2xl mx-auto">
                <h1 className="text-4xl font-bold">Contact Us</h1>
                <p className="text-gray-400 mt-3">
                    Have questions or need help? Reach out to us through any of the
                    following channels.
                </p>
            </div>

            {/* Contact options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {contacts.map((c, i) => (
                    <div
                        key={i}
                        className="card p-6 flex flex-col text-center items-center space-y-3 hover:bg-white/10 transition"
                    >
                        <c.icon className="h-10 w-10 text-[rgb(var(--brand))]" />
                        <h2 className="text-lg font-semibold">{c.title}</h2>
                        <p className="text-sm text-gray-400">{c.desc}</p>
                        <span className="text-sm font-medium text-[rgb(var(--brand))]">
              {c.action}
            </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
