import { useNavigate } from "react-router-dom";
type ScoreComponentProps = {
  correctAnswers: number;
};
const ScoreComponent: React.FC<ScoreComponentProps> = ({ correctAnswers }) => {
  const navigate = useNavigate();
  return (
    <div className="w-[743px] h-[458px] flex flex-col justify-center gap-10 px-2 py-3">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="border-8 border-green-700 w-[150px] h-[150px] rounded-full flex justify-center ">
          <div className="flex flex-col gap-4 items-center justify-center">
            <p className="text-green-800 text-4xl">{correctAnswers}/10</p>
            <p className="text-green-800">Overall Score</p>
          </div>
        </div>
        <p className="text-center text-[#2A2D2D]">
          While you correctly formed several sentences, there are a couple of
          areas where <br /> improvement is needed. Pay close attention to
          sentence structure and word placement <br /> to ensure clarity and
          correctness. Review your responses below for more details.
        </p>
      </div>
      <div className="flex-1 w-full flex items-center justify-center">
        <button
          className="w-[270px] h-[54px] border-2 border-[#453FE1] text-[#453FE1] rounded-lg cursor-pointer"
          onClick={() => navigate("/")}
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};

export default ScoreComponent;
