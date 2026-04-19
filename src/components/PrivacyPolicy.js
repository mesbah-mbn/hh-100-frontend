import React from "react";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-20 px-6">
            <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-10">
                <h1 className="text-4xl font-bold mb-8 text-center">
                    Datenschutzerklärung
                </h1>

                <div className="space-y-8 text-gray-700 leading-8">
                    <div>
                        <h2 className="text-2xl font-semibold mb-3">
                            1. Verantwortlicher
                        </h2>
                        <p>
                            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
                        </p>
                        <p className="mt-2">
                            <strong>Camim Hamid</strong><br />
                            15517 Fürstenwalde<br />
                            E-Mail: hamid.camim@icloud.com<br />
                            Telefon: +491608503124
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-3">
                            2. Welche Daten wir erheben
                        </h2>

                        <h3 className="text-xl font-semibold mt-2 mb-1">
                            2.1 Daten, die Sie uns mitteilen
                        </h3>
                        <p>
                            Wir verarbeiten personenbezogene Daten, die Sie uns aktiv übermitteln,
                            zum Beispiel:
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>Name</li>
                            <li>E-Mail-Adresse</li>
                            <li>Telefonnummer</li>
                            <li>Adresse, falls für die Leistungserbringung erforderlich</li>
                            <li>Nachrichten, die Sie über Kontaktformulare senden</li>
                        </ul>

                        <h3 className="text-xl font-semibold mt-4 mb-1">
                            2.2 Automatisch erhobene Daten
                        </h3>
                        <p>
                            Beim Besuch unserer Website werden automatisch technische Daten erfasst,
                            die Ihr Browser übermittelt, zum Beispiel:
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>IP-Adresse</li>
                            <li>Browsertyp und Browserversion</li>
                            <li>Verwendetes Betriebssystem</li>
                            <li>Referrer URL</li>
                            <li>Datum und Uhrzeit der Serveranfrage</li>
                        </ul>
                        <p className="mt-2">
                            Diese Daten sind für den sicheren und stabilen Betrieb der Website erforderlich.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-3">
                            3. Zweck der Datenverarbeitung
                        </h2>
                        <p>Wir verarbeiten Ihre Daten zu folgenden Zwecken:</p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>Beantwortung von Kontaktanfragen</li>
                            <li>Bereitstellung und Verbesserung unserer Leistungen</li>
                            <li>Sicherstellung des technischen Betriebs und der Sicherheit der Website</li>
                            <li>Erfüllung gesetzlicher Pflichten</li>
                            <li>Analyse der Nutzung der Website, nur mit Einwilligung</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-3">
                            4. Rechtsgrundlagen der Verarbeitung
                        </h2>
                        <p>
                            Die Verarbeitung Ihrer personenbezogenen Daten erfolgt auf Basis der
                            folgenden Rechtsgrundlagen gemäß Art. 6 DSGVO:
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>Art. 6 Abs. 1 lit. a DSGVO - Einwilligung</li>
                            <li>Art. 6 Abs. 1 lit. b DSGVO - Vertragserfüllung oder vorvertragliche Maßnahmen</li>
                            <li>Art. 6 Abs. 1 lit. c DSGVO - Erfüllung rechtlicher Verpflichtungen</li>
                            <li>Art. 6 Abs. 1 lit. f DSGVO - berechtigte Interessen</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-3">
                            5. Cookies und Tracking-Technologien
                        </h2>
                        <p>
                            Wir verwenden Cookies, um unsere Website nutzerfreundlich zu gestalten.
                            Technisch notwendige Cookies werden ohne Einwilligung gesetzt. Alle anderen
                            Cookies, zum Beispiel für Statistik oder Marketing, werden nur mit Ihrer
                            ausdrücklichen Einwilligung gesetzt.
                        </p>
                        <p className="mt-2">
                            Sie können Ihre Einwilligung jederzeit über die Cookie-Einstellungen
                            auf dieser Website widerrufen.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-3">
                            6. Speicherdauer
                        </h2>
                        <p>
                            Wir speichern personenbezogene Daten nur so lange, wie es für die jeweiligen
                            Zwecke erforderlich ist oder wir gesetzlich dazu verpflichtet sind.
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>Kontaktanfragen: bis zur abschließenden Bearbeitung</li>
                            <li>Vertrags- und Kundendaten: gemäß gesetzlichen Aufbewahrungsfristen, in der Regel 6-10 Jahre</li>
                            <li>Server-Logdaten: in der Regel 7-30 Tage</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-3">
                            7. Weitergabe von Daten an Dritte
                        </h2>
                        <p>
                            Eine Weitergabe Ihrer personenbezogenen Daten an Dritte erfolgt nur,
                            wenn dies zur Erfüllung unserer Leistungen erforderlich ist,
                            wir gesetzlich dazu verpflichtet sind oder Sie eingewilligt haben.
                        </p>
                        <p className="mt-2">
                            Mögliche Empfänger sind zum Beispiel:
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>Hosting-Provider</li>
                            <li>E-Mail-Dienstleister</li>
                            <li>Analyse- oder Tracking-Dienstleister, nur mit Einwilligung</li>
                            <li>Zahlungsdienstleister, falls relevant</li>
                        </ul>
                        <p className="mt-2">
                            Eine Weitergabe an Dritte zu Werbezwecken ohne Ihre Einwilligung erfolgt nicht.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-3">
                            8. Ihre Rechte
                        </h2>
                        <p>
                            Sie haben im Rahmen der geltenden Datenschutzgesetze folgende Rechte
                            hinsichtlich Ihrer personenbezogenen Daten:
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>Recht auf Auskunft, Art. 15 DSGVO</li>
                            <li>Recht auf Berichtigung, Art. 16 DSGVO</li>
                            <li>Recht auf Löschung, Art. 17 DSGVO</li>
                            <li>Recht auf Einschränkung der Verarbeitung, Art. 18 DSGVO</li>
                            <li>Recht auf Datenübertragbarkeit, Art. 20 DSGVO</li>
                            <li>Recht auf Widerspruch, Art. 21 DSGVO</li>
                            <li>Recht auf Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft</li>
                        </ul>
                        <p className="mt-2">
                            Außerdem haben Sie das Recht, sich bei einer zuständigen
                            Datenschutzaufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind,
                            dass die Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO verstößt.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-3">
                            9. Datensicherheit
                        </h2>
                        <p>
                            Wir treffen geeignete technische und organisatorische Maßnahmen,
                            um Ihre personenbezogenen Daten vor Verlust, Missbrauch,
                            unbefugtem Zugriff oder Offenlegung zu schützen.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-3">
                            10. Änderungen dieser Datenschutzerklärung
                        </h2>
                        <p>
                            Wir behalten uns vor, diese Datenschutzerklärung anzupassen,
                            damit sie stets den aktuellen rechtlichen Anforderungen entspricht
                            oder um Änderungen unserer Leistungen in der Datenschutzerklärung
                            umzusetzen. Die jeweils aktuelle Version ist auf dieser Website abrufbar.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
