import React from 'react'
import { Container } from 'reactstrap';

import { ReactComponent as Plane} from "../../../assets/icons/plane.svg"
import { ReactComponent as Gift} from "../../../assets/icons/gift.svg"
import { ReactComponent as Star} from "../../../assets/icons/star.svg"


function Voucher() {
    return (
        <Container className="voucher">
            <div className="voucher__detail">
                <Plane className="voucher__detail-icon" />
                <p className="voucher__detail-desc">Miễn phí vận chuyển</p>
            </div>
            <div className="voucher__detail">
                <Gift className="voucher__detail-icon" />
                <p className="voucher__detail-desc">Nhận ngay quà tặng trị giá 350.000đ</p>
            </div>
            <div className="voucher__detail">
                <Star className="voucher__detail-icon" />
                <p className="voucher__detail-desc">Giảm 30% cho đơn hàng trên 5.000.000đ</p>
            </div>
        </Container>
    )
}

export default Voucher
