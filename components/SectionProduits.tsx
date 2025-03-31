'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';

export default function SectionProduits() {
    const categories = [
        {
            title: "Fruits secs",
            description: "Amandes, noix, noisettes, raisins… en vrac ou sachets.",
            image: "/images/fruits-secs.png",
        },
        {
            title: "Biscuits",
            description: "Biscuits artisanaux sucrés et salés, parfaits à partager.",
            image: "/images/biscuits.png",
        },
        {
            title: "Bonbons",
            description: "Un monde de douceurs naturelles ou traditionnelles.",
            image: "/images/bonbons.png",
        },
        {
            title: "Boissons",
            description: "Jus, boissons végétales & rafraîchissements originaux.",
            image: "/images/boissons.png",
        },
    ];

    return (
        <motion.section
            initial={{ y: 40 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-full h-[90vh] overflow-hidden z-10"
        >
            <Swiper
                modules={[Autoplay, Navigation]}
                slidesPerView={1}
                loop={true}
                navigation={true}
                autoplay={{ delay: 4500, disableOnInteraction: false }}
                className="w-full h-full"
            >
                {categories.map((cat, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="relative w-full h-full">
                            {/* Image zoom-in */}
                            <motion.img
                                src={cat.image}
                                alt={cat.title}
                                className="absolute inset-0 w-full h-full object-cover"
                                initial={{ scale: 1 }}
                                animate={{ scale: 1.1 }}
                                transition={{ duration: 10, ease: "easeOut" }}
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-6 z-10">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7 }}
                                >
                                    <div className="inline-block px-6 py-3 bg-yellow-400 text-black font-bold rounded-full shadow-md cursor-default text-xl">
                                        {cat.title}
                                    </div>
                                </motion.div>

                                <motion.p
                                    className="text-lg md:text-xl text-white max-w-2xl mt-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, duration: 0.6 }}
                                >
                                    {cat.description}
                                </motion.p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Optional floating box-shadow layer */}
            <motion.div
                className="absolute -inset-2 bg-black/5 blur-2xl z-0 rounded-xl pointer-events-none"
                animate={{ y: [0, -6, 0] }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </motion.section>
    );
}
