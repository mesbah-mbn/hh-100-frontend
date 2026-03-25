import React, { useEffect, useState } from "react";

const HeroSlider = ({ onScrollToForm }) => {
    const [slides, setSlides] = useState([]);
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/products/")
            .then((res) => res.json())
            .then((data) => setSlides(data))
            .catch((err) => console.error(err));
    }, []);

    useEffect(() => {
        if (slides.length === 0) return;

        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [slides]);

    return (
        <div className="relative w-full h-screen overflow-hidden">

            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute w-full h-full transition-all duration-1000 ${index === current
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-105"
                        }`}
                >
                    {/* Background Image */}
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">

                        {/* Glass Content */}
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 text-center text-white max-w-2xl mx-4">

                            <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                                {slide.title}
                            </h2>

                            <p className="text-sm md:text-lg text-gray-200 mb-6">
                                {slide.description}
                            </p>

                            <button
                                onClick={onScrollToForm}
                                className="bg-green-600 px-6 py-3 rounded-xl text-white font-medium 
                hover:bg-green-700 transition shadow-lg"
                            >
                                Jetzt Angebot anfordern
                            </button>

                        </div>
                    </div>
                </div>
            ))}

        </div>
    );
};

export default HeroSlider;