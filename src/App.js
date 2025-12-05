import React, { useState } from "react";
import Chat from "./components/Chat";

export default function App() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSignup(e) {
    e.preventDefault();
    console.log("Signup", { email });
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-gray-50 text-slate-800">
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
          <button className="ml-4 px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm">Get started</button>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-8 items-center py-12">
          <div>
            <h2 className="text-4xl font-extrabold leading-tight">Automate enquiries. Fill more viewings. Delight landlords.</h2>
            <p className="mt-4 text-lg text-slate-600">Yourd8ta uses AI to triage leads, answer common questions, schedule viewings and surface high-priority enquiries — so estate agents spend less time chasing and more time closing.</p>

            <form onSubmit={handleSignup} className="mt-6 flex gap-3 max-w-md">
              <input type="email" required placeholder="your work email" value={email} onChange={(e) => setEmail(e.target.value)} className="flex-1 p-3 rounded-lg border border-slate-200" />
              <button className="px-4 py-3 rounded-lg bg-pink-500 text-white font-semibold">Request demo</button>
            </form>

            {submitted && <p className="mt-3 text-sm text-green-600">Thanks — we saved your request. We'll follow up with next steps (connect your calendar, inbox).</p>}

            <div className="mt-6 text-sm text-slate-500"><strong>Built for:</strong> Estate agents · Letting teams · Property managers</div>
          </div>

   <div className="bg-white rounded-2xl p-6 shadow-md">
  <h3 className="font-semibold">Live demo — AI chat</h3>
  <div className="mt-4">
    <Chat />
  </div>
</div>



        {/* FEATURES */}
        <section id="features" className="py-12">
          <h3 className="text-2xl font-bold">Core features</h3>
          <p className="text-slate-600 mt-2">Everything estate agents need to capture and convert enquiries automatically.</p>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Feature title="AI enquiry triage" desc="Automatically classify leads by intent and urgency, prioritising high-value enquiries for immediate follow-up." />
            <Feature title="Auto-scheduling" desc="Offer available viewing slots, sync with Google/Outlook calendars and confirm bookings without manual work." />
            <Feature title="Property Q&A" desc="Answer standard visitor questions instantly (pets, bills, council tax, parking) with editable response templates." />
            <Feature title="Workflows & automations" desc="Custom rules: auto-assign leads, follow-up sequences, and reminders for viewings and renewals." />
            <Feature title="Integrations" desc="Connect to your CRM, email, calendar, and major listing portals (CSV / API integrations)." />
            <Feature title="Insights & reporting" desc="Track conversion rates, response times and team performance from a single dashboard." />
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="py-12">
          <h3 className="text-2xl font-bold">Pricing</h3>
          <p className="text-slate-600 mt-2">Simple tiers for small teams and agencies. No hidden fees.</p>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <PricingCard title="Starter" price="£49" bullets={["Up to 250 enquiries/mo","1 user","Email support"]} />
            <PricingCard title="Growth" price="£149" bullets={["Up to 2,000 enquiries/mo","Up to 5 users","Calendar sync + automations"]} highlighted />
            <PricingCard title="Agency" price="Custom" bullets={["Unlimited enquiries","Custom SLAs","Dedicated onboarding + API access"]} />
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-12">
          <h3 className="text-2xl font-bold">What early agents say</h3>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <Testimonial quote="We cut average response time from 6 hours to under 20 minutes — bookings went up 32%." who="Maya R., Lettings Manager"/>
            <Testimonial quote="The automation saved our team hours every week and reduced no-shows." who="George H., Senior Agent"/>
            <Testimonial quote="Fast to set up and easy to train. The team love it." who="Priya S., Agency Director"/>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-12 bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold">Talk to us</h3>
          <p className="text-slate-600 mt-2">Want a tailored demo for your portfolio? Tell us about your team.</p>
          <form className="mt-6 grid md:grid-cols-2 gap-4" onSubmit={(e)=>{e.preventDefault();console.log({email,message});alert('Thanks — we\'ll be in touch!');}}>
            <input required placeholder="Your work email" value={email} onChange={(e)=>setEmail(e.target.value)} className="p-3 rounded-lg border border-slate-200"/>
            <input placeholder="Company (optional)" className="p-3 rounded-lg border border-slate-200"/>
            <textarea placeholder="Tell us what you need" className="p-3 rounded-lg border border-slate-200 md:col-span-2" value={message} onChange={(e)=>setMessage(e.target.value)}/>
            <button className="px-4 py-3 rounded-lg bg-indigo-600 text-white md:col-span-2">Request demo</button>
          </form>
        </section>

        <footer className="mt-12 py-8 text-sm text-slate-500">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div>© {new Date().getFullYear()} Yourd8ta — AI property tools for estate agents</div>
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

function Feature({ title, desc }) {
  return <div className="bg-white rounded-2xl p-5 shadow-sm"><h4 className="font-semibold">{title}</h4><p className="mt-2 text-sm text-slate-600">{desc}</p></div>;
}

function PricingCard({ title, price, bullets=[], highlighted=false }) {
  return <div className={`${highlighted?"border-2 border-indigo-200":"border"} rounded-2xl p-6 bg-white`}>
    <h4 className="font-bold text-lg">{title}</h4>
    <div className="mt-2 text-3xl font-extrabold">{price}<span className="text-sm font-normal">/mo</span></div>
    <ul className="mt-4 space-y-2 text-sm text-slate-600">{bullets.map((b,i)=><li key={i}>• {b}</li>)}</ul>
    <button className="mt-6 w-full px-4 py-3 rounded-lg bg-pink-500 text-white">Choose</button>
  </div>;
}

function Testimonial({ quote, who }) {
  return <div className="bg-white rounded-2xl p-5 shadow-sm"><p className="text-slate-700">“{quote}”</p><p className="mt-3 text-sm text-slate-500">— {who}</p></div>;
}
