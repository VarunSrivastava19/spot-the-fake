import { Row } from "react-bootstrap";
import { useEffect, useId, useState } from "react";
import Image from "../Image";
import randomize from "../../utils/randomizer";

function Displayer({ currentPair, handleImgSelect, selectedImg }) {
  const [imgTypes, setImgTypes] = useState(["real", "fake"]);
  useEffect(() => {
    const randomized = randomize();
    setImgTypes(randomized);

    return () => [];
  }, [currentPair]);
  const rid = useId();
  return (
    <Row xs={1} md={1} lg={2} className="g-4 mt-4">
      <Image
        key={`${rid}-correct`}
        id={`${rid}-correct`}
        name={`${imgTypes[0]}-img`}
        imgNo={{ ...currentPair }}
        type={imgTypes[0]}
        onSelect={() => handleImgSelect("correct")}
        isSelected={selectedImg === "correct"}
        alt="Website's correct screenshot"
      />
      <Image
        key={`${rid}-fake`}
        id={`${rid}-fake`}
        name={`${imgTypes[1]}-img`}
        imgNo={currentPair}
        type={imgTypes[1]}
        onSelect={() => handleImgSelect("fake")}
        isSelected={selectedImg === "fake"}
        alt="Website's fake screenshot"
      />
    </Row>
  );
}

export default Displayer;
