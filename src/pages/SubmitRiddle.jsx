import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SubmitRiddle = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [hint, setHint] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!question.trim() || !answer.trim()) {
      alert("Question and answer are required!");
      return;
    }

    const newRiddle = {
      id: Date.now(), // unique ID
      question,
      answer,
      hint,
    };

    const stored = JSON.parse(localStorage.getItem("userRiddles")) || [];
    localStorage.setItem("userRiddles", JSON.stringify([...stored, newRiddle]));

    // Reset form
    setQuestion("");
    setAnswer("");
    setHint("");

    alert("🎉 Riddle submitted successfully!");
    navigate("/browse");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-50 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">🧠 Submit Your Riddle</h2>

        <label className="block mb-2 font-semibold">Riddle Question</label>
        <textarea
          className="w-full p-2 border rounded mb-4"
          rows={3}
          placeholder="Enter the riddle question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
        />

        <label className="block mb-2 font-semibold">Answer</label>
        <input
          type="text"
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter the correct answer..."
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          required
        />

        <label className="block mb-2 font-semibold">Optional Hint</label>
        <input
          type="text"
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter a hint (optional)..."
          value={hint}
          onChange={(e) => setHint(e.target.value)}
        />

        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded w-full transition duration-200"
        >
          Submit Riddle
        </button>
      </form>
    </div>
  );
};

export default SubmitRiddle;
