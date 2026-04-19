import React from "react";

const benefits = [
    {
        title: "Persönliche Beratung",
        text: "Wir prüfen Ihre Situation individuell und empfehlen passende Dachfenster, Rollläden und Zubehör.",
    },
    {
        title: "Saubere Montage",
        text: "Unsere Partner achten auf eine fachgerechte Umsetzung, klare Terminabsprachen und ein ordentliches Ergebnis.",
    },
    {
        title: "Mehr Licht im Dachgeschoss",
        text: "Moderne Dachfenster verbessern Tageslicht, Lüftung und Wohnkomfort in bisher dunklen Räumen.",
    },
];

const steps = [
    "Anfrage in wenigen Minuten ausfüllen",
    "Projektangaben werden geprüft",
    "Persönliches Angebot erhalten",
    "Termin für Beratung oder Montage abstimmen",
];

const faqs = [
    {
        question: "Welche Angaben werden für ein Angebot benötigt?",
        answer: "Für eine erste Einschätzung reichen Dachform, Anzahl der Fenster, gewünschter Zeitraum, Postleitzahl und Kontaktdaten.",
    },
    {
        question: "Kann ich auch nur ein einzelnes Dachfenster anfragen?",
        answer: "Ja. Sie können sowohl einzelne Dachfenster als auch mehrere Fenster für Neubau oder Austausch anfragen.",
    },
    {
        question: "Sind Rollläden oder Sonnenschutz möglich?",
        answer: "Ja. Auf Wunsch können passende Rollläden, Sonnenschutzlösungen oder weiteres Zubehör berücksichtigt werden.",
    },
];

const WebsiteContext = () => {
    return (
        <section id="website-info" className="scroll-mt-28 bg-slate-950 text-white py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
                    <div>
                        <p className="text-green-400 font-semibold uppercase tracking-[0.25em] text-sm mb-4">
                            Dachfenster-24
                        </p>
                        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                            Neue Dachfenster einfach planen und ein passendes Angebot erhalten.
                        </h2>
                        <p className="text-slate-300 text-lg leading-8 mb-8">
                            Ob Austausch, Neubau oder Modernisierung: Wir helfen Ihnen, die richtige Lösung für Ihr Dachgeschoss zu finden. Über das Anfrageformular erfassen wir die wichtigsten Projektdaten und melden uns mit einer passenden Einschätzung.
                        </p>

                        <div className="grid md:grid-cols-3 gap-5">
                            {benefits.map((item) => (
                                <div
                                    key={item.title}
                                    className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-xl shadow-black/10"
                                >
                                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                                    <p className="text-slate-300 leading-7">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-3xl bg-white text-slate-900 p-6 md:p-8 shadow-2xl">
                        <h3 className="text-2xl font-bold mb-6">So läuft Ihre Anfrage ab</h3>
                        <div className="space-y-4 mb-8">
                            {steps.map((step, index) => (
                                <div key={step} className="flex gap-4 items-start">
                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-600 text-white font-bold">
                                        {index + 1}
                                    </span>
                                    <p className="pt-1 text-slate-700">{step}</p>
                                </div>
                            ))}
                        </div>

                        <div className="rounded-2xl bg-green-50 border border-green-100 p-5">
                            <h4 className="font-bold text-green-800 mb-2">Kostenlose Erstberatung</h4>
                            <p className="text-green-900 leading-7">
                                Ihre Anfrage ist unverbindlich. Nach dem Absenden erhalten Sie eine Rückmeldung mit den nächsten Schritten.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-16">
                    <h3 className="text-2xl md:text-3xl font-bold mb-6">Häufige Fragen</h3>
                    <div className="grid md:grid-cols-3 gap-5">
                        {faqs.map((item) => (
                            <article
                                key={item.question}
                                className="rounded-2xl bg-white/10 border border-white/10 p-6"
                            >
                                <h4 className="font-semibold text-lg mb-3">{item.question}</h4>
                                <p className="text-slate-300 leading-7">{item.answer}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WebsiteContext;
