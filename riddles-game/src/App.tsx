import { useState } from "react";
import "./App.css";
import RiddleCard from "./RiddleCard";
import { RiddleData } from "./RiddleData";

function App() {
  const [index, setIndex] = useState<number>(Math.floor(Math.random() * 25));

  function generateRiddle(): void {
    setIndex(Math.floor(Math.random() * 25));
  }

  return (
    <>
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
        <button
          type="button"
          className="btn btn-outline-success btn-lg"
          onClick={generateRiddle}
        >
          Play Another Riddle
        </button>
      </div>
    </>
  );
}

export default App;
