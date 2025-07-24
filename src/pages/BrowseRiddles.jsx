import { useEffect, useState } from "react";
import riddles from "../data/riddles"; // base riddles

const BrowseRiddles = () => {
  const [allRiddles, setAllRiddles] = useState([]);
  const [revealed, setRevealed] = useState({}); // track toggles per riddle

  useEffect(() => {
    const userRiddles = JSON.parse(localStorage.getItem("userRiddles")) || [];
    const combined = [...riddles, ...userRiddles];
    setAllRiddles(combined);
  }, []);

  const toggleReveal = (id) => {
    setRevealed((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="min-h-screen bg-purple-100 px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">📚 Browse All Riddles</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allRiddles.map((riddle) => (
          <div
            key={riddle.id}
            className="bg-white rounded-xl shadow p-4 flex flex-col justify-between"
          >
            <div>
              <p className="font-semibold mb-2">{riddle.question}</p>

              {revealed[riddle.id] && (
                <>
                  {riddle.hint && (
                    <p className="text-yellow-600 text-sm mb-1">
                      💡Hint: {riddle.hint}
                    </p>
                  )}
                  <p className="text-green-700 font-bold">
                    Answer: {riddle.answer}
                  </p>
                </>
              )}
            </div>

            <button
              onClick={() => toggleReveal(riddle.id)}
              className="mt-4 text-sm text-blue-600 hover:underline"
            >
              {revealed[riddle.id] ? "Hide" : "View Hint & Answer"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseRiddles;
