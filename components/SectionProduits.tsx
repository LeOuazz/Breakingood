'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';

export default function SectionProduits() {
    const categories = [
        { image: "/images/fruits-secs.png" },
        { image: "/images/biscuits.png" },
        { image: "/images/bonbons.png" },
        { image: "/images/boissons.png" },
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
                        <div className="relative w-full h-[90vh] bg-white flex items-center justify-center">
                            <Image
                                src={cat.image}
                                alt=""
                                fill
                                className="object-contain"
                                priority={idx === 0}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
