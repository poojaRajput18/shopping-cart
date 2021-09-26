import React, { useContext } from "react";
import { useHistory } from "react-router";
import { CartContext } from "./CartContextProvider";
import Item from "./Item";

const AddToCart = () => {
  const { items, searchItems } = useContext(CartContext);
  const history = useHistory();

  const handleSearch = ({ target: { value } }) => {
    searchItems(value);
  };

  return (
    <>
      <header>
        <div className="items-header">
          <div>
            <p className="item-search-title">Search item</p>
            <input
              type="text"
              placeholder="Search"
              name="searchText"
              onKeyUp={(e) => handleSearch(e)}
            />
          </div>
          <button type="button" onClick={() => history.push("/viewCart")}>
            View Cart
          </button>
        </div>
      </header>
      <section>
        <div className="items-container-title">
          <h1>List of Items</h1>
          <div className="itemsList-container">
            {items.map((item) => (
              <Item key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AddToCart;
