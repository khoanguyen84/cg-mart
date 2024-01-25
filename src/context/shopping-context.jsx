import { createContext, useReducer } from "react";
import reducer, { initState } from "../reducer/reducer";

export const ShoppingContext = createContext()

export default function ShoppingProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initState)
    return (
        <ShoppingContext.Provider value={{ state, dispatch }}>
            {children}
        </ShoppingContext.Provider>
    )
}