'use client';

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section className="relative w-full min-h-[90vh] bg-yellow-400 text-black flex flex-col items-center justify-center text-center px-4">
            <motion.img
                src="/logo.png"
                alt="Logo Breaking Good"
                className="mx-auto mb-6 w-24"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
            />

            <motion.h1
                className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                Breaking Good
            </motion.h1>

            <motion.p
                className="mt-4 text-lg md:text-xl font-medium"
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
                <Button className="bg-black text-yellow-400 font-bold px-6 py-3 rounded-full hover:bg-gray-900 transition">
                    Contactez Nous
                </Button>
            </motion.div>
        </section>
    );
}
