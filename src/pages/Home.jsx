import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-purple-100 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-bold text-purple-800 mb-4">🧠 RiddleBox</h1>
      <p className="text-lg text-purple-700 mb-6">Challenge your brain with a daily dose of riddles!</p>

      <Link to="/riddle">
        <button className="bg-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-purple-700 transition">
          View Today's Riddle
        </button>
      </Link>

      <p className="text-xs text-gray-500 mt-8">New riddle daily</p>
    </div>
  );
};

export default Home;
