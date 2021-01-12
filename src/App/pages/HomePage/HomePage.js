import React, { useState } from "react";

import Banner from "../HomePage/Banner";
import Voucher from "../HomePage/Voucher";
import Images from "../HomePage/Images";
import SilderQuote from "../HomePage/SilderQuote";
import SliderProduct from "../HomePage/SliderProduct";
import SocialList from "../HomePage/SocialList";
import AboutMe from "../HomePage/AboutMe";
import { DataProduct } from "../../../DataProduct";

function HomePage() {
  const [data, setData] = useState({
    products: DataProduct,
  });
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
      <Banner />
      <Voucher />
      <Images />
      <SilderQuote />
      <SliderProduct product={data.products} addToCart={handleAddToCart} />
      <SocialList />
      <AboutMe />
    </div>
  );
}

export default HomePage;
