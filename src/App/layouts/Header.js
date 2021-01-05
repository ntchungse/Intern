import React from "react";

import Logo from "../../assets/images/logo.png";
import SearchIcon from "../../assets/icons/search.png";
import CartIcon from "../../assets/icons/shopping-cart.png";
import DropdownArrow from "../../assets/icons/dropdown-arrow.png";
import NavMenuIcon from "../../assets/icons/nav-menu.png";

import { Container, Row,Col } from "reactstrap";

function Header() {

  return (
    <div className="header">
      <Container>
        <Row className="header__row">
          <Col xl="2" className=" header__logo">
            <img src={Logo} alt="Logo" />
          </Col>
          <Col xl="8">
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <a className="header__nav-link" href="#">
                  Trang Chủ
                </a>
              </li>
              <li className="header__nav-item">
                <a className="header__nav-link" href="#">
                  Giới thiệu
                </a>
              </li>
              <li className="header__nav-item">
                <a className="header__nav-link" href="#">
                  Sản phẩm
                  <img src={DropdownArrow} alt="dropdown arrow" />
                </a>
                <div className="dropdown">
                  <div class="arrow-up"></div>
                  <div className="dropdown__content">
                    <ul className="dropdown__list">
                      <p>Dưỡng da</p>
                      <li className="dropdown__list-item">
                        <a className="dropdown__list-link" href="#">
                          Áo khoác
                        </a>
                      </li>
                      <li className="dropdown__list-item">
                        <a className="dropdown__list-link" href="#">
                          Bộ áo liền quần
                        </a>
                      </li>
                      <li className="dropdown__list-item">
                        <a className="dropdown__list-link" href="#">
                          Dresses
                        </a>
                      </li>
                      <li className="dropdown__list-item">
                        <a className="dropdown__list-link" href="#">
                          Quần / Váy
                        </a>
                      </li>
                      <li className="dropdown__list-item">
                        <a className="dropdown__list-link" href="#">
                          Quần short
                        </a>
                      </li>
                      <li className="dropdown__list-item">
                        <a className="dropdown__list-link" href="#">
                          Quần jean
                        </a>
                      </li>
                      <li className="dropdown__list-item">
                        <a className="dropdown__list-link" href="#">
                          Đồ đan
                        </a>
                      </li>
                      <li className="dropdown__list-item">
                        <a className="dropdown__list-link" href="#">
                          Áo nỉ
                        </a>
                      </li>
                    </ul>
                    <ul className="dropdown__list">
                      <p>Nước hoa</p>
                      <li className="dropdown__list-item">
                        <a className="dropdown__list-link" href="#">
                          Áo cánh / Áo sơ mi
                        </a>
                      </li>
                      <li className="dropdown__list-item">
                        <a className="dropdown__list-link" href="#">
                          Túi xách & Ba lô
                        </a>
                      </li>
                      <li className="dropdown__list-item">
                        <a className="dropdown__list-link" href="#">
                          Khăn quàng cổ và Foulards
                        </a>
                      </li>
                      <li className="dropdown__list-item">
                        <a className="dropdown__list-link" href="#">
                          Dệt kira Hats & Gloves
                        </a>
                      </li>
                      <li className="dropdown__list-item">
                        <a className="dropdown__list-link" href="#">
                          Vớ & Socks
                        </a>
                      </li>
                      <li className="dropdown__list-item">
                        <a className="dropdown__list-link" href="#">
                          Jewerly
                        </a>
                      </li>
                      <li className="dropdown__list-item">
                        <a className="dropdown__list-link" href="#">
                          Bị bảo vệ
                        </a>
                      </li>
                      <li className="dropdown__list-item">
                        <a className="dropdown__list-link" href="#">
                          Gìay
                        </a>
                      </li>
                    </ul>
                    <ul className="dropdown__list">
                      <p>Trang sức</p>
                      <li className="dropdown__list-item">
                        <a className="dropdown__list-link" href="#">
                          Áo cánh / Áo sơ mi
                        </a>
                      </li>
                      <li className="dropdown__list-item">
                        <a className="dropdown__list-link" href="#">
                          Túi xách & Ba lô
                        </a>
                      </li>
                      <li className="dropdown__list-item">
                        <a className="dropdown__list-link" href="#">
                          Khăn quàng cổ và Foulards
                        </a>
                      </li>
                      <li className="dropdown__list-item">
                        <a className="dropdown__list-link" href="#">
                          Dệt kira Hats & Gloves
                        </a>
                      </li>
                      <li className="dropdown__list-item">
                        <a className="dropdown__list-link" href="#">
                          Vớ & Socks
                        </a>
                      </li>
                      <li className="dropdown__list-item">
                        <a className="dropdown__list-link" href="#">
                          Jewerly
                        </a>
                      </li>
                      <li className="dropdown__list-item">
                        <a className="dropdown__list-link" href="#">
                          Bị bảo vệ
                        </a>
                      </li>
                      <li className="dropdown__list-item">
                        <a className="dropdown__list-link" href="#">
                          Gìay
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="header__nav-item">
                <a className="header__nav-link" href="#">
                  Tin tức
                </a>
              </li>
              <li className="header__nav-item">
                <a className="header__nav-link" href="#">
                  Bản đồ
                </a>
              </li>
              <li className="header__nav-item">
                <a className="header__nav-link" href="#">
                  Liên hệ
                </a>
              </li>
            </ul>
          </nav>
          </Col>
          <Col xl="2">
          <div className="header__icon">
            <img src={CartIcon} alt="cart icon" />
            <img src={SearchIcon} alt="search icon" />
            <img src={NavMenuIcon} alt="navbar icon"/>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
