import { useState } from "react";
import riddles from "../data/riddles";

const RiddlePage = () => {
  
  const today = new Date().getDate();
  const dailyRiddle = riddles[today % riddles.length];

  const [showHint, setShowHint] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="min-h-screen bg-yellow-50 flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-3xl font-bold text-purple-800 mb-6">🧠 Riddle of the Day</h1>

      <div className="bg-white shadow-xl rounded-2xl p-6 max-w-lg w-full">
        <p className="text-lg text-gray-800 mb-4">{dailyRiddle.question}</p>

        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => setShowHint(true)}
            className="bg-purple-200 text-purple-800 px-4 py-2 rounded hover:bg-purple-300"
          >
            Show Hint
          </button>
          <button
            onClick={() => setShowAnswer(true)}
            className="bg-green-200 text-green-800 px-4 py-2 rounded hover:bg-green-300"
          >
            Show Answer
          </button>
        </div>

        {showHint && (
          <div className="mt-4 text-sm text-yellow-700">
            <strong>Hint:</strong> {dailyRiddle.hint}
          </div>
        )}
        {showAnswer && (
          <div className="mt-2 text-base text-green-800 font-semibold">
            🎯 Answer: {dailyRiddle.answer}
          </div>
        )}
      </div>
    </div>
  );
};

export default RiddlePage;
