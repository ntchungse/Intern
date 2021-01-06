import React from "react";

import Slider from "react-slick";

function SliderProduct() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <div className="product__container">
      <div className="product__heading">
        <a href="#">Sản phẩm mới</a>
        <a href="#" className="active">
          Sản phẩm bán chạy
        </a>
        <a href="#">Sản phẩm đặc biệt</a>
        <div className="product__heading-line">
          <span>//////////</span>
        </div>
      </div>
      <div className="product__category">
        <ul className="product__category-list">
          <li className="product__category-item">
            <a href="#" className="product__category-link">
              Mỹ phẩm
            </a>
          </li>
          <li className="product__category-item">
            <a href="#" className="product__category-link">
              Chăm sóc da
            </a>
          </li>
          <li className="product__category-item">
            <a href="#" className="product__category-link">
              Dành cho tóc
            </a>
          </li>
          <li className="product__category-item">
            <a href="#" className="product__category-link">
              Nước hoa
            </a>
          </li>
          <li className="product__category-item">
            <a href="#" className="product__category-link">
              Trang sức
            </a>
          </li>
          <li className="product__category-item">
            <a href="#" className="product__category-link">
              Quà tặng
            </a>
          </li>
        </ul>
      </div>
      <div className="product__slider">
      <div>
        <h2>Center Mode</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
      </div>
    </div>
  );
}

export default SliderProduct;
