import React, { useState } from "react";

import { ReactComponent as Close } from "../../assets/icons/close.svg";

function Cart({ closeCart }) {
  const [cart, setCart] = useState(
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  );
  const addQuantity = (id) => {
    cart.map((p) => {
      if (p._id === id) {
        p.quantity++;
      }
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    setCart(JSON.parse(localStorage.getItem("cart")));
  };
  const subtractQuantity = (id) => {
    cart.map((p) => {
      if (p._id === id) {
        p.quantity--;
      }
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    setCart(JSON.parse(localStorage.getItem("cart")));
  };
  const removeItem = (id) => {
    let cartTemp = cart.filter((p) => p._id !== id);
    localStorage.setItem("cart", JSON.stringify(cartTemp));
    setCart(JSON.parse(localStorage.getItem("cart")));
  };
  return (
    <>
      <div className="overlay" onClick={closeCart}></div>
      <div className="cart">
        {cart.length === 0 ? (
          <div className="cart__header">
            Giỏ hàng trống
            <Close onClick={closeCart} />
          </div>
        ) : (
          <div className="cart__header">
            Bạn có {cart.length} đơn hàng <Close onClick={closeCart} />
          </div>
        )}
        {cart.length !== 0
          ? cart.map((item) => (
              <div className="cart__items" key={item._id}>
                <img src={item.imagePath.default} />
                <div className="cart__items-desc">
                  <p>{item.name}</p>
                  <p>{item.desc}</p>
                  <p>
                    {item.price[0]}
                    <span className="currency">đ</span> x {item.quantity}
                  </p>
                  <div className="cart__items-btngr">
                    <button
                      className="cart__items-btn"
                      onClick={() => addQuantity(item._id)}
                    >
                      +
                    </button>
                    {item.quantity !== 1 && (
                      <button
                        className="cart__items-btn"
                        onClick={() => subtractQuantity(item._id)}
                      >
                        -
                      </button>
                    )}
                    <button
                      className="cart__items-btn"
                      onClick={() => removeItem(item._id)}
                    >
                      x
                    </button>
                  </div>
                </div>
              </div>
            ))
          : null}
        {cart.length !== 0 && (
          <div className="cart__total">
            Tổng tiền là:{" "}
            {cart.reduce((a, b) => a + Number(b.price[0]) * b.quantity, 0) *
              1000}
            <span className="currency">đ</span>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
