"use client";

import React, { useState } from "react";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setMessage(null);
    if (!email) {
      setError("Please enter your email.");
      return;
    }
    try {
      console.log("Requesting password reset for", email);
      // TODO: replace with actual API call
      // await fetch('/api/forgot-password', { method: 'POST', body: JSON.stringify({ email }) });
      setMessage("If an account with that email exists, you will receive reset instructions shortly.");
    } catch (err) {
      setError("Request failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-md w-full space-y-4"
      >
        {message && <p className="text-green-500 text-sm">{message}</p>}
        {error && <p className="text-red-500 text-sm">{error}</p>}

        <div>
          <label htmlFor="forgot-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Email Address
          </label>
          <input
            id="forgot-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 px-3 py-2 focus:outline-none"
            placeholder="you@example.com"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Reset Password
        </button>

        <p className="text-sm text-center text-gray-600 dark:text-gray-400">
          Remembered?{' '}
          <a href="/login" className="text-indigo-600 dark:text-indigo-400 hover:underline">
            Log In
          </a>
        </p>
      </form>
    </div>
  );
}