"use client";
import { Mail } from "lucide-react";

export default function FeedbackPage() {
  const email = "info@grandeapp.com";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-neutral-950 text-white px-6">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold tracking-tight mb-3 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Contact GrandeApp
        </h1>
        <p className="text-gray-400 max-w-lg mx-auto text-lg">
          We’d love to hear from you — whether it’s feedback, enterprise collaboration,
          or technical support. Our team usually responds within 24 hours.
        </p>
      </div>

      {/* Card */}
      <div className="p-10 rounded-3xl border border-zinc-800 bg-zinc-900/70 backdrop-blur-md shadow-lg hover:shadow-blue-500/10 transition-all duration-300 w-full max-w-md text-center">
        <div className="mx-auto w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6">
          <Mail className="w-8 h-8 text-blue-400" />
        </div>

        <h2 className="text-2xl font-semibold mb-3 text-white">Enterprise Contact</h2>
        <p className="text-gray-400 mb-6">
          For all inquiries, feedback, or partnerships, please reach us at:
        </p>

        <a
          href={`mailto:${email}`}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-xl text-lg transition-all focus:ring-4 focus:ring-blue-500/30"
        >
          ✉️ {email}
        </a>

        <p className="text-gray-500 text-sm mt-6">
          GrandeApp • AI-Powered Collaboration • {new Date().getFullYear()}
        </p>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-gray-600 text-xs">
        © {new Date().getFullYear()} GrandeApp. All rights reserved.
      </footer>
    </div>
  );
}
