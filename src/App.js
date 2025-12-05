import React, { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });

      if (res.ok) {
        setSubmitted(true);
        setEmail("");
        setMessage("");
      } else {
        alert("Something went wrong — please try again.");
      }
    } catch (err) {
      alert("Error sending request — check your API setup.");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-slate-800">
      {/* Header */}
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-600 to-pink-500 flex items-center justify-center text-white font-bold">YD</div>
          <div>
            <h1 className="text-lg font-semibold">Yourd8ta</h1>
            <p className="text-xs text-slate-500">AI-driven property management for estate agents</p>
          </div>
        </div>
        <nav className="flex gap-4 items-center">
          <a href="#features" className="text-sm hover:underline">Features</a>
          <a href="#pricing" className="text-sm hover:underline">Pricing</a>
          <a href="#contact" className="text-sm hover:underline">Contact</a>
        </nav>
      </header>

      {/* Hero + Form */}
      <main className="max-w-6xl mx-auto px-6">
        <section className="grid md:grid-cols-2 gap-8 items-center py-12">
          <div>
            <h2 className="text-4xl font-extrabold leading-tight">Automate enquiries. Fill more viewings. Delight landlords.</h2>
            <p className="mt-4 text-lg text-slate-600">Yourd8ta uses AI to triage leads, answer common questions, schedule viewings, and surface high-priority enquiries — so estate agents spend less time chasing and more time closing.</p>

            <form onSubmit={handleSignup} className="mt-6 flex flex-col gap-3 max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your work email"
                required
                className="p-3 rounded-lg border border-gray-300"
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message"
                className="p-3 rounded-lg border border-gray-300"
              />
              <button type="submit" className="px-4 py-3 rounded-lg bg-indigo-600 text-white font-semibold">
                Request demo
              </button>
            </form>
            {submitted && <p className="mt-3 text-green-600">Thanks — we’ll be in touch soon!</p>}
          </div>

          {/* AI chat demo */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="font-semibold">Live demo — sample conversation</h3>
            <div className="mt-4 space-y-3">
              <div className="p-3 rounded-lg bg-slate-100">Visitor: Is the property pet-friendly?</div>
              <div className="p-3 rounded-lg bg-slate-50">Yourd8ta: Pets are allowed with a small deposit.</div>
              <div className="p-3 rounded-lg bg-slate-100">Visitor: Yes — next Wednesday afternoon?</div>
              <div className="p-3 rounded-lg bg-slate-50">Yourd8ta: Great — I've suggested 2 slots and sent a calendar invite. Confirm when convenient.</div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-12">
          <h3 className="text-2xl font-bold">Core features</h3>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Feature title="AI enquiry triage" desc="Automatically classify leads by intent and urgency, prioritising high-value enquiries for immediate follow-up." />
            <Feature title="Auto-scheduling" desc="Offer available viewing slots, sync with Google/Outlook calendars and confirm bookings without manual work." />
            <Feature title="Property Q&A" desc="Answer standard visitor questions instantly (pets, bills, council tax, parking) with editable response templates." />
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-12">
          <h3 className="text-2xl font-bold">Pricing</h3>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <PricingCard title="Starter" price="£49" bullets={["Up to 250 enquiries/mo","1 user","Email support"]} />
            <PricingCard title="Growth" price="£149" bullets={["Up to 2,000 enquiries/mo","Up to 5 users","Calendar sync + automations"]} highlighted />
            <PricingCard title="Agency" price="Custom" bullets={["Unlimited enquiries","Custom SLAs","Dedicated onboarding + API access"]} />
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-12 bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold">Talk to us</h3>
          <p className="text-slate-600 mt-2">Want a tailored demo? Tell us about your team.</p>
        </section>

        <footer className="mt-12 py-8 text-sm text-slate-500">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div>© {new Date().getFullYear()} Yourd8ta</div>
            <div className="flex gap-4">
              <a href="#" className="hover:underline">Privacy</a>
              <a href="#" className="hover:underline">Terms</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

// --- Helper components ---
function Feature({ title, desc }) {
  return <div className="bg-white rounded-2xl p-5 shadow-sm"><h4 className="font-semibold">{title}</h4><p className="mt-2 text-sm text-slate-600">{desc}</p></div>;
}

function PricingCard({ title, price, bullets = [], highlighted = false }) {
  return <div className={`${highlighted ? "border-2 border-indigo-200" : "border"} rounded-2xl p-6 bg-white`}>
    <h4 className="font-bold text-lg">{title}</h4>
    <div className="mt-2 text-3xl font-extrabold">{price}<span className="text-sm font-normal">/mo</span></div>
    <ul className="mt-4 space-y-2 text-sm text-slate-600">{bullets.map((b,i) => <li key={i}>• {b}</li>)}</ul>
    <button className="mt-6 w-full px-4 py-3 rounded-lg bg-pink-500 text-white">Choose</button>
  </div>;
}
