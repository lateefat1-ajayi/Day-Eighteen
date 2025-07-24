import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-purple-200 shadow-md py-4 px-6 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-gray-800">
        RiddleBox 🧠
      </Link>
      <div className="space-x-4">
        <Link
          to="/riddle"
          className="text-gray-700 hover:text-black font-medium"
        >
          Daily Riddle
        </Link>
        <Link
          to="/browse"
          className="text-gray-700 hover:text-black font-medium"
        >
          Browse Riddles
        </Link>
        <Link
          to="/submit"
          className="text-gray-700 hover:text-black font-medium"
        >
          Submit Riddle
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
