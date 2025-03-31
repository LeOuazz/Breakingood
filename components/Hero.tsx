import Image from 'next/image';

export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center text-center py-24 bg-primary text-white">
            <Image src="/logo.png" alt="Breaking Good Logo" width={120} height={120} className="mb-6" />
            <h1 className="text-5xl font-bold tracking-tight uppercase">Breaking Good</h1>
            <p className="mt-4 text-xl">Noix & Fruits Secs Artisanaux</p>
        </section>
    );
}

