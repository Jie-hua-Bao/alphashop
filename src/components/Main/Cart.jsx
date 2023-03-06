import { ReactComponent as SvgIconMinus } from "../../imagefiles/icons/minus.svg";
import { ReactComponent as SvgPlus } from "../../imagefiles/icons/plus.svg";
import { useContext } from "react";
import { DataProvider } from "../../contexts/MainContext";
function Product({ onCardChange, cartProducts }) {
  function handleQuantityClick(e) {
    const targetId = e.target.closest(".product-container").id;
    const isMinus = e.target.parentElement.classList.contains("minus");
    const nextProduct = cartProducts.map((item) => {
      if (item.id === targetId) {
        return {
          ...item,
          quantity: isMinus ? item.quantity - 1 : item.quantity + 1,
        };
      }
      return item;
    });
    // 小於 0 刪除 購物車內容
    const updataItems = nextProduct.filter((item) => item.quantity > 0);
    onCardChange(updataItems);
  }
  const CardItems = cartProducts.map((item) => {
    const productPrice = new Intl.NumberFormat("en-US");
    return (
      <div
        className="product-container col col-12"
        data-count={item.quantity}
        data-price={item.price}
        key={item.id}
        id={item.id}
      >
        <img className="img-container" src={item.img} alt="" />
        <div className="product-info">
          <div className="product-name">{item.name}</div>
          <div className="product-control-container">
            <div className="product-control">
              <SvgIconMinus
                className="product-action minus"
                onClick={handleQuantityClick}
              />
              <span className="product-count">{item.quantity}</span>
              <SvgPlus
                className="product-action plus"
                onClick={handleQuantityClick}
              />
            </div>
          </div>
          <div className="price">{productPrice.format(item.price)}</div>
        </div>
      </div>
    );
  });
  return CardItems;
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
  const cartProducts = useContext(DataProvider).cart.data[0];
  const shipPrice = useContext(DataProvider).cart.shipPrice[0];
  const total = useContext(DataProvider).cart.total;
  const onQuantityChange = useContext(DataProvider).cart.Quantity;

  // const productsTotal = cartProducts
  //   .map((item) => item.price * item.quantity)
  //   .reduce((sum, price) => sum + price, 0);
  // const total = shipPrice === 500 ? 500 + productsTotal : productsTotal + 0;
  return (
    <section className="cart-container col col-lg-5 col-sm-12">
      <h3 className="cart-title">購物籃</h3>
      <section className="product-list col col-12" data-total-price="0">
        <Product cartProducts={cartProducts} onCardChange={onQuantityChange} />
      </section>
      <Price title="運費" price={shipPrice} />
      <Price title="小計" price={"$ " + total} />
    </section>
  );
}

export default Cart;
