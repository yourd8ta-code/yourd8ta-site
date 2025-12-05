import { useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);

    setInput("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      setMessages([...newMessages, { sender: "bot", text: data.reply }]);
    } catch (err) {
      setMessages([...newMessages, { sender: "bot", text: "Error, try again." }]);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-xl">
      <div className="space-y-2 h-64 overflow-y-auto mb-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded-lg ${msg.sender === "user" ? "bg-blue-200 self-end" : "bg-gray-200 self-start"}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a question..."
          className="flex-1 border rounded-lg px-3 py-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Send
        </button>
      </form>
    </div>
  );
}
