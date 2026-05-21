"use client";

import { useState } from "react";

const initialStatus = {
  type: "idle",
  message: "",
};

async function readResponseBody(response) {
  const text = await response.text();

  if (!text) {
    return {};
  }

  try {
    return JSON.parse(text);
  } catch {
    return {
      error:
        "The email service returned an unexpected response. Please try again.",
    };
  }
}

export default function ContactForm() {
  const [status, setStatus] = useState(initialStatus);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setIsSubmitting(true);
    setStatus(initialStatus);

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await readResponseBody(response);

      if (!response.ok) {
        throw new Error(data.error || "Unable to send inquiry.");
      }

      form.reset();
      setStatus({
        type: "success",
        message: data.message || "Your inquiry has been sent successfully.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.message || "Unable to send your inquiry. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/60"
      onSubmit={handleSubmit}
    >
      <div>
        <p className="text-xs font-black uppercase tracking-[0.22em] text-teal-700">
          Inquiry Form
        </p>

        <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
          Send Your Requirement
        </h2>

        <p className="mt-3 text-sm leading-7 text-slate-600">
          Please share your requirement related to pharmaceutical formulations,
          distributor association, institutional supply, or product
          documentation.
        </p>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-bold text-slate-700">
          Full Name
          <input
            className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-teal-700 focus:ring-4 focus:ring-teal-700/10"
            name="name"
            placeholder="Your name"
            required
            type="text"
          />
        </label>

        <label className="text-sm font-bold text-slate-700">
          Email Address
          <input
            className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-teal-700 focus:ring-4 focus:ring-teal-700/10"
            name="email"
            placeholder="you@example.com"
            required
            type="email"
          />
        </label>

        <label className="text-sm font-bold text-slate-700">
          Phone Number
          <input
            className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-teal-700 focus:ring-4 focus:ring-teal-700/10"
            name="phone"
            placeholder="+91"
            required
            type="tel"
          />
        </label>

        <label className="text-sm font-bold text-slate-700">
          Inquiry Type
          <select
            className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-teal-700 focus:ring-4 focus:ring-teal-700/10"
            name="type"
            defaultValue="Product availability"
            required
          >
            <option>Product availability</option>
            <option>Distributor partnership</option>
            <option>Institutional supply</option>
            <option>Product documentation</option>
            <option>General inquiry</option>
          </select>
        </label>
      </div>

      <label className="mt-5 block text-sm font-bold text-slate-700">
        Therapeutic Segment
        <select
          className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-teal-700 focus:ring-4 focus:ring-teal-700/10"
          name="segment"
          defaultValue="Orthopaedic Segment"
          required
        >
          <option>Orthopaedic Segment</option>
          <option>Gynaecology Segment</option>
          <option>General Medicine Segment</option>
          <option>Multiple Segments</option>
        </select>
      </label>

      <label className="mt-5 block text-sm font-bold text-slate-700">
        Message
        <textarea
          className="mt-2 min-h-40 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-teal-700 focus:ring-4 focus:ring-teal-700/10"
          name="message"
          placeholder="Please mention your product requirement, quantity, location, documentation needs, or partnership inquiry."
          required
        />
      </label>

      {status.message && (
        <div
          className={`mt-5 rounded-2xl border px-4 py-3 text-sm font-bold leading-6 ${
            status.type === "success"
              ? "border-teal-200 bg-teal-50 text-teal-800"
              : "border-red-200 bg-red-50 text-red-700"
          }`}
          role="status"
        >
          {status.message}
        </div>
      )}

      <button
        className="mt-6 inline-flex rounded-full bg-slate-950 px-7 py-3 text-sm font-black text-white shadow-lg transition hover:bg-teal-700 disabled:cursor-not-allowed disabled:bg-slate-400"
        disabled={isSubmitting}
        type="submit"
      >
        {isSubmitting ? "Sending..." : "Send Inquiry"}
      </button>
    </form>
  );
}
