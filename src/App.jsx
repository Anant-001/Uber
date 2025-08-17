import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import Home from "./pages/Home.jsx";
import Ride from "./pages/Ride.jsx";
import Drive from "./pages/Drive.jsx";
import Rent from "./pages/Rent.jsx";
import Reserve from "./pages/Reserve.jsx";
import Business from "./pages/Business.jsx";
import Help from "./pages/Help.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Profile from "./pages/Profile.jsx";
import Aboutus from "./pages/footer/Aboutus.jsx";
import Newsroom from "./pages/footer/Newsroom.jsx";
import Investors from "./pages/footer/Investors.jsx";
import Careers from "./pages/footer/Careers.jsx";
import Safety from "./pages/footer/Safety.jsx";
import ContactUs from "./pages/footer/ContactUs.jsx";
import FAQs from "./pages/footer/FAQs.jsx";
import DeliveryPartners from "./pages/footer/DeliveryPartners.jsx";
import DeveloperAPI from "./pages/footer/DeveloperAPI.jsx";

export default function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/ride" element={<Ride />} />
                <Route path="/drive" element={<Drive />} />
                <Route path="/rent" element={<Rent />} />
                <Route path="/reserve" element={<Reserve />} />
                <Route path="/business" element={<Business />} />
                <Route path="/help" element={<Help />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/about" element={<Aboutus />} />
                <Route path="/newsroom" element={<Newsroom />} />
                <Route path="/investors" element={<Investors />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/safety" element={<Safety />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/faqs" element={<FAQs />} />
                <Route path="/partners" element={<DeliveryPartners />} />
                <Route path="/api" element={<DeveloperAPI />} />
            </Route>
        </Routes>
    );
}
