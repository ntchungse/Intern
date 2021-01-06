import React from "react";

import { Container } from "reactstrap";
import ImageTopLeft1 from "../../assets/images/image-top-left-1.png";
import ImageTopLeft2 from "../../assets/images/image-top-left-2.png";
import ImageTopRight from "../../assets/images/image-top-right.png";
import { ReactComponent as PlayIcon } from "../../assets/icons/play-button.svg";
import ImageBotLeft from "../../assets/images/image-bot-left.jpg";
import ImageBotRight1 from "../../assets/images/image-bot-right-1.png";
import ImageBotRight2 from "../../assets/images/image-bot-right-2.png";

function Images() {
  return (
    <Container>
      <div className="image__top">
        <div className="image__top-left">
          <img src={ImageTopLeft1} />
          <img src={ImageTopLeft2} />
        </div>
        <div className="image__top-right">
          <img src={ImageTopRight} />
          <PlayIcon />
        </div>
      </div>
      <div className="image__bot">
        <div className="image__bot-left">
          <img src={ImageBotLeft} />
        </div>
        <div className="image__bot-right">
          <img src={ImageBotRight1} />
          <img src={ImageBotRight2} />
        </div>
      </div>
    </Container>
  );
}

export default Images;
