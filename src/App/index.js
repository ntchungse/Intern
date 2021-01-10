import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import Header from "./layouts/Header";
import Banner from "./layouts/Banner";
import Voucher from "./layouts/Voucher";
import Images from "./layouts/Images";
import SilderQuote from "./layouts/SilderQuote";
import SliderProduct from "./layouts/SliderProduct";
import SocialList from "./layouts/SocialList";
import AboutMe from "./layouts/AboutMe";
import Footer from "./layouts/Footer";
import Cart from "./layouts/Cart";
import { DataProduct } from "../DataProduct";

function HomePage() {
  const [data, setData] = useState({
    products: DataProduct,
  });
  const [openCart, setOpenCart] = useState(false);
  const handleOpenCart = () => {
    setOpenCart(true);
  };
  const handleCloseCart = () => {
    setOpenCart(false);
  };
  const handleAddToCart = (product) => {
    let cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    let alreadyInCart = false;
    cart.forEach((item) => {
      if (item._id === product._id) {
        item.quantity++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  return (
    <div className="home">
      <Header openCart={handleOpenCart} />
      {openCart && <Cart closeCart={handleCloseCart} />}
      <Banner />
      <Voucher />
      <Images />
      <SilderQuote />
      <SliderProduct product={data.products} addToCart={handleAddToCart} />
      <SocialList />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default HomePage;
