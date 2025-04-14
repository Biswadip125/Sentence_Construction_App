import Header from "./components/Header";
import HeroPage from "./components/HeroPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TestScreen from "./components/TestPage/TestScreen";
import ResultPage from "./components/ResultPage/ResultPage";
import { AnswersContextProvider } from "./context/answerContext";
function App() {
  return (
    <AnswersContextProvider>
      <Router>
        <div className="w-full min-h-screen flex flex-col ">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <HeroPage />
                </>
              }
            />
            <Route path="/test" element={<TestScreen />} />
            <Route
              path="/result"
              element={
                <>
                  <Header />
                  <ResultPage />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </AnswersContextProvider>
  );
}

export default App;
