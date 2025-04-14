type buttonProps = {
  buttonText: string;
  setBlanks: React.Dispatch<React.SetStateAction<string[]>>;
  blanks: string[];
};
const Button: React.FC<buttonProps> = ({ buttonText, setBlanks, blanks }) => {
  const addBlanks = () => {
    const oldArray = [...blanks];
    for (let i = 0; i < oldArray.length; i++) {
      if (oldArray[i] === "") {
        oldArray[i] = buttonText;
        break;
      }
    }
    setBlanks(oldArray);
  };
  return (
    <button
      className={`${
        blanks.includes(buttonText) ? "hidden" : "block"
      } px-3 py-1 bg-white border-2 border-[#BFC6C6] rounded-lg cursor-pointer`}
      onClick={addBlanks}
    >
      {buttonText}
    </button>
  );
};

export default Button;
