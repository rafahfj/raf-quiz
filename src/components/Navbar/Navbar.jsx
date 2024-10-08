import { Link } from "react-router-dom";
import { useQuestion } from "../../context/QuestionContext";

function Navbar() {
  const { auth, logoutUser } = useQuestion();

  return (
    <nav className="flex justify-between items-center bg-transparent px-5 md:px-10 py-5 border border-b-slate-200 w-full text-neutral-900 text-sm">
      <h1 className="flex items-center gap-1 font-bold text-2xl text-indigo-600 tracking-tight">
        Raf<span className="text-neutral-900"> Quiz</span>
        {/* <div className="bg-red-500 mt-2 ml-1 rounded-full w-2 h-2" /> */}
      </h1>
      <div className="space-x-5">
        {!auth?.email && (
          <Link
            className="border-indigo-600 px-5 py-2 border rounded-full font-semibold text-indigo-600"
            to={"/login"}
          >
            Login
          </Link>
        )}
        {auth?.email ? (
          <button
            className="bg-red-600 px-5 py-2 rounded-full font-semibold text-neutral-50 transition"
            onClick={logoutUser}
          >
            Logout
          </button>
        ) : (
          <Link
            className="bg-indigo-600 px-5 py-2 rounded-full font-semibold text-neutral-50 transition"
            to={"/register"}
          >
            Register
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
