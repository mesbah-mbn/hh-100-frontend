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
                        Wir sind ein spezialisierter Hersteller für maßgefertigte Dachfenster
                        und moderne Tageslichtlösungen. Unser Anspruch ist es, jedes Dachgeschoss
                        in einen hellen, komfortablen und energieeffizienten Wohnraum zu verwandeln.
                    </p>

                    <p className="text-gray-600 mb-4">
                        Mit hochwertigen Materialien, präziser Fertigung und professioneller Montage
                        bieten wir langlebige Lösungen, die perfekt auf Ihr Zuhause abgestimmt sind.
                        Unsere Produkte sorgen für mehr Licht, ein besseres Raumklima und ein
                        deutlich gesteigertes Wohngefühl.
                    </p>

                    <p className="text-gray-600 mb-6">
                        Als deutscher Anbieter legen wir großen Wert auf Qualität, Sicherheit
                        und transparente Beratung. Von der ersten Anfrage bis zur finalen
                        Installation begleiten wir Sie zuverlässig – inklusive Unterstützung
                        bei möglichen staatlichen Förderprogrammen.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default About;
