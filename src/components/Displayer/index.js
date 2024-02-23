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
        key={`${rid}-${imgTypes[0]}`}
        id={`${rid}-${imgTypes[0]}`}
        name={`${imgTypes[0]}-img`}
        imgNo={{ ...currentPair }}
        type={imgTypes[0]}
        onSelect={() => handleImgSelect(imgTypes[0])}
        isSelected={selectedImg === imgTypes[0]}
        alt="Website's first screenshot"
      />
      <Image
        key={`${rid}-${imgTypes[1]}`}
        id={`${rid}-${imgTypes[1]}`}
        name={`${imgTypes[1]}-img`}
        imgNo={currentPair}
        type={imgTypes[1]}
        onSelect={() => handleImgSelect(imgTypes[1])}
        isSelected={selectedImg === imgTypes[1]}
        alt="Website's second screenshot"
      />
    </Row>
  );
}

export default Displayer;
