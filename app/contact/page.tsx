"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    event: "",
    date: "",
    city: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you. We will get back to you shortly.");
    setFormData({
      name: "",
      phone: "",
      event: "",
      date: "",
      city: "",
      message: "",
    });
  };

  return (
    <main className="bg-white text-black font-[Times_New_Roman]">

      {/* HERO IMAGE */}
      <section className="w-full">
        <img
          src="/images/pre-hero.jpg"
          alt="Contact Hero"
          className="w-full h-screen object-cover"
        />
      </section>

      {/* INTRO TEXT */}
      <section className="max-w-3xl mx-auto text-center px-6 py-24">
        <p className="text-lg leading-8">
          Please fill in the form and provide all the essential details to help us
          create the best and accurate quote.
        </p>
        <p className="text-lg mt-4">
          We will try to reach out within 24 hours. If it’s urgent, please call us
          directly.
        </p>
      </section>

      {/* CONTACT INFO */}
      <section className="max-w-4xl mx-auto text-center px-6 py-16 space-y-16">

        <div>
          <h2 className="text-3xl tracking-widest mb-6">CONTACT US</h2>
          <p className="text-lg">Mail: hello@storiesbyrg.com</p>
          <p className="text-lg mt-2">Call: +91 93536 24245</p>
        </div>

        <div>
          <h2 className="text-3xl tracking-widest mb-6">MEET US</h2>
          <p className="text-lg leading-8 max-w-3xl mx-auto">
            Head office: First Floor, No: 12/1-1, Palace Cross Rd, Military
            Compound, Jayamahal, Bengaluru, Karnataka 560020
          </p>
          <p className="text-lg leading-8 mt-4 max-w-3xl mx-auto">
            Branch office: 92 Huda Heights Road, Lane No.12, MLA Colony,
            Banjara Hills, Hyderabad, Telangana 500028
          </p>
        </div>

      </section>

      {/* FORM HEADING */}
      <section className="text-center px-6 py-20">
        <h2 className="text-3xl tracking-widest mb-6">
          SERVICES INQUIRY FORM
        </h2>
        <p className="text-lg max-w-2xl mx-auto">
          Thank you for your interest in our photography services. Please fill
          out the form below, and we will get back to you as soon as possible.
        </p>
      </section>

      {/* FORM BOX */}
      <section className="flex justify-center px-6 pb-40">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl bg-[#f2f2f2] rounded-2xl p-12 space-y-8"
        >
          <input
            type="text"
            name="name"
            placeholder="Name*"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-full px-6 py-4 outline-none"
          />

          <div className="flex gap-4">
            <select className="rounded-full px-5 py-4 outline-none">
              <option>+91</option>
            </select>
            <input
              type="text"
              name="phone"
              placeholder="Your Number*"
              required
              value={formData.phone}
              onChange={handleChange}
              className="flex-1 rounded-full px-6 py-4 outline-none"
            />
          </div>

          <input
            type="text"
            name="event"
            placeholder="Event"
            value={formData.event}
            onChange={handleChange}
            className="w-full rounded-full px-6 py-4 outline-none"
          />

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full rounded-full px-6 py-4 outline-none"
          />

          <input
            type="text"
            name="city"
            placeholder="City*"
            value={formData.city}
            onChange={handleChange}
            className="w-full rounded-full px-6 py-4 outline-none"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-2xl px-6 py-4 outline-none resize-none"
          />

          <button
            type="submit"
            className="block mx-auto bg-black text-white px-20 py-4 mt-6"
          >
            Submit
          </button>
        </form>
      </section>
      
    </main>
  );
}
