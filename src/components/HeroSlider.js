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
        <section className="w-full bg-white py-10">
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
                        <SwiperSlide key={index}>
                            <div
                                className="
                                    w-full 
                                    h-[260px] 
                                    sm:h-[300px] 
                                    md:h-[340px] 
                                    lg:h-[380px]
                                    rounded-3xl 
                                    overflow-hidden 
                                    flex items-center justify-center 
                                    bg-white
                                "
                            >
                                <img
                                    src={slide.image}
                                    alt="product"
                                    className="max-h-full max-w-full object-contain rounded-2xl"
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
