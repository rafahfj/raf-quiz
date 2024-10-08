import { useEffect, useState } from "react";
import { getTimeByMs } from "../../utils";
import { useNavigate } from "react-router-dom";
import { useQuestion } from "../../context/QuestionContext";

const defaultCountdown = {
  minutes: "00",
  seconds: "00",
};

function TimeStamp() {
  const [countDown, setCountDown] = useState(defaultCountdown);
  const [startTime, setStartTime] = useState(true);
  const { totalTime, setTimeStamp } = useQuestion();

  const navigate = useNavigate();

  useEffect(() => {
    if (!totalTime) {
      setTimeStamp(new Date(new Date().getTime() + 60000).getTime());
    }
  }, []);

  useEffect(() => {
    let intervalId;
    if (startTime && totalTime) {
      intervalId = setInterval(() => {
        const timeNext = getTimeByMs(totalTime);

        if (timeNext) {
          setCountDown(timeNext);
        } else {
          clearInterval(intervalId);
          setStartTime(false);
          navigate("/finish");
        }
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [startTime, totalTime]);

  return (
    <>
      <div className="flex items-center space-x-3 mx-auto p-3 rounded-lg ring-[1px] ring-neutral-400 max-w-fit font-semibold text-neutral-700 text-xs">
        <span>{countDown.minutes}</span>
        <span>Minutes</span>
        <span>{countDown.seconds}</span>
        <span>Seconds</span>
      </div>
    </>
  );
}

export default TimeStamp;
