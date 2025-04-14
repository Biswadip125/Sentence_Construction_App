import React from "react";
import useTimer from "../../hooks/useTimer";
type TimerComponentProps = {
  currentQuestionIndex: number;
  handleAutonext: () => void;
  currentQuestionId: string;
  blanks: string[];
};
const Timer: React.FC<TimerComponentProps> = ({
  currentQuestionIndex,
  handleAutonext,
  currentQuestionId,
  blanks,
}) => {
  const { timeLeft } = useTimer(
    30,
    handleAutonext,
    currentQuestionIndex,
    currentQuestionId,
    blanks
  );
  return (
    <p className="text-lg font-medium text-gray-700">
      00 : {timeLeft < 10 ? "0" : ""}
      {timeLeft}
    </p>
  );
};

export default Timer;
