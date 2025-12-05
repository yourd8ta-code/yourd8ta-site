import React, { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

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
  };

  return (
    <div>
      <h1>Yourd8ta Demo Form</h1>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your work email"
          required
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message"
        />
        <button type="submit">Send</button>
      </form>
      {submitted && <p>Thanks — we’ll be in touch!</p>}
    </div>
  );
}
export default App;

