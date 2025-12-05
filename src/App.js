import React, { useState } from "react";
import Chat from "./components/Chat.js";

export default function App() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log({ email });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-slate-800">
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-600 to-pink-500 flex items-center justify-center text-white font-bold">
            YD
          </div>
          <div>
            <h1 className="text-lg font-semibold">Yourd8ta</h1>
            <p className="text-xs text-slate-500">AI-driven property management for estate agents</p>
          </div>
        </div>
        <nav className="flex gap-4 items-center">
          <a href="#features" className="text-sm hover:underline">Features</a>
          <a href="#pricing" className="text-sm hover:underline">Pricing</a>
          <a href="#contact" className="text-sm hover:underline">Contact</a>
          <button className="ml-4 px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm">Get started</button>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        <section className="grid md:grid-cols-2 gap-8 items-center py-12">
          <div>
            <h2 className="text-4xl font-extrabold leading-tight">Automate enquiries. Fill more viewings. Delight landlords.</h2>
            <p className="mt-4 text-lg text-slate-600">
              Yourd8ta uses AI to triage leads, answer common questions, schedule viewings and surface high-priority enquiries — so estate agents spend less time chasing and more time closing.
            </p>

            <form onSubmit={handleSignup} className="mt-6 flex gap-3 max-w-md">
              <input
                type="email"
                required
                placeholder="your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 p-3 rounded-lg border border-slate-200"
              />
              <button className="px-4 py-3 rounded-lg bg-pink-500 text-white font-semibold">Request demo</button>
            </form>

            {submitted && (
              <p className="mt-3 text-sm text-green-600">
                Thanks — we saved your request. We'll follow up with next steps.
              </p>
            )}
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="font-semibold">Live demo — AI chat</h3>
            <div className="mt-4">
              <Chat />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
