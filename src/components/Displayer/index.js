import { Row } from "react-bootstrap";
import { useId } from "react";
import Image from "../Image";

function Displayer({ currentPair, handleImgSelect, selectedImg }) {
  const rid = useId();
  return (
    <Row xs={1} md={1} lg={2} className="g-4 mt-4">
      <Image
        key={`${rid}-correct`}
        id={`${rid}-correct`}
        name="correct-img"
        imgNo={{...currentPair}}
        type="real"
        onSelect={() => handleImgSelect("correct")}
        isSelected={selectedImg === "correct"}
        alt="Website's correct screenshot"
      />
      <Image
        key={`${rid}-fake`}
        id={`${rid}-fake`}
        name="fake-img"
        imgNo={currentPair}
        type="fake"
        onSelect={() => handleImgSelect("fake")}
        isSelected={selectedImg === "fake"}
        alt="Website's fake screenshot"
      />
    </Row>
  );
}

export default Displayer;
