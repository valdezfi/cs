export default function FeedbackPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-6">
      <div className="max-w-md bg-white shadow-md rounded-2xl p-8 border border-gray-200">
        <h1 className="text-3xl font-semibold text-gray-900 mb-4">
          We’d love your feedback
        </h1>

        <p className="text-gray-600 mb-6">
          GrandeApp values insights from our enterprise partners.  
          For questions, feature requests, or feedback, reach out anytime:
        </p>

        <a
          href="mailto:info@grandeapp.com"
          className="inline-block bg-orange-600 hover:bg-orange-700 text-white text-lg font-medium py-3 px-6 rounded-lg transition-all"
        >
          ✉️ info@grandeapp.com
        </a>

        <p className="text-gray-500 text-sm mt-6">
          Our team typically responds within 24 hours.
        </p>
      </div>

      <footer className="mt-10 text-gray-400 text-xs">
        © {new Date().getFullYear()} GrandeApp — Enterprise Feedback Portal
      </footer>
    </main>
  );
}
