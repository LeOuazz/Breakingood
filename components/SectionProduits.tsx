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
        <section className="relative w-full min-h-screen p-0 md:min-h-[90vh] md:py-10">
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
                        <div className="relative w-full h-screen md:h-[90vh] flex items-center justify-center">
                            <Image
                                src={cat.image}
                                alt=""
                                width={400}
                                height={400}
                                className="object-contain max-h-[80vh]"
                                priority={idx === 0}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

