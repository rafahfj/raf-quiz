import { Idx } from "../../constant";

function Option({ value, idx, handleClick, trueAnswer, userAnswer, summary }) {
  return (
    <div
      style={
        userAnswer?.answer !== trueAnswer &&
        userAnswer?.answer === value &&
        summary
          ? {
              background: "rgb(254, 202, 202 , 1)",
              color: "rgb(127, 29, 29, 1)",
              fontWeight: "500",
            }
          : {} && trueAnswer === value && summary
          ? { backgroundColor: "rgb(187,247, 208)", fontWeight: 600 }
          : { fontWeight: "500" }
      }
      className={`flex items-center space-x-3 mb-5  bg-neutral-200/50 rounded-full py-3 px-3  text-xs md:text-sm active:text-neutral-50 active:bg-indigo-600/90  ${
        !summary &&
        "md:hover:bg-indigo-600/90 md:hover:text-neutral-50 cursor-pointer text-neutral-600"
      } `}
      onClick={() => handleClick && handleClick(value)}
    >
      <p>{Idx[idx]}.</p>

      <p>{value}</p>
    </div>
  );
}

export default Option;
