export default function SectionProduits() {
    const categories = [
        {
            title: "Fruits secs",
            description: "Amandes, noix, noisettes, raisins secs... en vrac ou sachet.",
            image: "/images/fruits-secs.png",
        },
        {
            title: "Biscuits",
            description: "Recettes artisanales sucrées & salées pour tous les goûts.",
            image: "/images/biscuits.png",
        },
        {
            title: "Bonbons",
            description: "Gourmandises naturelles ou traditionnelles, pour tous les âges.",
            image: "/images/bonbons.png",
        },
        {
            title: "Boissons",
            description: "Jus naturels, boissons végétales, sans additifs.",
            image: "/images/boissons.png",
        },
    ];

    return (
        <section className="px-6 py-20 bg-white text-center">
            <h2 className="text-4xl font-bold mb-12">Nos Gammes de Produits</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {categories.map((cat, idx) => (
                    <div
                        key={idx}
                        className="rounded-xl overflow-hidden shadow hover:shadow-lg transition"
                    >
                        <img
                            src={cat.image}
                            alt={cat.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">{cat.title}</h3>
                            <p className="text-gray-600 text-sm">{cat.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}