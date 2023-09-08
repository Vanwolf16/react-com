import { createContext,useReducer } from "react";
import { cartReducer, sumItems } from "./cart-reducer";


export const CartContext = createContext();

const cartFromStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

const initialState = {cartItems: cartFromStorage, ...sumItems(cartFromStorage)};

export const CartContextProvider = ({children}) => {
    const [state,disptach] = useReducer(cartReducer,initialState);

    const addProduct = (product) => disptach({type: 'ADD_ITEM', payload: product});
    const increase = (product) => disptach({type: 'INCREASE', payload: product});
    const decrease = (product) => disptach({type: 'DECREASE', payload: product});
    const removeProduct = (product) => disptach({type: 'REMOVE_ITEM', payload: product});
    const clearCart = () => disptach({type: 'CLEAR'});

    const contextValues = {
        ...state,
        addProduct,
        increase,
        decrease,
        removeProduct,
        clearCart,
    }

    return(
        <CartContext.Provider value={contextValues}>
            {children}
        </CartContext.Provider>
    )
}
