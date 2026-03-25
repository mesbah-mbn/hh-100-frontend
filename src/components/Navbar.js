import React from "react";

const Navbar = () => {
    return (
        <nav className="w-full fixed top-0 left-0 z-50 bg-white/70 backdrop-blur-md shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <h1 className="text-xl font-bold text-green-600">
                    FensterPro
                </h1>

                {/* Menu */}
                <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
                    <li className="hover:text-green-600 cursor-pointer">Startseite</li>
                    <li className="hover:text-green-600 cursor-pointer">Leistungen</li>
                    <li className="hover:text-green-600 cursor-pointer">Über uns</li>
                    <li className="hover:text-green-600 cursor-pointer">Kontakt</li>
                </ul>

                {/* Button */}
                <button className="bg-green-600 text-white px-5 py-2 rounded-xl hover:bg-green-700 transition">
                    Angebot anfordern
                </button>

            </div>
        </nav>
    );
};

export default Navbar;
