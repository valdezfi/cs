"use client";
import { useState } from "react";

type Mode = "bio" | "positioning";

const hints = [
  "We provide luxury skincare treatments ✨",
  "Eco-friendly fashion brand 🌱",
  "Premium coffee shop with community vibes ☕",
];

export default function BrandFunnelTool() {
  const [description, setDescription] = useState("");
  const [mode, setMode] = useState<Mode>("bio");
  const [reply, setReply] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!description || description.trim().split(/\s+/).length < 5) {
      alert("Please tell us about your brand (5–10 words minimum) ✨");
      return;
    }

    setLoading(true);
    setReply([]);

    try {
      const res = await fetch("https://app.grandeapp.com/g/ai/ig", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: description,
          creatorType: "brand", // ✅ brand version
          mode,
        }),
      });

      const data = await res.json();
      setReply(Array.isArray(data.reply) ? data.reply : []);
    } catch (err) {
      console.error("Error generating:", err);
    } finally {
      setLoading(false);
    }
  };

  const addHint = (hint: string) => {
    setDescription((prev) => (prev ? prev + " " + hint : hint));
  };

  return (
    <div className="w-full max-w-xl mx-auto p-8 rounded-3xl bg-white dark:bg-black shadow-xl border border-gray-200 dark:border-zinc-800">
      {/* Header */}
      <h1 className="text-4xl font-extrabold text-center mb-2">Free Brand Bio Maker</h1>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-6 text-lg">
        Describe your brand, products, and audience to generate a{" "}
        <span className="font-semibold">personalized business bio powered by AI</span>.
      </p>

      {/* Inputs */}
      <div className="space-y-4">
        <textarea
          placeholder="Tell us about your brand, industry, and goals (5-10 words minimum)"
          className="w-full p-4 rounded-xl border border-gray-300 dark:border-zinc-700 focus:ring-2 focus:ring-blue-500 focus:outline-none text-lg h-32 resize-none"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {/* Hint buttons */}
        <div className="flex flex-wrap gap-2">
          {hints.map((hint, i) => (
            <button
              key={i}
              onClick={() => addHint(hint)}
              className="px-3 py-1 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-zinc-700 transition"
            >
              {hint}
            </button>
          ))}
        </div>

        {/* Mode toggle */}
        <div className="flex space-x-3 mt-2">
          {(["bio", "positioning"] as Mode[]).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`flex-1 py-3 rounded-xl text-lg font-semibold transition ${
                mode === m
                  ? "bg-black text-white shadow-md"
                  : "bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-zinc-700"
              }`}
            >
              {m === "bio" ? "🎉 Catchy" : "💼 Professional"}
            </button>
          ))}
        </div>

        {/* Generate CTA */}
        <button
          onClick={handleGenerate}
          disabled={loading}
          className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl text-lg font-bold shadow-md hover:opacity-90 transition"
        >
          {loading ? "✨ Creating..." : "Generate My Brand Bio"}
        </button>
      </div>

      {/* Results */}
      {reply.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-center">🔥 Your Brand Bio Ideas</h2>
          <ul className="space-y-3">
            {reply.map((line, i) => (
              <li
                key={i}
                className="p-4 rounded-xl bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-center text-lg"
              >
                {line}
              </li>
            ))}
          </ul>

          {/* Signup CTA */}
          <div className="mt-8 text-center bg-black p-6 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-2">Want more brand tools? 🚀</h3>
            <p className="mb-4 text-lg">
              Join <span className="font-semibold">Grande</span> to unlock AI growth tools, collab offers, and exclusive marketing strategies.
            </p>
            <a
              href="/signup"
              className="inline-block bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
            >
              Sign Up Free →
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
