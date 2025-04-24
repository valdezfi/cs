"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Basic validation example
    if (!name || !email || !message) {
      setError("Please fill in all fields.");
      return;
    }

    // TODO: Replace with your form submission API call
    try {
      console.log("Sending message with", { name, email, message });
      // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify({ name, email, message }) });
      alert("Message sent successfully");
    } catch (err) {
      setError("Message submission failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-md w-full space-y-4"
      >
        {error && <p className="text-red-500 text-sm">{error}</p>}
        
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 px-3 py-2 focus:outline-none"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 px-3 py-2 focus:outline-none"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 px-3 py-2 focus:outline-none"
            placeholder="Your message"
            rows={4}
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
