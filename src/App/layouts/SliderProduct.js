import React from "react";

import Slider from "react-slick";
import { Container } from "reactstrap";

import Product1 from "../../assets/images/product_1.jpg";
import Product2 from "../../assets/images/product_2.jpg";
import Product3 from "../../assets/images/product_3.jpg";
import Product4 from "../../assets/images/product_4.jpg";
import Product5 from "../../assets/images/product_5.jpg";
import Product6 from "../../assets/images/product_6.jpg";
import Product8 from "../../assets/images/product_8.png";
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

function SliderProduct() {
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
            <div className="product" style={{ width: "30rem" }}>
              <img src={Product1} />
              <div className="product__content">
                <p className="product__content-name">DEBORA</p>
                <p className="product__content-desc">Mỹ phẩm Châu Âu</p>
                <p className="product__content-price">
                  <span>355.000 </span> <span className="currency">đ</span>{" "}
                  450.000<span className="currency">đ</span>
                </p>
              </div>
              <div className="product__action">
                <button className="product__action-add">Mua hàng</button>
                <button className="product__action-like">
                  <HeartIcon />
                </button>
                <button className="product__action-recycle">
                  <Recycle />
                </button>
              </div>
            </div>
            <div className="product" style={{ width: "30rem" }}>
              <img src={Product2} />
              <div className="product__content">
                <p className="product__content-name">DEBORA</p>
                <p className="product__content-desc">Mỹ phẩm Châu Âu</p>
                <p className="product__content-price">
                  <span>355.000 </span> <span className="currency">đ</span>{" "}
                  450.000<span className="currency">đ</span>
                </p>
              </div>
              <div className="product__action">
                <button className="product__action-add">Mua hàng</button>
                <button className="product__action-like">
                  <HeartIcon />
                </button>
                <button className="product__action-recycle">
                  <Recycle />
                </button>
              </div>
            </div>
            <div className="product" style={{ width: "30rem" }}>
              <img src={Product3} />
              <div className="product__content">
                <p className="product__content-name">DEBORA</p>
                <p className="product__content-desc">Mỹ phẩm Châu Âu</p>
                <p className="product__content-price">
                  <span>355.000 </span> <span className="currency">đ</span>{" "}
                  450.000<span className="currency">đ</span>
                </p>
              </div>
              <div className="product__action">
                <button className="product__action-add">Mua hàng</button>
                <button className="product__action-like">
                  <HeartIcon />
                </button>
                <button className="product__action-recycle">
                  <Recycle />
                </button>
              </div>
            </div>
            <div className="product" style={{ width: "30rem" }}>
              <img src={Product4} />
              <div className="product__content">
                <p className="product__content-name">DEBORA</p>
                <p className="product__content-desc">Mỹ phẩm Châu Âu</p>
                <p className="product__content-price">
                  <span>355.000 </span> <span className="currency">đ</span>{" "}
                  450.000<span className="currency">đ</span>
                </p>
              </div>
              <div className="product__action">
                <button className="product__action-add">Mua hàng</button>
                <button className="product__action-like">
                  <HeartIcon />
                </button>
                <button className="product__action-recycle">
                  <Recycle />
                </button>
              </div>
            </div>
            <div className="product" style={{ width: "30rem" }}>
              <img src={Product5} />
              <div className="product__content">
                <p className="product__content-name">DEBORA</p>
                <p className="product__content-desc">Mỹ phẩm Châu Âu</p>
                <p className="product__content-price">
                  <span>355.000 </span> <span className="currency">đ</span>{" "}
                  450.000<span className="currency">đ</span>
                </p>
              </div>
              <div className="product__action">
                <button className="product__action-add">Mua hàng</button>
                <button className="product__action-like">
                  <HeartIcon />
                </button>
                <button className="product__action-recycle">
                  <Recycle />
                </button>
              </div>
            </div>
            <div className="product" style={{ width: "30rem" }}>
              <img src={Product6} />
              <div className="product__content">
                <p className="product__content-name">DEBORA</p>
                <p className="product__content-desc">Mỹ phẩm Châu Âu</p>
                <p className="product__content-price">
                  <span>355.000 </span> <span className="currency">đ</span>{" "}
                  450.000<span className="currency">đ</span>
                </p>
              </div>
              <div className="product__action">
                <button className="product__action-add">Mua hàng</button>
                <button className="product__action-like">
                  <HeartIcon />
                </button>
                <button className="product__action-recycle">
                  <Recycle />
                </button>
              </div>
            </div>
            <div className="product" style={{ width: "30rem" }}>
              <img src={Product8} />
              <div className="product__content">
                <p className="product__content-name">DEBORA</p>
                <p className="product__content-desc">Mỹ phẩm Châu Âu</p>
                <p className="product__content-price">
                  <span>355.000 </span> <span className="currency">đ</span>{" "}
                  450.000<span className="currency">đ</span>
                </p>
              </div>
              <div className="product__action">
                <button className="product__action-add">Mua hàng</button>
                <button className="product__action-like">
                  <HeartIcon />
                </button>
                <button className="product__action-recycle">
                  <Recycle />
                </button>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </Container>
  );
}

export default SliderProduct;
