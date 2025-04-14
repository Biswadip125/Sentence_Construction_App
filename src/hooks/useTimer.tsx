import { useContext, useEffect, useRef, useState } from "react";
import { AnswersContext } from "../context/answerContext";

const useTimer = (
  startTime: number,
  handleAutoNext: () => void,
  currentQuestionIndex: number,
  currentQuestionId: string,
  blanks: string[]
) => {
  const context = useContext(AnswersContext);
  const setUserAnswers = context?.setUserAnswers;

  const [timeLeft, setTimeLeft] = useState(startTime);
  const blanksRef = useRef<string[]>(blanks);

  useEffect(() => {
    blanksRef.current = blanks;
  }, [blanks]);

  const saveUserAnswers = () => {
    const answer = {
      questionId: currentQuestionId,
      answer: blanksRef.current,
    };
    if (setUserAnswers) {
      setUserAnswers((prev) => [...prev, answer]);
    }
  };

  useEffect(() => {
    setTimeLeft(startTime);

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          clearInterval(interval);
          saveUserAnswers();
          handleAutoNext();
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [currentQuestionIndex]);

  return { timeLeft };
};

export default useTimer;
