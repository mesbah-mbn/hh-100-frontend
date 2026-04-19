import React from "react";
import aboutImage from "../assets/Copilot_20260416_000555.png";

const About = () => {
    return (
        <section id="about" className="scroll-mt-28 bg-white px-6 py-20">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                <div className="w-full h-[350px] overflow-hidden rounded-2xl">
                    <img
                        src={aboutImage}
                        alt="Dachfenster Beratung und Montage"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div>
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">
                        Über uns
                    </h2>

                    <p className="text-gray-600 mb-4">
                        Wir sind ein spezialisierter Anbieter für maßgefertigte Dachfenster
                        und moderne Tageslichtlösungen. Unser Anspruch ist es, jedes Dachgeschoss
                        in einen hellen, komfortablen und energieeffizienten Wohnraum zu verwandeln.
                    </p>

                    <p className="text-gray-600 mb-4">
                        Mit hochwertigen Materialien, präziser Planung und professioneller Montage
                        bieten wir langlebige Lösungen, die perfekt auf Ihr Zuhause abgestimmt sind.
                        Unsere Produkte sorgen für mehr Licht, ein besseres Raumklima und ein
                        deutlich gesteigertes Wohngefühl.
                    </p>

                    <p className="text-gray-600 mb-6">
                        Als deutscher Anbieter legen wir großen Wert auf Qualität, Sicherheit
                        und transparente Beratung. Von der ersten Anfrage bis zur finalen
                        Installation begleiten wir Sie zuverlässig - inklusive Unterstützung
                        bei möglichen staatlichen Förderprogrammen.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
