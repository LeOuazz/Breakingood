
import Hero from '../components/Hero';
import SectionProduits from '../components/SectionProduits';
import SectionSavoirFaire from '../components/SectionSavoirFaire';
import CTA from '../components/CTA';

export default function Home() {
  return (
      <main className="font-serif bg-white text-dark">
        <Hero />
        <SectionProduits />
        <SectionSavoirFaire />
        <CTA />
      </main>
  );
}