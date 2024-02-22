import { useEffect, useRef, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Row } from "react-bootstrap";
import AppBar from "./components/AppBar/index,";
import Timer from "./components/Timer";
import Displayer from "./components/Displayer";
import ImgList from "./utils/imagePairs";
import ViewScore from "./components/ViewScore";
let imageList = new ImgList();
let imgs = imageList.images;
function App() {
  const [currentPair, setCurrentPair] = useState(0);
  const [score, setScore] = useState(0);
  const [hasScored, setHasScored] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [next, setNext] = useState("Next");
  const [quizOver, setQuizOver] = useState(false);
  const timeout = useRef();
  useEffect(() => {
    timeout.current = setTimeout(() => {
      if (timeRemaining >= 15) {
        if (currentPair + 1 < imgs.length) {
          setCurrentPair((prev) => prev + 1);
          setSelectedImg("");
          setTimeRemaining(0);
        } else {
          clearTimeout(timeout.current);
          setQuizOver(true);
          setHasScored(false);
          setNext("View Score");
        }
      } else {
        setTimeRemaining((prevTime) => prevTime + 1);
      }
    }, 1000);
    return () => clearTimeout(timeout.current);
  }, [timeRemaining, setTimeRemaining, currentPair, setCurrentPair]);
  const handleNext = () => {
    clearTimeout(timeout.current);
    if (currentPair + 1 < imgs.length) {
      setCurrentPair((prev) => prev + 1);
      setSelectedImg("");
      setTimeRemaining(0);
      setHasScored(false);
    } else {
      clearTimeout(timeout.current);
      setQuizOver(true);
      setNext("View Score");
    }
  };

  const handleImgSelect = (type) => {
    setSelectedImg(type);
    if (type === "fake" && !hasScored) {
      setScore((prev) => prev + 1);
      setHasScored(true);
      console.log(`Score Updated ${score}`);
    } else {
      if (hasScored && type !== "fake") {
        console.log("Real Image - decrement score for this pair, if it's 1");
        setScore((prev) => prev - 1);
        setHasScored(false);
      }
    }
  };

  const handleReset = () => {
    imageList = new ImgList();
    imgs = imageList.images;
    setCurrentPair(0);
    setSelectedImg("");
    setTimeRemaining(0);
    setScore(0);
    setHasScored(false);
    setNext("Next");
    setQuizOver(false);
  };

  return (
    <>
      <AppBar currentPair={currentPair} score={score} />
      <Container>
        {quizOver ? (
          <ViewScore className="p-5" score={score} onReset={handleReset} />
        ) : (
          <Row
            xs={1}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="p-5">
              <Timer timeRemaining={timeRemaining} />
            </div>
            <div>
              <p>
                Select the Counterfeit website screenshot from the following
                image pairs.
              </p>
            </div>
            <Displayer
              currentPair={imgs[currentPair]}
              handleImgSelect={handleImgSelect}
              selectedImg={selectedImg}
            />
            <div className="d-flex justify-content-center align-items-center p-5">
              <Button variant="outline-primary" onClick={handleNext}>
                {next}
              </Button>
            </div>
          </Row>
        )}
      </Container>
    </>
  );
}

export default App;
