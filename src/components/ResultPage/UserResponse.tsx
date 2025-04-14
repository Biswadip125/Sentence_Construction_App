import { answer } from "../../context/answerContext";
import { questionObject } from "../TestPage/TestScreen";

type UserResponseProps = {
  userAnswers: answer;
  originalQuestion: questionObject;
  questionNo: number;
};

const UserResponse: React.FC<UserResponseProps> = ({
  userAnswers,
  originalQuestion,
  questionNo,
}) => {
  const reconstructedQuestionParts: string[] = [];
  originalQuestion.question.split("_____________").forEach((part, index) => {
    reconstructedQuestionParts.push(...part.trim().split(" ")); // Push words from the sentence part
    if (originalQuestion?.correctAnswer[index]) {
      reconstructedQuestionParts.push(
        originalQuestion.correctAnswer[index].toLowerCase()
      ); // Insert user's answer
    }
  });
  const reconstructedQuestion = reconstructedQuestionParts.join(" ");

  const reconstructedAnswerParts: string[] = [];
  originalQuestion.question.split("_____________").forEach((part, index) => {
    reconstructedAnswerParts.push(...part.trim().split(" ")); // Push words from the sentence part
    if (userAnswers?.answer[index]) {
      reconstructedAnswerParts.push(userAnswers.answer[index].toLowerCase()); // Insert user's answer
    }
  });

  const reconstructedAnswer = reconstructedAnswerParts.join(" ");
  const isAnswerCorrect = reconstructedQuestion === reconstructedAnswer;

  return (
    <div className="w-[700px] h-[256px] overflow-hidden border border-gray-300 rounded-xl ">
      <div className="h-1/2 px-3 py-2 ">
        <div className="flex flex-col gap-2 justify-center">
          <div className="flex justify-between">
            <h1 className="bg-[#F0F0F0] text-black px-2 py-1 rounded-lg">
              Prompt
            </h1>
            <p>{questionNo}/10</p>
          </div>
          <p className="text-[#414343] text-md">{reconstructedQuestion}</p>
        </div>
      </div>
      <div className="h-1/2 bg-[#F6F9F9] px-3 py-2">
        <div className="flex flex-col gap-2 justify-center">
          <div className="flex gap-2">
            <h1 className="bg-[#F0F0F0] text-black px-2 py-1 rounded-lg">
              Your response
            </h1>
            <p
              className={`${
                isAnswerCorrect
                  ? "text-green-400 bg-[#EEFBEF]"
                  : "text-red-400 bg-[#FCEBEC]"
              }  px-2 py-1 rounded-lg`}
            >
              {isAnswerCorrect ? "Correct" : "Incorrect"}
            </p>
          </div>
          <p className="text-[#2A2D2D] text-md">{reconstructedAnswer}</p>
        </div>
      </div>
    </div>
  );
};

export default UserResponse;
