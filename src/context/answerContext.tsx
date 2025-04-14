import React, { createContext, useState } from "react";
import { questionObject } from "../components/TestPage/TestScreen";

export type answer = {
  questionId: string;
  answer: string[];
};

type AnswersContextType = {
  userAnswers: answer[];
  setUserAnswers: React.Dispatch<React.SetStateAction<answer[]>>;
  originalQuestionandAnswers: questionObject[];
  setOriginalQuestionandAnswers: React.Dispatch<
    React.SetStateAction<questionObject[]>
  >;
};

export const AnswersContext = createContext<AnswersContextType | undefined>(
  undefined
);

export const AnswersContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [userAnswers, setUserAnswers] = useState<answer[]>([]);
  const [originalQuestionandAnswers, setOriginalQuestionandAnswers] = useState<
    questionObject[]
  >([]);

  return (
    <AnswersContext.Provider
      value={{
        userAnswers,
        setUserAnswers,
        originalQuestionandAnswers,
        setOriginalQuestionandAnswers,
      }}
    >
      {" "}
      {children}
    </AnswersContext.Provider>
  );
};
