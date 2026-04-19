import React from "react";
import logo from "../assets/logo.png";
import flashCardImage from "../assets/Copilot_20260416_000555.png";

const companyValues = [
    "Direkte Beratung",
    "Klare Angebote",
    "Deutschlandweiter Service",
];

const FlashCard = () => {
    return (
        <section id="company-card" className="relative scroll-mt-28 overflow-hidden bg-[#eef5ef] px-6 py-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(34,197,94,0.24),transparent_28%),radial-gradient(circle_at_85%_10%,rgba(14,165,233,0.18),transparent_24%),linear-gradient(135deg,#eef5ef_0%,#ffffff_48%,#e8f2eb_100%)]" />

            <div className="relative mx-auto max-w-6xl">
                <div className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/75 p-6 shadow-2xl shadow-green-950/10 backdrop-blur-xl md:p-10">
                    <div className="absolute right-[-80px] top-[-100px] h-72 w-72 rounded-full bg-green-200/70 blur-3xl" />
                    <div className="absolute bottom-[-120px] left-[-80px] h-72 w-72 rounded-full bg-sky-200/60 blur-3xl" />

                    <div className="relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                        <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-xl shadow-slate-900/20">
                            <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg">
                                <img
                                    src={flashCardImage}
                                    alt="Modernes Dachfenster"
                                    className="h-56 w-full object-cover"
                                />
                                <div className="absolute left-4 top-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/90 p-3 shadow-lg backdrop-blur">
                                    <img
                                        src={logo}
                                        alt="Dachfenster-24 Logo"
                                        className="h-full w-full object-contain"
                                    />
                                </div>
                            </div>

                            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.35em] text-green-300">
                                Firmenkarte
                            </p>

                            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
                                Dachfenster-24
                            </h2>

                            <p className="mt-5 text-lg leading-8 text-slate-300">
                                Ihr Ansprechpartner fuer moderne Dachfenster, Planung und unverbindliche Angebotsanfragen.
                            </p>

                            <div className="mt-8 h-px bg-white/10" />

                            <div className="mt-8 space-y-3 text-sm text-slate-300">
                                <p>Service fuer Neubau, Austausch und Modernisierung</p>
                                <p>Kontakt per Anfrageformular oder WhatsApp-Rueckmeldung</p>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="mb-5 inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-800">
                                Unabhaengig vom Produktbereich
                            </div>

                            <h3 className="max-w-3xl text-4xl font-black leading-tight text-slate-950 md:text-6xl">
                                Eine klare Firma. Ein einfacher Weg zum passenden Angebot.
                            </h3>

                            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                                Diese Karte stellt das Unternehmen vor, nicht einzelne Produkte. Sie zeigt Besuchern sofort, wofuer Dachfenster-24 steht: schnelle Orientierung, transparente Kommunikation und eine einfache Anfrage.
                            </p>

                            <div className="mt-8 grid gap-4 sm:grid-cols-3">
                                {companyValues.map((value) => (
                                    <div
                                        key={value}
                                        className="rounded-2xl border border-green-100 bg-white p-5 font-bold text-slate-800 shadow-sm"
                                    >
                                        {value}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                                <a
                                    href="#multi-step-form"
                                    className="rounded-full bg-slate-950 px-7 py-4 text-center font-bold text-white shadow-xl shadow-slate-900/20 transition hover:-translate-y-1 hover:bg-green-700"
                                >
                                    Anfrage starten
                                </a>
                                <span className="text-sm font-semibold text-slate-500">
                                    Kostenlos und unverbindlich.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FlashCard;
