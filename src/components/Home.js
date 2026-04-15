import { useState } from "react";

function Home() {
    const [step, setStep] = useState(1);

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="max-w-7xl w-full bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2">

                {/* LEFT SIDE - IMAGE SLIDER */}
                <div className="bg-gray-200 h-[500px] flex items-center justify-center">
                    <img
                        src="https://via.placeholder.com/600x500"
                        alt="Slider"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* RIGHT SIDE - FORM */}
                <div className="p-8 flex flex-col justify-center">

                    {step === 1 && (
                        <>
                            <h2 className="text-3xl font-bold mb-6">
                                Welche Art von Immobilie haben Sie?
                            </h2>

                            <div className="grid gap-4">
                                <button
                                    onClick={() => setStep(2)}
                                    className="bg-gray-100 p-4 rounded-lg hover:bg-green-500 hover:text-white transition"
                                >
                                    Haus
                                </button>

                                <button
                                    onClick={() => setStep(2)}
                                    className="bg-gray-100 p-4 rounded-lg hover:bg-green-500 hover:text-white transition"
                                >
                                    Wohnung
                                </button>
                            </div>
                        </>
                    )}

                    {step === 2 && (
                        <>
                            <h2 className="text-3xl font-bold mb-6">
                                Welche Dachform haben Sie?
                            </h2>

                            <div className="grid gap-4">
                                <button
                                    onClick={() => setStep(3)}
                                    className="bg-gray-100 p-4 rounded-lg hover:bg-green-500 hover:text-white transition"
                                >
                                    Flachdach
                                </button>

                                <button
                                    onClick={() => setStep(3)}
                                    className="bg-gray-100 p-4 rounded-lg hover:bg-green-500 hover:text-white transition"
                                >
                                    Spitzdach
                                </button>
                            </div>
                        </>
                    )}

                    {step === 3 && (
                        <>
                            <h2 className="text-3xl font-bold mb-6">
                                Ihre Kontaktdaten
                            </h2>

                            <div className="grid gap-4">
                                <input placeholder="Vorname" className="border p-3 rounded-lg" />
                                <input placeholder="Nachname" className="border p-3 rounded-lg" />
                                <input placeholder="E-Mail" className="border p-3 rounded-lg" />
                                <input placeholder="Telefonnummer" className="border p-3 rounded-lg" />

                                <button className="bg-green-500 text-white p-4 rounded-lg hover:bg-green-600">
                                    Absenden
                                </button>
                            </div>
                        </>
                    )}

                </div>
            </div>
        </div>
    );
}

export default Home;