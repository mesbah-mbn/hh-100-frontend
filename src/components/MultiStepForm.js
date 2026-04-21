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

/* CARD STYLE */
const cardStyle =
    "bg-white p-3 md:p-5 rounded-xl cursor-pointer shadow-md hover:scale-105 transition";

/* STEPS */
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
            .map(
                (s) =>
                    `${s.label}: ${projectDetails[s.field] || "Nicht angegeben"}`
            )
            .join("\n");

        try {
            const res = await fetch(
                "https://hh-100.onrender.com/api/leads/",
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

            if (res.ok) alert("Erfolgreich gesendet!");
            else alert("Fehler.");
        } catch {
            alert("Serverfehler.");
        }
    };

    const current = optionSteps[step];

    return (
        /* ✅ PERFECT CENTER FIX */
        <div className="min-h-screen flex flex-col justify-center px-4">

            <div className="w-full max-w-5xl mx-auto space-y-5">

                {/* STEPS */}
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

                {/* STEP 6 */}
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

                {/* STEP 7 */}
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

                {/* STEP 8 */}
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
                            className="w-full bg-green-700 text-white py-3 rounded"
                        >
                            Angebot erhalten
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

export default MultiStepForm;