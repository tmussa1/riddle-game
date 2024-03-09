import { Card } from "react-bootstrap";
import { Riddle } from "./RiddleData";
import { useState } from "react";

function RiddleCard({ riddle, answer, isRiddleProp }: Riddle) {
  const [isRiddle, setIsRiddle] = useState<boolean>(true);
  const [isRiddleProp1, setIsRiddleProp1] = useState<boolean | undefined>(
    isRiddleProp
  );

  function toggleAnswer(): void {
    setIsRiddle(!isRiddle);
    setIsRiddleProp1(!isRiddleProp1);
  }

  return (
    <div
      style={{
        margin: "64px",
        padding: "64px",
        background: isRiddle ? "#ff9a3c" : "#eb2632",
        display: "flex",
        justifyContent: "center",
      }}
      onClick={toggleAnswer}
    >
      <Card style={{ color: isRiddle ? "#ff9a3c" : "#eb2632" }}>
        <Card.Body>
          <Card.Text>
            {isRiddle && (
              <h1>
                <i>{riddle}</i>
              </h1>
            )}
            {!isRiddle && !isRiddleProp1 && (
              <h1>
                <b>{answer}</b>
              </h1>
            )}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default RiddleCard;
