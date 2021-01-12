import React from "react";

import { Container} from "reactstrap";

import Woman from "../../../assets/images/woman.png";
import Product from "../../../assets/images/product-banner.png";

function Banner() {
  return (
    <div className="banner">
      <Container className="banner__wrap">
        <div className="banner__row">
          <div className="banner__content">
            <div className="content">
              <img src={Product} className="content__image" alt="product" />
              <h2 className="content__heading">Green Vera</h2>
              <p className="content__desc">
                Sản phẩm tinh dầu dưỡng da mới của Mandala
              </p>
              <p className="content__price">
                GIÁ CHỈ 750.000 <span>đ</span>
              </p>
              <a className="content__link" href="#">MUA HÀNG</a>
            </div>
          </div>
          <div className="banner__image">
            <img src={Woman} alt="woman" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Banner;
