import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

type ResultPopup = {
  correct: boolean;
  open: boolean;
  setAns: any;
};

function ResultPopup({ correct, open, setAns }: ResultPopup) {
  const [_, setOpen] = useState<boolean>(open);

  function toggleOpen() {
    setOpen(false);
    setAns(false);
  }

  return (
    <>
      <Modal show={open} onHide={toggleOpen}>
        <Modal.Header closeButton>
          <Modal.Title>Excited to see your results?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5
            className="modal-title"
            style={{ color: correct ? "green" : "red" }}
          >
            {correct
              ? `Congratulations, You Got That Right!`
              : `Sorry, That Was Wrong!`}
          </h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleOpen}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ResultPopup;
