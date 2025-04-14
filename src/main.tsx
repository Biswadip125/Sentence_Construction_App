import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AnswersContextProvider } from "./context/answerContext.tsx";

createRoot(document.getElementById("root")!).render(
  <AnswersContextProvider>
    <App />
  </AnswersContextProvider>
);
