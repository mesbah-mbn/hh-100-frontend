import React, { useEffect, useState } from "react";

const HeroSlider = () => {
    const [slides, setSlides] = useState([]);
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        fetch("https://hh-100.onrender.com/api/products/")
            .then((res) => res.json())
            .then((data) => setSlides(data))
            .catch((err) => console.error(err));
    }, []);

    useEffect(() => {
        if (slides.length === 0) return;

        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [slides]);

    if (slides.length === 0) return null;

    return (
        <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-gray-200">

            {/* Flash Card */}
            <div className="relative w-[80%] h-[80%] rounded-3xl shadow-2xl overflow-hidden transition-all duration-1000">
                <img
                    src={slides[current].image}
                    alt="slider"
                    className="w-full h-full object-cover"
                />

                {/* Overlay Text */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm flex flex-col items-center justify-center text-center">
                    <h2 className="text-4xl font-bold text-gray-900 drop-shadow-lg">
                        {slides[current].title}
                    </h2>
                    <p className="mt-4 text-lg text-gray-700 max-w-xl">
                        {slides[current].description}
                    </p>
                </div>
            </div>

            {/* Slider Dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full ${current === index
                            ? "bg-green-500 scale-125"
                            : "bg-gray-400"
                            } transition-all duration-300`}
                    />
                ))}
            </div>

        </section>
    );
};

export default HeroSlider;
