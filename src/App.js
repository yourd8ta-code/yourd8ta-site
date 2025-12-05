import React, { useState } from "react";


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
    <div className="min-h-screen bg-gray-50 text-slate-800 p-6">
      <h1 className="text-2xl font-bold mb-4">Yourd8ta Demo</h1>
      <form onSubmit={handleSignup} className="flex flex-col gap-3 max-w-md">
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
        <button
          type="submit"
          className="px-4 py-3 rounded-lg bg-indigo-600 text-white font-semibold"
        >
          Send
        </button>
      </form>
      {submitted && (
        <p className="mt-3 text-green-600">
          Thanks — we’ll be in touch soon!
        </p>
      )}

      {/* Sample AI chat box */}
      <div className="mt-8 p-4 bg-white rounded-lg shadow-sm max-w-md">
        <p className="font-semibold mb-2">Sample AI Chat</p>
        <div className="space-y-2">
          <div className="p-2 bg-gray-100 rounded">Visitor: Is the property pet-friendly?</div>
          <div className="p-2 bg-gray-50 rounded">Yourd8ta: Pets are allowed with a small deposit.</div>
        </div>
      </div>
    </div>
  );
}
export default App;

