import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10 px-6">
            <div className="max-w-6xl mx-auto text-center">

                <h2 className="text-xl font-semibold mb-4">
                    FensterPro
                </h2>

                <p className="text-gray-400 mb-4">
                    Hochwertige Fenster & Türen in Deutschland
                </p>

                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} FensterPro. Alle Rechte vorbehalten.
                </p>

            </div>
        </footer>
    );
};

export default Footer;