import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AnimateProvider from "../../components/AnimateProvider/AnimateProvider";
import Question from "../../components/Questions/Questions";
import { useQuestion } from "../../context/QuestionContext";

function Success() {
  const {
    trueAnswer,
    falseAnswer,
    resetQuestion,
    setTimeStamp,
    question: allQuestion,
  } = useQuestion();
  const navigate = useNavigate();
  const score = (trueAnswer * 100) / 5;
  const indxColor =
    score >= 80 ? "#10b981" : score >= 60 ? "#F59E0B" : "#dc2626";

  useEffect(() => {
    setTimeStamp(0);
  }, []);

  const handleClick = () => {
    resetQuestion();
    navigate("/");
  };
  return (
    <AnimateProvider className="flex flex-col space-y-10 md:mx-auto md:max-w-xl">
      <h3 className="font-bold text-center text-lg text-neutral-900 md:text-xl">
        Your Final score is
      </h3>

      <h1
        style={{
          background: indxColor,
        }}
        className={`text-5xl font-bold mx-auto p-5 rounded-full bg-red-500 md:text-6xl text-neutral-100`}
      >
        {score}
      </h1>

      <div className="flex flex-col space-y-1 font-medium text-neutral-600 text-xs md:text-sm">
        <p className="flex justify-between">
          Correct Answer <span className="text-green-600">{trueAnswer}</span>
        </p>
        <p className="flex justify-between">
          Wrong Answer <span className="text-red-600">{falseAnswer}</span>
        </p>
        <p className="flex justify-between">
          Answer Submitted{" "}
          <span className="text-purple-600">{trueAnswer + falseAnswer}</span>
        </p>
      </div>

      <button
        onClick={handleClick}
        className="place-items-center grid bg-indigo-600 py-2 rounded-full font-semibold text-neutral-50 text-sm hover:text-neutral-50"
      >
        Back to dashboard
      </button>

      {/* Summary */}
      <h3 className="pt-[100px] font-semibold text-center text-neutral-600 md:text-lg">
        Answer
      </h3>
      {allQuestion.map((question, i) => (
        <Question
          key={i}
          singleQuestion={question}
          id={i + 1}
          summary={true}
          trueAnswer={question.correct_answer}
        />
      ))}
    </AnimateProvider>
  );
}

export default Success;
