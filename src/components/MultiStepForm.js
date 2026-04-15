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

import bgImage from "../assets/roof-bg.jpg";

function MultiStepForm() {
    const [step, setStep] = useState(1);

    const [form, setForm] = useState({
        name: "",
        postcode: "",
        phone: "",
    });

    const handleSubmit = async () => {
        try {
            const response = await fetch("https://hh-100.onrender.com/api/leads/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
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

    const cardStyle =
        "bg-white p-8 rounded-xl cursor-pointer shadow-lg hover:scale-105 transition";

    return (
        <div
            id="multi-step-form"
            className="min-h-screen bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="w-full max-w-6xl px-6 py-12">

                {/* STEP 1 */}
                {step === 1 && (
                    <>
                        <h1 className="text-4xl font-bold text-center mb-6">
                            Sind die Fenster für einen Neubau oder Austausch?
                        </h1>

                        <div className="flex justify-center gap-8">
                            <div onClick={() => setStep(2)} className={cardStyle}>
                                <img src={neubau} className="w-40 h-40 mx-auto" alt="" />
                                <h2 className="text-xl text-center mt-4">Neubau</h2>
                            </div>

                            <div onClick={() => setStep(2)} className={cardStyle}>
                                <img src={austausch} className="w-40 h-40 mx-auto" alt="" />
                                <h2 className="text-xl text-center mt-4">Austausch</h2>
                            </div>
                        </div>
                    </>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                    <>
                        <h1 className="text-4xl text-center mb-6">
                            Welche Dachform hat das Gebäude?
                        </h1>

                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { img: satteldach, title: "Satteldach" },
                                { img: walmdach, title: "Walmdach" },
                                { img: flachdach, title: "Flachdach" },
                                { img: unklarRoof, title: "Unklar" },
                            ].map((item, i) => (
                                <div key={i} onClick={() => setStep(3)} className={cardStyle}>
                                    <img src={item.img} className="w-32 h-32 mx-auto" alt="" />
                                    <h2 className="text-xl text-center mt-4">
                                        {item.title}
                                    </h2>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {/* STEP 3 */}
                {step === 3 && (
                    <>
                        <h1 className="text-4xl text-center mb-6">
                            Um wie viele Fenster handelt es sich?
                        </h1>

                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { img: oneTwo, title: "1 - 2 Fenster" },
                                { img: threeFive, title: "3 - 5 Fenster" },
                                { img: moreFive, title: "Über 5 Fenster" },
                                { img: unclearWindow, title: "Unklar" },
                            ].map((item, i) => (
                                <div key={i} onClick={() => setStep(4)} className={cardStyle}>
                                    <img src={item.img} className="w-32 h-32 mx-auto" alt="" />
                                    <h2 className="text-xl text-center mt-4">
                                        {item.title}
                                    </h2>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {/* STEP 4 */}
                {step === 4 && (
                    <>
                        <h1 className="text-4xl text-center mb-6">
                            Sollen zusätzlich Rolläden angebracht werden?
                        </h1>

                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { img: ja, title: "Ja" },
                                { img: nein, title: "Nein" },
                                { img: unclearBuilding, title: "Unklar" },
                            ].map((item, i) => (
                                <div key={i} onClick={() => setStep(5)} className={cardStyle}>
                                    <img src={item.img} className="w-32 h-32 mx-auto" alt="" />
                                    <h2 className="text-xl text-center mt-4">
                                        {item.title}
                                    </h2>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {/* STEP 5 */}
                {step === 5 && (
                    <>
                        <h1 className="text-4xl text-center mb-6">
                            Wann möchten Sie Ihre neuen Dachfenster haben?
                        </h1>

                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { img: asap, title: "Schnellstmöglich" },
                                { img: threeMonth, title: "In 3 Monaten" },
                                { img: sixMonth, title: "In 6 Monaten" },
                                { img: unclearTime, title: "Unklar" },
                            ].map((item, i) => (
                                <div key={i} onClick={() => setStep(6)} className={cardStyle}>
                                    <img src={item.img} className="w-32 h-32 mx-auto" alt="" />
                                    <h2 className="text-xl text-center mt-4">
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
                        <h1 className="text-4xl text-center mb-6">
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

                {/* STEP 7 */}
                {step === 7 && (
                    <>
                        <h1 className="text-4xl text-center mb-6">
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

                {/* STEP 8 */}
                {step === 8 && (
                    <>
                        <h1 className="text-4xl text-center mb-6">
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
                                Datenschutzerklärung
                            </a>
                        </p>
                    </>
                )}
            </div>
        </div>
    );
}

export default MultiStepForm;