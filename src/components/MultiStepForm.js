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
    "bg-white p-6 md:p-8 rounded-xl cursor-pointer shadow-lg hover:scale-105 transition";

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
        label: "Anzahl der Fenster",
        title: "Um wie viele Fenster handelt es sich?",
        nextStep: 4,
        options: [
            { img: oneTwo, title: "1 - 2 Fenster" },
            { img: threeFive, title: "3 - 5 Fenster" },
            { img: moreFive, title: "Über 5 Fenster" },
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
        label: "Gewünschter Zeitraum",
        title: "Wann möchten Sie Ihre neuen Dachfenster haben?",
        nextStep: 6,
        options: [
            { img: asap, title: "Schnellstmöglich" },
            { img: threeMonth, title: "In 1-3 Monaten" },
            { img: sixMonth, title: "In 3-6 Monaten" },
            { img: unclearTime, title: "Unklar" },
        ],
    },
};

function MultiStepForm() {
    const [step, setStep] = useState(1);
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
        const message = Object.values(optionSteps)
            .map((optionStep) => `${optionStep.label}: ${projectDetails[optionStep.field] || "Nicht angegeben"}`)
            .join("\n");

        try {
            const response = await fetch("https://hh-100.onrender.com/api/leads/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...form,
                    product: "Dachfenster Anfrage",
                    message,
                }),
            });

            if (response.ok) {
                alert("Ihre Anfrage wurde erfolgreich gesendet!");
            } else {
                alert("Fehler beim Senden.");
            }
        } catch (error) {
            alert("Serverfehler.");
        }
    };

    const currentOptionStep = optionSteps[step];

    return (
        <div
            id="multi-step-form"
            className="min-h-screen scroll-mt-56 bg-cover bg-center flex items-start justify-center pt-56 pb-12 md:scroll-mt-28 md:items-center md:pt-28"
        >
            <div className="w-full max-w-6xl px-6 py-8 md:py-12">
                {currentOptionStep && (
                    <>
                        <h1 className="text-3xl font-bold text-center mb-6 md:text-4xl">
                            {currentOptionStep.title}
                        </h1>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {currentOptionStep.options.map((item) => (
                                <div
                                    key={item.title}
                                    onClick={() => handleOptionSelect(currentOptionStep, item.title)}
                                    className={cardStyle}
                                >
                                    <img
                                        src={item.img}
                                        className="w-32 h-32 md:w-40 md:h-40 mx-auto object-contain"
                                        alt={item.title}
                                    />
                                    <h2 className="text-xl text-center mt-4">
                                        {item.title}
                                    </h2>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {step === 6 && (
                    <>
                        <h1 className="text-3xl text-center mb-6 md:text-4xl">
                            Wer soll das Angebot erhalten?
                        </h1>

                        <input
                            type="text"
                            placeholder="Name"
                            value={form.name}
                            onChange={(e) =>
                                setForm({ ...form, name: e.target.value })
                            }
                            className="w-full p-4 border rounded-lg mb-4"
                        />

                        <button
                            onClick={() => setStep(7)}
                            className="w-full bg-green-700 text-white py-4 rounded-lg"
                        >
                            Weiter
                        </button>
                    </>
                )}

                {step === 7 && (
                    <>
                        <h1 className="text-3xl text-center mb-6 md:text-4xl">
                            Wo brauchen Sie die neuen Dachfenster?
                        </h1>

                        <input
                            type="text"
                            placeholder="Postleitzahl"
                            value={form.postcode}
                            onChange={(e) =>
                                setForm({ ...form, postcode: e.target.value })
                            }
                            className="w-full p-4 border rounded-lg mb-4"
                        />

                        <button
                            onClick={() => setStep(8)}
                            className="w-full bg-green-700 text-white py-4 rounded-lg"
                        >
                            Weiter
                        </button>
                    </>
                )}

                {step === 8 && (
                    <>
                        <h1 className="text-3xl text-center mb-6 md:text-4xl">
                            Auf welche WhatsApp-Nummer dürfen wir Ihnen Ihr persönliches Angebot senden?
                        </h1>

                        <input
                            type="text"
                            placeholder="Handynummer"
                            value={form.phone}
                            onChange={(e) =>
                                setForm({ ...form, phone: e.target.value })
                            }
                            className="w-full p-4 border rounded-lg mb-4"
                        />

                        <button
                            onClick={handleSubmit}
                            className="w-full bg-green-700 text-white py-4 rounded-lg"
                        >
                            Jetzt Angebot erhalten
                        </button>

                        <p className="text-center mt-6">
                            <a
                                href="/datenschutz"
                                className="text-blue-600 underline"
                            >
                                Mit dem Absenden meiner Anfrage bestätige ich, dass ich die Datenschutzerklärung zur Kenntnis genommen habe.
                            </a>
                        </p>
                    </>
                )}
            </div>
        </div>
    );
}

export default MultiStepForm;
