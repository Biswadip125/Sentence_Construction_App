import { useContext } from "react";
import { AnswersContext } from "./answerContext";

export const useAnswersContext = () => {
  const context = useContext(AnswersContext);
  if (!context) {
    throw new Error(
      "useAnswersContext must be used within an AnswersContext Provider"
    );
  }
  return context;
};
