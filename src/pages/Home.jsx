import Hero from "../components/Hero.jsx";
import Suggestions from "../components/Suggestions.jsx";
import ReserveBanner from "../components/ReserveBanner.jsx";
import PromoGrid from "../components/PromoGrid.jsx";
import AppDownload from "../components/AppDownload.jsx";

export default function Home() {
    return (
        <>
            <Hero />
            <Suggestions />
            <ReserveBanner />
            <PromoGrid />
            <AppDownload />
        </>
    );
}
