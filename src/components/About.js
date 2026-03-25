import React from "react";

const About = () => {
    return (
        <div className="py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                {/* Image */}
                <div className="w-full h-[350px] overflow-hidden rounded-2xl">
                    <img
                        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
                        alt="about"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content */}
                <div>
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">
                        Über uns
                    </h2>

                    <p className="text-gray-600 mb-4">
                        Wir sind ein erfahrenes Unternehmen im Bereich Fenster- und Türlösungen.
                        Unser Ziel ist es, hochwertige Produkte mit professioneller Montage
                        anzubieten und unseren Kunden den besten Service zu garantieren.
                    </p>

                    <p className="text-gray-600 mb-6">
                        Mit modernen Designs, langlebigen Materialien und schneller Umsetzung
                        helfen wir Ihnen, Ihr Zuhause sicherer und schöner zu gestalten.
                    </p>

                    <button className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition">
                        Kontakt aufnehmen
                    </button>
                </div>

            </div>
        </div>
    );
};

export default About;