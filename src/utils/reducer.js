
import { products } from "./mockData";

const cartReducer = (state, action) => {
    switch(action?.type){
        case "INCREMENT": {
            const updatedCartItems = state.items.map((elem) => {
                if(elem.id === action.payload){
                    return {...elem, count: elem.count + 1}
                }
                return elem;
            })
            return {...state, items: updatedCartItems};
        }
        case "DECREMENT": {
            const updatedCartItems = state.items.map((elem) => {
                if(elem.id === action.payload){
                    return {...elem, count: elem.count - 1};
                }
                return elem;
            }).filter(elem => elem.count >= 0);
            return {...state, items: updatedCartItems};
        }
        case "GET_TOTAL": {
            let {totalItems, totalAmount} = state.items.reduce((accum, curVal) => {
                accum.totalItems += curVal.count;
                accum.totalAmount += curVal.price*accum.totalItems
                return accum;
            }, {totalItems: 0, totalAmount: 0} )
            return {...state, totalItems: totalItems, totalAmount: totalAmount}
        }
        case "SEARCH_ITEM": {
            if(action.payload.length){
                const updatedICartItems = state.items.filter(elem => elem.name.toUpperCase().includes(action.payload.toUpperCase()))
                return {...state, items: updatedICartItems};
            }else {
                return {...state, items: products};
            }
        }
        default: {
            return state;
        }
    }
};

export { cartReducer };
