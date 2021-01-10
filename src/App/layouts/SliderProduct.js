import React from "react";

import Slider from "react-slick";
import { Container } from "reactstrap";

import { ReactComponent as HeartIcon } from "../../assets/icons/heart.svg";
import { ReactComponent as Recycle } from "../../assets/icons/recycle.svg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, opacity: ".2" }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, opacity: ".2" }}
      onClick={onClick}
    />
  );
}

function SliderProduct({ product, addToCart }) {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 3,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          arrows: true,
          variableWidth: false,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          arrows: false,
          variableWidth: false,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          variableWidth: false,
          centerPadding: "50px",
        },
      },
    ],
  };
  return (
    <Container fluid={true} className="product__container">
      <div className="product__heading">
        <div className="product__heading-link">
          <a href="#">Sản phẩm mới</a>
        </div>

        <div className="product__heading-link">
          <a href="#" className="product__heading--active">
            Sản phẩm bán chạy
          </a>
          <span>///////////////</span>
        </div>

        <div className="product__heading-link">
          <a href="#">Sản phẩm đặc biệt</a>
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
          <Slider {...settings}>
            {product.map((product) => (
              <div
                className="product"
                key={product._id}
                style={{ width: "30rem" }}
              >
                <img src={product.imagePath.default} />
                <div className="product__content">
                  <p className="product__content-name">{product.name}</p>
                  <p className="product__content-desc">{product.desc}</p>
                  <p className="product__content-price">
                    <span>{product.price[0]} </span>{" "}
                    <span className="currency">đ</span> {product.price[1]}
                    <span className="currency">đ</span>
                  </p>
                </div>
                <div className="product__action">
                  <button className="product__action-add" onClick={() => addToCart(product)}>Mua hàng</button>
                  <button className="product__action-like">
                    <HeartIcon />
                  </button>
                  <button className="product__action-recycle">
                    <Recycle />
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </Container>
  );
}

export default SliderProduct;
