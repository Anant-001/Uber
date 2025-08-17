import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function Layout() {
    return (
        <div className="min-h-dvh bg-mesh-dark bg-[length:120%_120%] bg-no-repeat">
            <Navbar />
            <main className="container-px pt-24 pb-16">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
