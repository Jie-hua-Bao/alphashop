import React from "react";
import StepProgress from "./StepProgress";
import StepOne from "./Steps/StepOne";
import StepTwo from "./Steps/StepTwo";
import StepThree from "./Steps/StepThree";
import ProgressControl from "./ProgressControl";
import Cart from "./Cart";
import { useState } from "react";
import cardData from "../../data/cardData";
import { MainContext } from "../../contexts/MainContext";
function Main() {
  const creditCart = {
    name: "",
    number: "",
    date: "",
    cvc: "",
  };

  const [currentStep, setCurrentStep] = useState(1);
  const [phase, setPhase] = useState("address");
  const [shipPrice, setShipPrice] = useState("免費");
  const [cartProducts, setCartProducts] = useState(cardData);
  const [creditCard, setCreditCard] = useState(creditCart);
  //商品金額計算 totalPrice 千位數+逗號
  const productsTotal = cartProducts
    .map((item) => item.price * item.quantity)
    .reduce((sum, price) => sum + price, 0);
  const total = shipPrice === 500 ? 500 + productsTotal : productsTotal + 0;
  const totalPrice = new Intl.NumberFormat("en-US");

  // function 切換運費免費 以及商品數量 +-
  const handleRadioChange = (price) => {
    setShipPrice(price);
  };
  const handleQuantityClick = (quantity) => {
    setCartProducts(quantity);
  };

  //context 共用資料
  const contextValue = {
    cart: {
      data: [cartProducts, setCartProducts],
      shipPrice: [shipPrice, setShipPrice],
      total: totalPrice.format(total),
      Quantity: handleQuantityClick,
      RadioChange: handleRadioChange,
    },
    pay: [creditCard, setCreditCard],
  };

  return (
    <MainContext.Provider value={contextValue}>
      <main className="site-main">
        <div className="main-container">
          <section
            className="register-container col col-lg-6 col-sm-12"
            data-phase={currentStep}
            data-total-price={0}
          >
            <h2 className="register-title col col-12">結帳</h2>
            <StepProgress phase={phase} />
            <section className="form-container col col-12">
              <StepOne />
              <StepTwo />
              <StepThree />
            </section>
          </section>
          <Cart />
          <ProgressControl
            phase={phase}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            setPhase={setPhase}
          />
        </div>
      </main>
    </MainContext.Provider>
  );
}

export default Main;
