import React, { useState } from "react";
import { ReactComponent as SvgIconMinus } from "../../imagefiles/icons/minus.svg";
import { ReactComponent as SvgPlus } from "../../imagefiles/icons/plus.svg";
// import Product1 from "../../imagefiles/images/product-1.jpg";
// import Product2 from "../../imagefiles/images/product-2.jpg";
import cardData from "../../data/cardData";

function Product({ id, setTotle, price, img, name }) {
  const [quantity, setQuantity] = useState(0);

  function handlePlus() {
    setQuantity(quantity + 1);
    setTotle((total) => total + price);
  }
  function handleMinus() {
    if (quantity === 0) return;
    setQuantity(quantity - 1);
    setTotle((total) => total - price);
  }
  return (
    <div
      className="product-container col col-12"
      data-count={quantity}
      data-price={price}
      key={id}
      id={id}
    >
      <img className="img-container" src={img} alt="" />
      <div className="product-info">
        <div className="product-name">{name}</div>
        <div className="product-control-container">
          <div className="product-control">
            <SvgIconMinus
              className="product-action minus"
              onClick={handleMinus}
            />
            <span className="product-count">{quantity}</span>
            <SvgPlus className="product-action plus" onClick={handlePlus} />
          </div>
        </div>
        <div className="price">{price}</div>
      </div>
    </div>
  );
}

function Price({ price, title }) {
  return (
    <section className="cart-info shipping col col-12">
      <div className="text">{title}</div>
      <div className="price">{price}</div>
    </section>
  );
}

function Cart() {
  const [total, setTotle] = useState(0);
  return (
    <section className="cart-container col col-lg-5 col-sm-12">
      <h3 className="cart-title">購物籃</h3>
      <section className="product-list col col-12" data-total-price="0">
        {cardData.map((card) => (
          <Product {...card} setTotle={setTotle} />
        ))}
      </section>
      <Price title="運費" price={"免費"} />
      <Price title="小計" price={total} />
    </section>
  );
}

export default Cart;
