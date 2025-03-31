'use client';

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section
            className="relative w-full min-h-[90vh] bg-cover bg-center text-white flex flex-col items-center justify-center text-center px-4"
            style={{ backgroundImage: "url('/images/hero-bg.png')" }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 z-0" />

            {/* Content */}
            <div className="relative z-10 max-w-2xl">
                <motion.img
                    src="/logo.png"
                    alt="Logo Breaking Good"
                    className="mx-auto mb-6 w-24 brightness-0 invert"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                />

                <motion.h1
                    className="text-white text-4xl md:text-5xl font-extrabold uppercase tracking-wide drop-shadow-md"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    Breaking Good
                </motion.h1>

                <motion.p
                    className="mt-4 text-lg md:text-xl font-medium drop-shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    Fruits secs, biscuits & douceurs naturelles pour les pros
                </motion.p>

                <motion.div
                    className="mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <Button variant="default" className="text-black bg-yellow-400 hover:bg-yellow-300 font-bold px-6 py-3 rounded-full text-md">
                        Nous contacter
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
