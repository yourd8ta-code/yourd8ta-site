const handleSignup = async (e) => {
  e.preventDefault();

  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, message })
  });

  if (res.ok) {
    setSubmitted(true);
    setEmail("");
    setMessage("");
  } else {
    alert("Something went wrong — please try again.");
  }
};
export default App;

