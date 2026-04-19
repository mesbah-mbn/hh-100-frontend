import React, { useState } from "react";

const ContactForm = () => {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        postcode: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

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
                setForm({
                    name: "",
                    phone: "",
                    email: "",
                    postcode: "",
                    message: "",
                });
            } else {
                alert("Fehler beim Senden.");
            }
        } catch (error) {
            console.error(error);
            alert("Serverfehler.");
        }
    };

    return (
        <div id="contact" className="scroll-mt-28 py-20 px-6">
            <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg">

                <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
                    Kostenloses Angebot anfordern
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">

                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={form.name}
                        className="w-full p-3 rounded-xl border"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="phone"
                        placeholder="Telefonnummer"
                        value={form.phone}
                        className="w-full p-3 rounded-xl border"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="E-Mail"
                        value={form.email}
                        className="w-full p-3 rounded-xl border"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="postcode"
                        placeholder="Postleitzahl"
                        value={form.postcode}
                        className="w-full p-3 rounded-xl border"
                        onChange={handleChange}
                        required
                    />

                    <textarea
                        name="message"
                        placeholder="Ihre Nachricht"
                        value={form.message}
                        className="w-full p-3 rounded-xl border"
                        rows="4"
                        onChange={handleChange}
                    ></textarea>

                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition"
                    >
                        Anfrage senden
                    </button>

                </form>
            </div>
        </div>
    );
};

export default ContactForm;
