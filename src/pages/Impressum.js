import React from "react";

const Impressum = () => {
    return (
        <div className="max-w-3xl mx-auto py-16 px-6 text-gray-800">
            <br />
            <h1 className="text-3xl font-bold mb-6">Impressum</h1>

            <p className="mb-4">
                <strong>Dachfenster-24.de</strong><br />
                Inhaber: Camim Hamid<br />
                Eisenbahnstraße 15<br />
                15517 Fürstenwalde/Spree<br />
                Deutschland
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Kontakt</h2>
            <p className="mb-4">
                Telefon: 01608503124<br />
                E-Mail: hamid.camim@icloud.com
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Streitschlichtung</h2>
            <p className="mb-4">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
                vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
        </div>
    );
};

export default Impressum;
