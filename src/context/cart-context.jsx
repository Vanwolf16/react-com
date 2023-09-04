import { createContext,useReducer } from "react";
import { cartReducer } from "./cart-reducer";

export const CartContext = createContext();

const initialState = {cartItems:[], itemCount:0, total:0};

export const CartContextProvider = ({children}) => {
    const [state,disptach] = useReducer(cartReducer,initialState);

    const addProduct = (product) => disptach({type: 'ADD_ITEM', payload: product});


    const contextValues = {
        ...state,
        addProduct,
    }

    return(
        <CartContext.Provider value={{contextValues}}>
            {children}
        </CartContext.Provider>
    )
}
