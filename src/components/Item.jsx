import React, { useContext } from "react";
import { CartContext } from "./CartContextProvider";

const Item = ({name, id, count}) => {
    const {increment, decrement} = useContext(CartContext);
    
    return (
        <>
            <div className="item-container">
                <h1 className="item-name">{name}</h1>
                <button id={id} className="counter-buttons" onClick={() => decrement(id)}>-</button>
                <p className="item-count">{count}</p>
                <button id={id} className="counter-buttons" onClick={() => increment(id)}>+</button>
            </div>
        </>
    )
};

export default Item;