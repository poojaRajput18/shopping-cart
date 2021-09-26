import React, { useContext } from "react";
import { useHistory } from "react-router";
import { CartContext } from "./CartContextProvider";
import Item from "./Item";

const ViewCart = () => {
  const { items, totalAmount, totalItems } = useContext(CartContext);
  const history = useHistory();

  const handleback = () => {
    history.goBack();
  };
  return (
    <>
      <header>
        <div className="cart-header">
          <button onClick={() => handleback()}>Back</button>
        </div>
      </header>
      <section>
        <div className="items-container-title">
          <h1>Shopping Cart</h1>
          <p>{`You have ${totalItems} in your cart.`}</p>
          <div className="itemsList-container">
          {items.map((item) => (
            item.count > 0 && <Item key={item.id} {...item} />
          ))}
          </div>
        </div>
        <footer className="cart-footer">
        <p className="item-total-amount">Cart Total: {totalAmount}</p>
        <button>Checkout</button>
        </footer>
      </section>
    </>
  );
};
// className="item-total-amount"

export default ViewCart;
