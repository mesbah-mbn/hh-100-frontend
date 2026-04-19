import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const navLinks = [
    { label: "Anfrage", href: "/#multi-step-form" },
    { label: "Firma", href: "/#company-card" },
    { label: "Info", href: "/#website-info" },
    { label: "Kontakt", href: "/#contact" },
    { label: "Ueber uns", href: "/#about" },
];

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 z-50 w-full border-b border-blue-200 bg-gradient-to-r from-white/95 to-blue-50/90 shadow-lg backdrop-blur-md">
            <div className="mx-auto flex min-h-20 max-w-7xl flex-col items-center gap-3 px-4 py-3 md:h-20 md:flex-row md:justify-between md:py-0">
                <Link to="/" aria-label="Zur Startseite" className="shrink-0">
                    <img
                        src={logo}
                        alt="Dachfenster-24 Logo"
                        className="h-14 object-contain transition-transform duration-300 ease-in-out hover:scale-105 hover:drop-shadow-lg md:h-16"
                    />
                </Link>

                <div className="flex max-w-full gap-2 overflow-x-auto rounded-full bg-white/70 p-1 text-sm font-semibold text-slate-700 shadow-inner md:gap-3 md:text-base">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="whitespace-nowrap rounded-full px-4 py-2 transition hover:bg-green-600 hover:text-white"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
