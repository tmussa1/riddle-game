import { useState } from "react";
import "./App.css";
import RiddleCard from "./RiddleCard";
import { RiddleData } from "./RiddleData";
import ResultPopup from "./ResultPopup";

const length = 25;

function App() {
  let ind: number = Math.floor(Math.random() * length);
  const [index, setIndex] = useState<number>(ind);
  const [history, setHistory] = useState<number[]>([ind]);
  const [correctAnswer, setCorrectAnswer] = useState<string>(
    RiddleData[ind].answer.toUpperCase()
  );
  const [answer, setAnswer] = useState<string>("");
  const [answerSubmitted, setAnswerSubmitted] = useState<boolean>(false);
  const [correct, setCorrect] = useState<boolean>(false);

  function generateRiddle(): void {
    ind = Math.floor(Math.random() * length);
    setIndex(ind);
    setCorrectAnswer(RiddleData[ind].answer.toUpperCase());
    setHistory([...history, ind]);
  }

  function submitAnswer() {
    if (correctAnswer.includes(answer) || answer.includes(correctAnswer)) {
      setCorrect(true);
    } else {
      setCorrect(false);
    }
    setAnswerSubmitted(true);
  }

  function handleAnswer(event): void {
    event.preventDefault();
    setAnswer(event.target.value.toUpperCase());
  }

  return (
    <>
      ({!answerSubmitted} ?
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          background: "#e7eaf6",
        }}
      >
        <div>
          <h1>The Ultimate Riddle Game You Will Learn to Love Playing</h1>
        </div>
      </div>
      <div
        style={{
          background: "#99b27f",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h3>How good are you at riddles? Flip and Play Away</h3>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "32px",
        }}
      >
        <RiddleCard
          riddle={RiddleData[index].riddle}
          answer={RiddleData[index].answer}
          index={index}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "32px",
        }}
      >
        <input
          type="text"
          className="form-control col-3"
          id="answer"
          placeholder="Type Answer Here"
          onChange={handleAnswer}
        />
        <div className="col-2"></div>
        <button
          type="button"
          className="btn btn-primary btn-lg"
          onClick={submitAnswer}
        >
          Submit Answer
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "32px",
        }}
      >
        <button
          type="button"
          className="btn btn-outline-danger btn-lg"
          onClick={generateRiddle}
        >
          Shuffle Riddles
        </button>
      </div>
      :{" "}
      <ResultPopup
        correct={correct}
        open={answerSubmitted}
        setAns={setAnswerSubmitted}
      />
      )
    </>
  );
}

export default App;
