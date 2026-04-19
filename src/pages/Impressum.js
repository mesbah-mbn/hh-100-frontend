import React from "react";

const Impressum = () => {
    return (
        <main className="flex min-h-screen items-start justify-center bg-gray-50 px-6 pb-16 pt-56 md:pt-36">
            <section className="mx-auto max-w-3xl rounded-3xl bg-white p-8 text-center text-gray-800 shadow-xl md:p-10">
                <h1 className="mb-8 text-3xl font-bold md:text-4xl">Impressum</h1>

                <div className="space-y-8 text-base leading-8 md:text-lg">
                    <div>
                        <p>
                            <strong>Dachfenster-24.de</strong><br />
                            Inhaber: Camim Hamid<br />
                            Eisenbahnstraße 15<br />
                            15517 Fürstenwalde/Spree<br />
                            Deutschland
                        </p>
                    </div>

                    <div>
                        <h2 className="mb-2 text-xl font-semibold">Kontakt</h2>
                        <p>
                            Telefon: 01608503124<br />
                            E-Mail: hamid.camim@icloud.com
                        </p>
                    </div>

                    <div>
                        <h2 className="mb-2 text-xl font-semibold">Streitschlichtung</h2>
                        <p>
                            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
                            vor einer Verbraucherschlichtungsstelle teilzunehmen.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Impressum;
