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
        <section className="relative w-full flex justify-center overflow-hidden bg-white">

            <img
                src={slides[current].image}
                alt="slider"
                className="
                    transition-all duration-1000
                    rounded-3xl
                "
                style={{
                    width: "auto",
                    height: "auto",
                    maxWidth: "100%",
                    maxHeight: "90vh",
                }}
            />

            {/* Slider Dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full ${current === index ? "bg-green-500" : "bg-black/40"
                            }`}
                    />
                ))}
            </div>

        </section>
    );
};

export default HeroSlider;
