import { useEffect, useRef, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import AppBar from "./components/AppBar/index,";
import Timer from "./components/Timer";
import Displayer from "./components/Displayer";
import ImgList from "./utils/imagePairs";
import ViewScore from "./components/ViewScore";

const imageList = new ImgList();
const imgs = imageList.images;

function App() {
  const handleClick = (e, type) => {
    e.preventDefault();
    const next =
      "If All Image pairs have been displayed : Show score screen/page, else next image pair and increment counter.";
    const reset =
      "Reload the app while resetting the order, only show this button on Score screen.";
    alert(type === "next" ? next : reset);
  };
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

  return (
    <>
      <AppBar currentPair={currentPair} />
      {quizOver ? (
        <ViewScore score={score} />
      ) : (
        <Container>
          <div>
            <Timer timeRemaining={timeRemaining} />
          </div>
          Select the Counterfeit website screenshot from the following image
          pairs.
          <Displayer
            currentPair={imgs[currentPair]}
            handleImgSelect={handleImgSelect}
            selectedImg={selectedImg}
          />
          <div>
            <button onClick={(e) => handleNext()}>{next}</button>
          </div>
          <div>
            <button onClick={(e) => handleClick(e, "reset")}>Reset</button>
          </div>
        </Container>
      )}
    </>
  );
}

export default App;
