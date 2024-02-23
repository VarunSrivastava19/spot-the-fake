import { useEffect, useRef, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Row } from "react-bootstrap";
import AppBar from "./components/AppBar";
import Timer from "./components/Timer";
import Displayer from "./components/Displayer";
import ImgList from "./utils/imagePairs";
import Jumbo from "./components/ViewScore";
import StyledButton from "./components/Button";
import FootBar from "./components/FootBar";
import Page from "./components/Page";
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
          setHasScored(false);
        } else {
          clearTimeout(timeout.current);
          setNext("View Score");
          setQuizOver(true);
          setHasScored(false);
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
      setNext("View Score");
      setQuizOver(true);
      setHasScored(false);
    }
  };

  const handleImgSelect = (type) => {
    setSelectedImg(type);
    if (type === "fake" && !hasScored) {
      setScore((prev) => prev + 1);
      setHasScored(true);
    } else {
      if (hasScored && type !== "fake") {
        setScore((prev) => prev - 1);
        setHasScored(false);
      }
    }
  };

  const handleReset = () => {
    /*
      To store the scores ->
      in localstorage of browser
      add funct here
    */
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
      <AppBar />
      {quizOver ? (
        <Jumbo className="p-5" score={score} onReset={handleReset} />
      ) : (
        <Page>
          <Row
            xs={1}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="p-5">
              <Timer timeRemaining={timeRemaining} />
            </div>
            <div>
              <p className="text-center text-wrap fs-4">
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
              <StyledButton stylecolor="#ceaae4" onClick={handleNext}>
                {next}
              </StyledButton>
            </div>
          </Row>
        </Page>
      )}
      <FootBar />
    </>
  );
}

export default App;
