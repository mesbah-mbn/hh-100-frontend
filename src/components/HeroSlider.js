import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const CarouselSlider = () => {
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        fetch("https://hh-100.onrender.com/api/products/")
            .then((res) => res.json())
            .then((data) => setSlides(data))
            .catch((err) => console.error(err));
    }, []);

    if (slides.length === 0) return null;

    return (
        <section className="w-full bg-white px-6 py-10">
            <div className="max-w-7xl mx-auto">
                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={20}
                    breakpoints={{
                        0: { slidesPerView: 1 },      // phones
                        480: { slidesPerView: 1.5 },  // small phones
                        640: { slidesPerView: 2 },    // tablets
                        1024: { slidesPerView: 3 },   // desktop
                    }}
                    className="pb-6"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={slide.id || index} className="h-auto">
                            <div
                                className="
                                    group
                                    h-[260px]
                                    w-full
                                    sm:h-[300px]
                                    md:h-[340px]
                                    lg:h-[380px]
                                    overflow-hidden
                                    rounded-3xl
                                    bg-slate-100
                                    shadow-lg
                                    shadow-slate-900/10
                                "
                            >
                                <img
                                    src={slide.image}
                                    alt={slide.title || "Dachfenster Produkt"}
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    );
};

export default CarouselSlider;
