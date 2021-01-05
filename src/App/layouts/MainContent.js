import React from "react";

import { Container, Row } from "reactstrap";

function MainContent() {
  return (
    <div className="mainContent">
      <Container>
        <div className="content">
          <h2 className="main__heading">Green Vera</h2>
          <p className="content__desc">
            Sản phẩm tinh dầu dưỡng da mới nhất của mandala
          </p>
          <p className="content__price">
            Gía chỉ 750.000 <span>đ</span>
          </p>
          <a className="content__order">Mua hàng</a>
        </div>
      </Container>
    </div>
  );
}

export default MainContent;
