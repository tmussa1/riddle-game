import { Card } from "react-bootstrap";
import { Riddle } from "./RiddleData";
import { useEffect, useState } from "react";

function RiddleCard({ riddle, answer, index }: Riddle) {
  const [isRiddle, setIsRiddle] = useState<boolean>(true);

  function toggleAnswer(): void {
    setIsRiddle(!isRiddle);
  }

  useEffect(() => {
    setIsRiddle(true);
  }, [index]);

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
            {isRiddle === true && (
              <h1>
                <i>{riddle}</i>
              </h1>
            )}
            {isRiddle === false && (
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
