import { useContext } from "react";
import { AnswersContext } from "../../context/answerContext";
import ScoreComponent from "./ScoreComponent";
import UserResponse from "./UserResponse";

const ResultPage = () => {
  const context = useContext(AnswersContext);
  const originalQuestionandAnswers = context?.originalQuestionandAnswers;
  const userAnswers = context?.userAnswers;

  let CorrectAnswers: number = 0;

  originalQuestionandAnswers?.forEach((originalQuestion) => {
    const originalAnswers: string[] = originalQuestion.correctAnswer;

    // Find the matching user answer by questionId
    const userAnswerObj = userAnswers?.find(
      (userAns) => userAns.questionId === originalQuestion.questionId
    );

    if (!userAnswerObj) return; // If no answer, skip

    const isCorrect = originalAnswers.every(
      (ans, index) => ans === userAnswerObj.answer[index]
    );

    if (isCorrect) {
      CorrectAnswers += 1;
    }
  });

  return (
    <div className="w-full min-h-[calc(100vh-64px)] flex items-center justify-center flex-col p-2 gap-4">
      <ScoreComponent correctAnswers={CorrectAnswers} />
      <div className="py-4 flex flex-col gap-8">
        {" "}
        {originalQuestionandAnswers?.map((originalQuestion, index) => (
          <UserResponse
            key={originalQuestion.questionId}
            questionNo={index + 1}
            userAnswers={(userAnswers ?? [])[index]}
            originalQuestion={originalQuestion}
          />
        ))}
      </div>
    </div>
  );
};

export default ResultPage;
