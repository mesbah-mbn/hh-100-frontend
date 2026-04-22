import { useState } from "react";

import neubau from "../assets/neubau.png";
import austausch from "../assets/fertiges-haus.png";

import satteldach from "../assets/satteldach.png";
import walmdach from "../assets/walmdach.png";
import flachdach from "../assets/flachdach.png";
import unklarRoof from "../assets/unklar-roof.png";

import oneTwo from "../assets/1-2-windows.png";
import threeFive from "../assets/3-5-windows.png";
import moreFive from "../assets/mehr-als-5.png";
import unclearWindow from "../assets/unklar-window.png";

import ja from "../assets/ja.png";
import nein from "../assets/nein.png";
import unclearBuilding from "../assets/unklar-building.png";

import asap from "../assets/so-schnell-wie-moeglich.png";
import threeMonth from "../assets/in-3-monaten.png";
import sixMonth from "../assets/in-6-monaten.png";
import unclearTime from "../assets/unklar-time.png";

const cardStyle =
    "bg-white p-3 md:p-5 rounded-xl cursor-pointer shadow-md hover:scale-105 transition";

const optionSteps = {
    1: {
        field: "projectType",
        label: "Projektart",
        title: "Sind die Fenster für einen Neubau oder Austausch?",
        nextStep: 2,
        options: [
            { img: neubau, title: "Neubau" },
            { img: austausch, title: "Austausch" },
        ],
    },
    2: {
        field: "roofType",
        label: "Dachform",
        title: "Welche Dachform hat das Gebäude?",
        nextStep: 3,
        options: [
            { img: satteldach, title: "Satteldach" },
            { img: walmdach, title: "Walmdach" },
            { img: flachdach, title: "Flachdach" },
            { img: unklarRoof, title: "Unklar" },
        ],
    },
    3: {
        field: "windowCount",
        label: "Fenster",
        title: "Um wie viele Fenster handelt es sich?",
        nextStep: 4,
        options: [
            { img: oneTwo, title: "1 - 2" },
            { img: threeFive, title: "3 - 5" },
            { img: moreFive, title: "Über 5" },
            { img: unclearWindow, title: "Unklar" },
        ],
    },
    4: {
        field: "shutters",
        label: "Rollläden",
        title: "Sollen zusätzlich Rollläden angebracht werden?",
        nextStep: 5,
        options: [
            { img: ja, title: "Ja" },
            { img: nein, title: "Nein" },
            { img: unclearBuilding, title: "Unklar" },
        ],
    },
    5: {
        field: "timeline",
        label: "Zeitraum",
        title: "Wann möchten Sie Ihre neuen Dachfenster haben?",
        nextStep: 6,
        options: [
            { img: asap, title: "Sofort" },
            { img: threeMonth, title: "1-3 Monate" },
            { img: sixMonth, title: "3-6 Monate" },
            { img: unclearTime, title: "Unklar" },
        ],
    },
};

function MultiStepForm() {
    const [step, setStep] = useState(1);
    const [showPopup, setShowPopup] = useState(false);
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        name: "",
        postcode: "",
        phone: "",
    });

    const [projectDetails, setProjectDetails] = useState({});

    const handleOptionSelect = (optionStep, value) => {
        setProjectDetails({
            ...projectDetails,
            [optionStep.field]: value,
        });
        setStep(optionStep.nextStep);
    };

    const handleSubmit = async () => {
        setLoading(true);
        const message = Object.values(optionSteps)
            .map(
                (s) =>
                    `${s.label}: ${projectDetails[s.field] || "Nicht angegeben"} `
            )
            .join("\n");

        try {
            const res = await fetch(
                "https://balanced-adaptation-production-c871.up.railway.app/api/leads/",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        ...form,
                        product: "Dachfenster Anfrage",
                        message,
                    }),
                }
            );

            if (res.ok) {
                setShowPopup(true);
            } else {
                alert("Fehler beim Senden. Bitte versuchen Sie es erneut.");
            }
        } catch {
            alert("Serverfehler. Bitte versuchen Sie es später erneut.");
        } finally {
            setLoading(false);
        }
    };

    const handlePopupClose = () => {
        setShowPopup(false);
        window.location.href = "/";
    };

    const current = optionSteps[step];

    return (
        <div className="min-h-screen flex flex-col justify-center px-4">

            {/* SUCCESS POPUP */}
            {showPopup && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full mx-4 text-center">
                        <div className="text-green-500 text-6xl mb-4">✓</div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">
                            Vielen Dank!
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Ihre Anfrage wurde erfolgreich übermittelt. Wir melden uns so schnell wie möglich bei Ihnen.
                        </p>
                        <button
                            onClick={handlePopupClose}
                            className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition font-semibold"
                        >
                            Zur Startseite
                        </button>
                    </div>
                </div>
            )}

            <div className="w-full max-w-5xl mx-auto space-y-5">

                {current && (
                    <>
                        <h1 className="text-lg md:text-3xl text-center font-bold">
                            {current.title}
                        </h1>

                        <div className="grid grid-cols-2 gap-3 md:gap-5">
                            {current.options.map((item) => (
                                <div
                                    key={item.title}
                                    onClick={() =>
                                        handleOptionSelect(current, item.title)
                                    }
                                    className={cardStyle}
                                >
                                    <img
                                        src={item.img}
                                        className="w-20 h-20 md:w-32 md:h-32 mx-auto object-contain"
                                        alt=""
                                    />
                                    <h2 className="text-sm md:text-lg text-center mt-2">
                                        {item.title}
                                    </h2>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {step === 6 && (
                    <>
                        <h1 className="text-lg md:text-3xl text-center font-bold">
                            Wer soll das Angebot erhalten?
                        </h1>

                        <input
                            type="text"
                            placeholder="Name"
                            value={form.name}
                            onChange={(e) =>
                                setForm({ ...form, name: e.target.value })
                            }
                            className="w-full p-3 border rounded"
                        />

                        <button
                            onClick={() => setStep(7)}
                            className="w-full bg-green-600 text-white py-3 rounded"
                        >
                            Weiter
                        </button>
                    </>
                )}

                {step === 7 && (
                    <>
                        <h1 className="text-lg md:text-3xl text-center font-bold">
                            Postleitzahl
                        </h1>

                        <input
                            type="text"
                            placeholder="PLZ"
                            value={form.postcode}
                            onChange={(e) =>
                                setForm({ ...form, postcode: e.target.value })
                            }
                            className="w-full p-3 border rounded"
                        />

                        <button
                            onClick={() => setStep(8)}
                            className="w-full bg-green-600 text-white py-3 rounded"
                        >
                            Weiter
                        </button>
                    </>
                )}

                {step === 8 && (
                    <>
                        <h1 className="text-lg md:text-3xl text-center font-bold">
                            WhatsApp Nummer
                        </h1>

                        <input
                            type="text"
                            placeholder="Telefonnummer"
                            value={form.phone}
                            onChange={(e) =>
                                setForm({ ...form, phone: e.target.value })
                            }
                            className="w-full p-3 border rounded"
                        />

                        <button
                            onClick={handleSubmit}
                            disabled={loading}
                            className="w-full bg-green-700 text-white py-3 rounded disabled:opacity-60"
                        >
                            {loading ? "Wird gesendet..." : "Angebot erhalten"}
                        </button>

                        <p className="text-xs text-gray-500 text-center mt-2 leading-relaxed">
                            Mit dem Absenden dieses Formulars erklären Sie sich einverstanden, dass Ihre angegebenen personenbezogenen Daten (Name, Postleitzahl, Telefonnummer) zum Zweck der Angebotserstellung gemäß Art. 6 Abs. 1 lit. b DSGVO von uns verarbeitet und gespeichert werden. Ihre Daten werden nicht an Dritte weitergegeben. Sie können Ihre Einwilligung jederzeit widerrufen.
                        </p>
                    </>
                )}
            </div>
        </div>
    );
}

export default MultiStepForm;
