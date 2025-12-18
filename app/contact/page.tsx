"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventType: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just log formData. Later we can integrate email service
    console.log("Form submitted:", formData);
    alert("Thank you! We will contact you soon.");
    setFormData({ name: "", email: "", eventType: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-start py-24 px-6 md:px-16">
      {/* Intro */}
      <section className="text-center max-w-2xl mb-16">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
          Let’s Talk About Your Story
        </h1>
        <p className="text-lg md:text-xl text-zinc-300">
          Share your vision with us. We’ll craft memories that last a lifetime.
        </p>
      </section>

      {/* Quick Contact Buttons */}
      <section className="flex flex-col md:flex-row gap-6 mb-16">
        <a
          href="https://wa.me/YOUR_NUMBER"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-full text-lg font-semibold transition"
        >
          WhatsApp
        </a>
        <a
          href="tel:+91YOUR_NUMBER"
          className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full text-lg font-semibold transition"
        >
          Call Us
        </a>
        <a
          href="mailto:hello@artisticstudio.com"
          className="bg-gray-700 hover:bg-gray-800 px-8 py-4 rounded-full text-lg font-semibold transition"
        >
          Email
        </a>
      </section>

      {/* Inquiry Form */}
      <section className="w-full max-w-xl bg-zinc-900 p-8 rounded-xl shadow-lg">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-4 rounded-lg bg-zinc-800 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Email or Phone"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-4 rounded-lg bg-zinc-800 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <select
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            required
            className="p-4 rounded-lg bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-white"
          >
            <option value="" disabled>
              Select Event Type
            </option>
            <option value="Wedding">Wedding</option>
            <option value="Pre-Wedding">Pre-Wedding</option>
          </select>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="p-4 rounded-lg bg-zinc-800 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            className="bg-white text-black font-semibold px-6 py-4 rounded-full hover:bg-zinc-200 transition"
          >
            Submit
          </button>
        </form>
      </section>

      {/* Footer Reassurance */}
      <section className="mt-12 text-center text-zinc-500">
        We respond within 24 hours. No spam, no pressure.
      </section>
    </div>
  );
}
