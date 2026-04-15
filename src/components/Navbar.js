import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-white/90 to-blue-50/80 backdrop-blur-md shadow-lg border-b border-blue-200">
            <div className="max-w-7xl mx-auto h-20 flex items-center justify-center">
                <img
                    src={logo}
                    alt="Dachfenster24 Logo"
                    onClick={scrollToTop}
                    className="h-16 object-contain cursor-pointer hover:scale-110 hover:drop-shadow-lg transition-transform duration-300 ease-in-out"
                />
            </div>
        </nav>
    );
};

export default Navbar;
