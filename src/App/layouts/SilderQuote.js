import React from "react";

import Slider from "react-slick";
import { Container } from "reactstrap";
import Woman from "../../assets/images/feedback_woman.png";
import Man from "../../assets/images/feedback_man.png";

function SilderQuote() {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div
        style={{
          position:"absolute",
          bottom:".5%",
          left: "11%",
          width: "20rem",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "8px",
          height: "8px",
          backgroundColor: "gray",
          opacity: ".7",
        }}
      >
      </div>
    )
  };
  return (
    <Container className="sliderQuote">
      <Slider {...settings}>
        <div className="sliderQuote__quote">
          <p className="quote__content">
            Vẫn là vẻ bề ngoài vô cùng đơn giản với các tông màu trắng, hồng làm
            chủ đạo nhưng lại tạo ra sức hút kỳ lạ với những ai cầm trên tay sản
            phẩm ấy! Với công nghệ cải tiến mới nhất, hảng Rohto
          </p>
          <div className="quote__feedback">
            <img className="quote__feedback-image" src={Woman} />
            <p className="quote__feedback-name">TUTILE <span>Giảm đốc phát trển sản phẩm</span></p>
          </div>
        </div>
        <div className="sliderQuote__quote">
          <p className="quote__content">
            Vẫn là vẻ bề ngoài vô cùng đơn giản với các tông màu trắng, hồng làm
            chủ đạo nhưng lại tạo ra sức hút kỳ lạ với những ai cầm trên tay sản
            phẩm ấy! Với công nghệ cải tiến mới nhất, hảng Rohto
          </p>
          <div className="quote__feedback">
            <img className="quote__feedback-image" src={Woman} />
            <p className="quote__feedback-name">TUTILE <span>Giảm đốc phát trển sản phẩm</span></p>
          </div>
        </div>
        <div className="sliderQuote__quote">
          <p className="quote__content">
            Vẫn là vẻ bề ngoài vô cùng đơn giản với các tông màu trắng, hồng làm
            chủ đạo nhưng lại tạo ra sức hút kỳ lạ với những ai cầm trên tay sản
            phẩm ấy! Với công nghệ cải tiến mới nhất, hảng Rohto
          </p>
          <div className="quote__feedback">
            <img className="quote__feedback-image" src={Man} />
            <p className="quote__feedback-name">TUTILE <span>Giảm đốc phát trển sản phẩm</span></p>
          </div>
        </div>
      </Slider>
    </Container>
  );
}

export default SilderQuote;
