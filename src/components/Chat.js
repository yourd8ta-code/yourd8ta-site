import React, { useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input) return;
    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]);
    setInput("");

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: [...messages, userMessage] })
    });

    const data = await res.json();
    setMessages([...messages, userMessage, { role: "assistant", content: data.text }]);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="overflow-auto h-64 p-2 border rounded">{messages.map((m, i) => <div key={i}><strong>{m.role}:</strong> {m.content}</div>)}</div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message"
        className="border rounded p-2"
      />
      <button onClick={handleSend} className="px-4 py-2 bg-indigo-600 text-white rounded">Send</button>
    </div>
  );
}
