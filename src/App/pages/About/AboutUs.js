import React from 'react';
import { Container } from 'reactstrap';
import AboutImg from '../../../assets/images/about.png';
import Logo from '../../../assets/images/logo.png';

function AboutUs() {
    return (
        <Container className="aboutUs">
            <h3 className="aboutUs__heading">VỀ CHÚNG TÔI</h3>
            <div className="aboutUs__content">
                <div className="content__img">
                    <img src={AboutImg} />
                </div>
                <div className="content__desc">
                    <img src={Logo} />
                    <p className="title">GIỚI THIỆU CHUNG VỀ MỸ PHẨM HANDMADE MANDALA</p>
                    <p className="desc">Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt. Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt.sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt.</p>
                    <a className="link" href="#">Xem thêm</a>
                </div>
            </div>
        </Container>
    )
}

export default AboutUs
