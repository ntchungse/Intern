import React from "react";
import {Container} from "reactstrap";

import Logo from "../../assets/images/logo.png";
import BlogImage from "../../assets/images/blog_2.png";

function AboutMe() {
  return (
    <Container className="aboutMe">
      <div className="aboutMe__infor">
        <div className="infor__company">
          <div className="heading">
            <h3>VỀ CHÚNG TÔI</h3>
            <span>//////////</span>
          </div>
          <div className="infor__company-desc">
            <img src={Logo} />
            <p className="desc__title">GIỚI THIỆU CHUNG VỀ MỸ PHẨM HANDMADE MANDALA</p>
            <p className="desc__content">
              Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ
              quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi bức,
              khi mà dân tình xô nhau đi tắm Free để giải nhiệt.Hi, chào các
              nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm
              nóng cái Blog này vào một ngày đầu hè nóng oi bức, khi mà dân tình
              xô nhau đi tắm Free để giải nhiệt.Hi, chào các nàng ... sau khá
              nhiều lời hứa hão thì hôm nay tớ quay lại hâm nóng cái Blog này
              vào một ngày đầu hè nóng oi bức, khi mà dân tình xô nhau đi tắm
              Free để giải nhiệt.
            </p>
            <a href="#">Xem thêm</a>
          </div>
        </div>
        <div className="infor__blog">
          <div className="heading">
            <h3>BLOG</h3>
            <span>//////////</span>
          </div>
          <div className="infor__blog-desc">
            <a className="infor__blog-desc-post" href="#">
              <img className="blog__img" src={BlogImage} />
              <p className="blog__title">REVIEW SON KEM BOURJOIS VELVET</p>
              <p className="blog__content">
                Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ
                quay lại hăm nóng cái Blog này vào một ngày đầu hè nóng oi bức,
                khi mà dân tình xô nhau đi tắm Free để giải nhiệt.
              </p>
            </a>
            <a className="infor__blog-desc-author" href="#">
              Bởi NamTran (27/05/2015)
            </a>
            <div className="infor__blog-more">
              <a className="infor__blog-more-read" href="#">
                Đọc thêm
              </a>
              <a className="infor__blog-more-comment" href="#">
                23 Bình luận
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutMe__detail"> 
        <div className="detail__email">
          <div className="heading">
            <h3>GỬI EMAIL CHO CHÚNG TÔI</h3>
            <span>//////////</span>
          </div>
          <input type="text" placeholder="Email của bạn" />
          <p>Gửi email để nhận những ưu đãi mới nhất</p>
          <button>Gửi</button>
        </div>
        <div className="detail__tags">
          <div className="heading">
            <h3>TAG SẢN PHẨM</h3>
            <span>//////////</span>
          </div>
          <div className="tags">
            <button className="tags__button">Đồng hồ</button>
            <button className="tags__button">Túi</button>
            <button className="tags__button">Phụ kiện</button>
            <button className="tags__button">Đồng hồ</button>
            <button className="tags__button">Túi</button>
            <button className="tags__button">Gìay</button>
            <button className="tags__button">Sandal</button>
            <button className="tags__button">Áo sơ mi</button>
            <button className="tags__button">Nước hoa</button>
            <button className="tags__button">Gìay</button>
          </div>
        </div>
      </div>
    </Container>
  );    
}

export default AboutMe;
