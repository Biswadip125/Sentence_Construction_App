import { MdOutlineEditNote } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const HeroPage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-[calc(100vh-64px)] flex items-center justify-center">
      <div className="h-[472px] w-[627px] flex flex-col gap-16">
        <div>
          <div className="w-full flex justify-center">
            <MdOutlineEditNote size={70} color="gray" />
          </div>
          <div className="mt-4 flex flex-col gap-4">
            <h1 className="text-center text-4xl font-bold text-gray-800">
              Sentence Construction
            </h1>
            <p className="text-center text-gray-500">
              Select the correct words to complete the sentence by arranging{" "}
              <br /> the provided options by right order.
            </p>
          </div>
        </div>
        <div className="w-full grid grid-cols-3 place-items-center pl-16 pr-10">
          <div className="flex flex-col gap-3 items-center">
            <h2 className="text-md font-semibold text-gray-700">
              Time Per Question
            </h2>
            <p className="text-gray-800"> 30 sec</p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <h2 className="text-md font-semibold text-gray-700">
              Total Questions
            </h2>
            <p className="text-gray-800"> 10</p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <h2 className="text-md font-semibold text-gray-700">Coins</h2>
            <div className="flex gap-2 items-center">
              <div className="h-4 w-4 rounded-full bg-yellow-300"></div>
              <p>0</p>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="flex gap-4">
            <button className="w-[140px] h-[42px] p-2 bg-transparent rounded-lg border-2 border-[#453FE1] text-[#453FE1]">
              Back
            </button>
            <button
              className="w-[140px] h-[42px] p-2  bg-[#453FE1] text-white rounded-lg cursor-pointer"
              onClick={() => {
                navigate("/test");
              }}
            >
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
