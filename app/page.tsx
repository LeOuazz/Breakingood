import Hero from "../components/Hero";
import SectionProduits from "../components/SectionProduits";
import SectionSavoirFaire from "../components/SectionSavoirFaire";
import CTA from "../components/CTA";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
    return (
        <main className="bg-white text-gray-900 font-serif">
            <Hero />
            <SectionProduits />
            <SectionSavoirFaire />
            <CTA />
            <WhatsAppButton />
        </main>
    );
}
