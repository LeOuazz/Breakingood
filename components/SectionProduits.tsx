'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';

export default function SectionProduits() {
    const categories = [
        {

            image: "/images/fruits-secs.png",
        },
        {

            image: "/images/biscuits.png",
        },
        {

            image: "/images/bonbons.png",
        },
        {

            image: "/images/boissons.png",
        },
    ];

    return (
        <section className="relative w-full h-[90vh]">
            <Swiper
                modules={[Autoplay, Navigation]}
                slidesPerView={1}
                loop={true}
                navigation={true}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                className="w-full h-full"
            >
                {categories.map((cat, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="relative w-full h-[90vh]">
                            <Image
                                src={cat.image}
                                fill
                                className="object-cover"
                                priority={idx === 0} // optimise le chargement du premier slide
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h2 className="text-white text-4xl md:text-5xl font-extrabold uppercase drop-shadow-lg">
                                    {cat.title}
                                </h2>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
