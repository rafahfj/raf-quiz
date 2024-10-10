import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AnimateProvider from "../../components/AnimateProvider/AnimateProvider";
import { useQuestion } from "../../context/QuestionContext";

function Question() {
  const { fetchQuestion, question: questionData } = useQuestion();
  const { search } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!questionData?.length) {
      fetchQuestion(search);
    }
  }, [questionData]);

  if (!questionData?.length) return <p>Loading...</p>;

  return (
    <AnimateProvider className="mx-auto max-w-xl">
      <h1 className="mb-5 font-semibold text-base text-orange-900 md:text-lg">
        Quizzz Info
      </h1>

      <div className="flex flex-col space-y-3 text-gray-900 text-xs md:text-sm">
        <div className="flex space-x-5">
          <p className="min-w-[170px]">Number of questions </p>
          <p className="font-bold">{questionData.length}</p>
        </div>

        <div className="flex space-x-5">
          <p className="min-w-[170px]">Category </p>
          <p className="font-bold text-indigo-600">
            {questionData[0].category}
          </p>
        </div>

        <div className="flex space-x-5">
          <p className="min-w-[170px]">Difficulty</p>
          <p className="font-bold text-lime-600 capitalize">
            {questionData[0].difficulty}
          </p>
        </div>

        <div className="flex space-x-5">
          <p className="min-w-[170px]">Time </p>
          <p className="font-bold">1 mins.</p>
        </div>
      </div>

      <button
        disabled={!questionData}
        onClick={() => {
          navigate(`/question/1`);
        }}
        className="flex justify-center bg-indigo-600 hover:bg-indigo-600 disabled:bg-indigo-600/50 mt-10 p-1 rounded-full w-full font-semibold md:font-bold text-base text-center text-white md:text-lg cursor-pointer disabled:cursor-not-allowed"
      >
        Start
      </button>
    </AnimateProvider>
  );
}

export default Question;
