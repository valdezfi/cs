"use client";
import { Mail } from "lucide-react";

export default function FeedbackPage() {
  const email = "info@grandeapp.com";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-900 px-6">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold tracking-tight mb-3 bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
          Contact GrandeApp
        </h1>
        <p className="text-gray-600 max-w-lg mx-auto text-lg">
          We’d love to hear from you — whether it’s feedback, collaboration,
          or enterprise inquiries. Our team usually responds within 24 hours.
        </p>
      </div>

      {/* Card */}
      <div className="p-10 rounded-3xl border border-blue-100 bg-white shadow-md hover:shadow-lg transition-all duration-300 w-full max-w-md text-center">
        <div className="mx-auto w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
          <Mail className="w-8 h-8 text-blue-600" />
        </div>

        <h2 className="text-2xl font-semibold mb-3 text-gray-900">Enterprise Contact</h2>
        <p className="text-gray-600 mb-6">
          For all inquiries, feedback, or partnerships, please reach us at:
        </p>

        <a
          href={`mailto:${email}`}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-xl text-lg transition-all focus:ring-4 focus:ring-blue-300"
        >
          ✉️ {email}
        </a>

        <p className="text-gray-400 text-sm mt-6">
          GrandeApp • AI-Powered Collaboration • {new Date().getFullYear()}
        </p>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-gray-500 text-xs">
        © {new Date().getFullYear()} GrandeApp. All rights reserved.
      </footer>
    </div>
  );
}
