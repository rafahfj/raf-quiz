import React, { createContext, useContext, useState, useCallback } from "react";

const QuestionContext = createContext();

export const QuestionProvider = ({ children }) => {
  const [question, setQuestion] = useState([]);
  const [userAnswer, setUserAnswer] = useState([]);
  const [error, setError] = useState(null);
  const [totalTime, setTotalTime] = useState(0);
  const [trueAnswer, setTrueAnswer] = useState(0);
  const [falseAnswer, setFalseAnswer] = useState(0);
  const [auth, setAuth] = useState({});
  const [page, setPage] = useState(1);

  const fetchQuestion = useCallback(async (query) => {
    try {
      const response = await fetch(`https://opentdb.com/api.php${query}`);
      const data = await response.json();
      setQuestion(data.results);
    } catch (error) {
      setError(error);
    }
  }, []);

  const authUser = (auth) => setAuth(auth);
  const addAnswer = ({ question, answer }) => {
    setUserAnswer((prev) => [...prev, { question, answer }]);
  };
  const trueAction = () => setTrueAnswer((prev) => prev + 1);
  const falseAction = () => setFalseAnswer((prev) => prev + 1);
  const logoutUser = () => {
    setQuestion([]);
    setUserAnswer([]);
    setError(null);
    setTotalTime(0);
    setTrueAnswer(0);
    setFalseAnswer(0);
    setAuth({});
    setPage(1);
  };
  const resetQuestion = () => {
    setQuestion([]);
    setTrueAnswer(0);
    setFalseAnswer(0);
    setError(null);
    setPage(1);
  };
  const setTimeStamp = (time) => setTotalTime(time);
  const nextPage = () => setPage((prev) => prev + 1);

  return (
    <QuestionContext.Provider
      value={{
        question,
        userAnswer,
        error,
        totalTime,
        trueAnswer,
        falseAnswer,
        auth,
        page,
        fetchQuestion,
        authUser,
        addAnswer,
        trueAction,
        falseAction,
        logoutUser,
        resetQuestion,
        setTimeStamp,
        nextPage,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

export const useQuestion = () => useContext(QuestionContext);
