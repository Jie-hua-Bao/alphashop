import { createContext, useContext, useState } from "react";
import cardData from "../data/cardData.js";

const creditCart = {
  name: "",
  number: "",
  date: "",
  cvc: "",
};

// 預設值
const MainContext = createContext();

export const useDataContext = () => {
  return useContext(MainContext);
};

export function DataProvider({ children }) {
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
    <MainContext.Provider value={contextValue}>{children}</MainContext.Provider>
  );
}
