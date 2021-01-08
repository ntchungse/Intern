import React from "react";
import { Container } from "reactstrap";

import Phone from "../../assets/icons/phone.svg";
import Email from "../../assets/icons/email.svg";
import Fax from "../../assets/icons/fax.svg";
import Map from "../../assets/icons/map.svg";
import Paypal from "../../assets/images/paypal.png";

function Footer() {
  return (
    <div className="footer">
      <Container>
        <div className="footer__top">
          <div className="top__item">
            <p>LIÊN HỆ VỚI CHÚNG TÔI</p>
            <ul className="top__list">
              <li className="top__list-item">
                <a href="#" className="top__list-link">
                  <img src={Map} />
                  Tầng 4, Tòa nhà Hanoi Group Số 442 Đội Cấn, P.Cống Vị, Q. Ba
                  Đình, Hà Nội
                </a>
              </li>
              <li className="top__list-item">
                <a href="#" className="top__list-link">
                  <img src={Phone} />
                  (04) 6674 2332
                </a>
                <span>-</span>
                <a className="top__list-link" href="#">
                  <img src={Fax} />
                  (04) 3786 8904
                </a>
              </li>
              <li className="top__list-item">
                <a href="#" className="top__list-link">
                  <img src={Phone} />
                  (08) 6680 9686
                </a>
                <span>-</span>
                <a className="top__list-link" href="#">
                  <img src={Email} />
                  Support@bizweb.vn
                </a>
              </li>
            </ul>
          </div>
          <div className="top__item">
            <p>CHUYỂN HÀNG</p>
            <ul className="top__list">
              <li className="top__list-item">
                <a href="#" className="top__list-link">
                  Mua sắm trực tuyến
                </a>
              </li>
              <li className="top__list-item">
                <a href="#" className="top__list-link">
                  Đến từ chúng tôi gửi đến
                </a>
              </li>
              <li className="top__list-item">
                <a href="#" className="top__list-link">
                  Chính sách vận chuyển
                </a>
              </li>
              <li className="top__list-item">
                <a href="#" className="top__list-link">
                  Vận chuyển thông tin
                </a>
              </li>
            </ul>
          </div>
          <div className="top__item">
            <p>HỖ TRỢ</p>
            <ul className="top__list">
              <li className="top__list-item">
                <a href="#" className="top__list-link">
                  Câu chuyện của chúng tôi
                </a>
              </li>
              <li className="top__list-item">
                <a href="#" className="top__list-link">
                  Thanh toán an toàn
                </a>
              </li>
              <li className="top__list-item">
                <a href="#" className="top__list-link">
                  Tùy chọn vận chuyển
                </a>
              </li>
              <li className="top__list-item">
                <a href="#" className="top__list-link">
                  Chính sách vận chuyển
                </a>
              </li>
            </ul>
          </div>
          <div className="top__item">
            <p>THÔNG TIN</p>
            <ul className="top__list">
              <li className="top__list-item">
                <a href="#" className="top__list-link">
                  về Chúng Tôi
                </a>
              </li>
              <li className="top__list-item">
                <a href="#" className="top__list-link">
                  Điều khoản & điều kiện
                </a>
              </li>
              <li className="top__list-item">
                <a href="#" className="top__list-link">
                  Chính Sách Riêng Tư
                </a>
              </li>
              <li className="top__list-item">
                <a href="#" className="top__list-link">
                  Đơn đặt hàng và Returns
                </a>
              </li>
            </ul>
          </div>
          <div className="top__item">
            <p>MY ACCOUNT</p>
            <ul className="top__list">
              <li className="top__list-item">
                <a href="#" className="top__list-link">
                  Xem Giỏ Hàng
                </a>
              </li>
              <li className="top__list-item">
                <a href="#" className="top__list-link">
                  Sản phẩm yêu thích
                </a>
              </li>
              <li className="top__list-item">
                <a href="#" className="top__list-link">
                  Kiểm tra
                </a>
              </li>
              <li className="top__list-item">
                <a href="#" className="top__list-link">
                  Theo dõi đặt hàng của tôi
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <div className="footer__bot">
        <p>© Copyright 2008-2014 DKT Technology JSC</p>
        <img src={Paypal} />
      </div>
    </div>
  );
}

export default Footer;
