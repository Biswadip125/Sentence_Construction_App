import React from "react";
import { questionObject } from "./TestScreen";

type TestQuestionProps = {
  currentQuestion: questionObject;
  blanks: string[];
  removeWordFromBlank: (index: number) => void;
};

const TestQuestion: React.FC<TestQuestionProps> = ({
  currentQuestion,
  blanks,
  removeWordFromBlank,
}) => {
  const sentence = currentQuestion?.question;
  const parts = sentence?.split("_____________");

  return (
    <p className="text-lg leading-9 flex flex-wrap gap-2 font-md text-center">
      {parts?.map((part: string, index: number) => (
        <React.Fragment key={index}>
          <span>{part}</span>
          {index < parts.length - 1 && (
            <span className="inline-block min-w-[130px] h-[35px] border-b border-black ">
              {blanks[index] && (
                <span
                  className=" bg-[#F5F5F5] text-gray-900 px-2 py-[2px] rounded-md cursor-pointer"
                  onClick={() => removeWordFromBlank(index)}
                >
                  {blanks[index]}
                </span>
              )}
            </span>
          )}
        </React.Fragment>
      ))}
    </p>
  );
};

export default TestQuestion;
