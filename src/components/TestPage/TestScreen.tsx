import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Button from "./Button";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Timer from "./Timer";
import { AnswersContext } from "../../context/answerContext";
import TestQuestion from "./TestQuestion";

export type questionObject = {
  answerType: string;
  correctAnswer: string[];
  options: string[];
  question: string;
  questionId: string;
  questionType: string;
};

const TestScreen = () => {
  const context = useContext(AnswersContext);
  const setOriginalQuestionandAnswers = context?.setOriginalQuestionandAnswers;
  const setUserAnswers = context?.setUserAnswers;
  const originalQuestionandAnswers = context?.originalQuestionandAnswers;

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await axios.get("http://localhost:3000/data");
        if (res.status === 200) {
          const questions = res.data.questions;

          if (setOriginalQuestionandAnswers && setUserAnswers) {
            setOriginalQuestionandAnswers(questions);
            setUserAnswers([]);
          }
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchQuestions();
  }, []);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [blanks, setBlanks] = useState<string[]>(["", "", "", ""]);
  const navigate = useNavigate();

  const currentQuestion = (originalQuestionandAnswers ?? [])[
    currentQuestionIndex
  ];
  const options = currentQuestion?.options;

  const handleAutoNext = () => {
    if (
      currentQuestionIndex ===
      (originalQuestionandAnswers ?? []).length - 1
    ) {
      navigate("/result");
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
      setBlanks(["", "", "", ""]);
    }
  };
  const removeWordFromBlank = (index: number) => {
    const updatedBlanks = [...blanks];
    updatedBlanks[index] = "";
    setBlanks(updatedBlanks);
  };

  const addUserAnswers = () => {
    const answer = {
      questionId: currentQuestion?.questionId,
      answer: blanks,
    };
    if (setUserAnswers) {
      setUserAnswers((prev) => [...prev, answer]);
    }
  };
  if (originalQuestionandAnswers?.length === 0) return null;

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-[850px] rounded-3xl shadow-2xl bg-white p-[40px] flex flex-col gap-10">
        <div className="flex flex-col gap-8 w-full">
          <div className="flex items-center justify-between">
            <Timer
              currentQuestionIndex={currentQuestionIndex}
              handleAutonext={handleAutoNext}
              currentQuestionId={currentQuestion?.questionId}
              blanks={blanks}
            />
            <button
              className=" border-1 border-[#DFE3E3] px-4 py-1 rounded-lg cursor-pointer"
              onClick={() => navigate("/")}
            >
              Quit
            </button>
          </div>
          <div className="flex gap-2">
            {originalQuestionandAnswers?.map(
              (question: questionObject, index: number) => (
                <div
                  key={question.questionId}
                  className={`w-20 ${
                    index <= currentQuestionIndex
                      ? "bg-[#F2A531]"
                      : "bg-gray-400/40"
                  } h-[4px] rounded-[8px]`}
                ></div>
              )
            )}
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-10">
          <h1 className="text-[#616464] text-center font-semibold">
            Select the missing words in the correct order
          </h1>
          <div className="w-full px-2">
            <TestQuestion
              currentQuestion={currentQuestion}
              blanks={blanks}
              removeWordFromBlank={removeWordFromBlank}
            />
          </div>
          <div className="flex items-center justify-center gap-2">
            {options?.map((option: string, index: number) => (
              <Button
                buttonText={option}
                key={index}
                setBlanks={setBlanks}
                blanks={blanks}
              />
            ))}
          </div>
        </div>
        <div className="w-full flex items-center justify-end h-14">
          <button
            className={`h-full  bg-white shadow-2xl rounded-lg flex items-center justify-center border-2 border-[#DFE3E3] cursor-pointer  ${
              currentQuestionIndex ===
              (originalQuestionandAnswers ?? []).length - 1
                ? "px-5 "
                : "px-4"
            }`}
            disabled={blanks.includes("")}
            onClick={() => {
              handleAutoNext();
              addUserAnswers();
            }}
          >
            {currentQuestionIndex ===
            (originalQuestionandAnswers ?? []).length - 1 ? (
              "Submit"
            ) : (
              <FaArrowRightLong color={"gray"} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestScreen;
