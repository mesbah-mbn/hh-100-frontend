import React, { useEffect, useState, useRef } from "react";

const ProductCards = ({ onSelectProduct }) => {
    const [products, setProducts] = useState([]);
    const scrollRef = useRef(null);

    useEffect(() => {
        fetch("https://hh-100.onrender.com/api/products/")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error(err));
    }, []);

    const scroll = (direction) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === "left" ? -320 : 320,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="py-20 px-6 bg-gray-50">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Unsere Produkte
                    </h2>

                    {/* Desktop arrows */}
                    <div className="hidden md:flex gap-3">
                        <button
                            onClick={() => scroll("left")}
                            className="bg-white shadow px-4 py-2 rounded-lg hover:bg-gray-100"
                        >
                            ◀
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className="bg-white shadow px-4 py-2 rounded-lg hover:bg-gray-100"
                        >
                            ▶
                        </button>
                    </div>
                </div>

                {/* Slider */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
                >
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="min-w-[260px] sm:min-w-[280px] md:min-w-[300px] 
              bg-white/60 backdrop-blur-lg border border-gray-200 
              rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 
              transition duration-300"
                        >
                            {/* Image */}
                            <div className="w-full h-48 overflow-hidden rounded-t-2xl">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                                    {product.title}
                                </h3>

                                <p className="text-gray-500 text-sm mb-4 line-clamp-3">
                                    {product.description}
                                </p>

                                <button
                                    onClick={() => onSelectProduct(product.title)}
                                    className="bg-green-600 text-white px-4 py-2 rounded-xl w-full 
                  hover:bg-green-700 transition shadow-md"
                                >
                                    Jetzt anfragen
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default ProductCards;