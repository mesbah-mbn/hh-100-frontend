import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer
            className="
                bg-white
                text-gray-800
                py-10
                px-6
                shadow-[0_-4px_20px_rgba(0,0,0,0.1)]
                rounded-t-3xl
            "
        >
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-2xl font-semibold mb-3 text-green-600">
                    Dachfenster-24
                </h2>

                <p className="text-gray-500 mb-3">
                    Hochwertige Fenster & Türen in Deutschland
                </p>

                <div className="flex justify-center gap-6 mb-4 text-sm">
                    <Link
                        to="/impressum"
                        className="text-gray-600 hover:text-gray-900 transition"
                    >
                        Impressum
                    </Link>

                    <Link
                        to="/datenschutz"
                        className="text-gray-600 hover:text-gray-900 transition"
                    >
                        Datenschutz
                    </Link>
                </div>

                <p className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} Dachfenster-24. Alle Rechte vorbehalten.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
