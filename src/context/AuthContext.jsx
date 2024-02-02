import { createContext } from "react";

const Context = createContext();

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
    return (
        <Context.Provider value={{ authenticated: false }}>
            {children}
        </Context.Provider>
    );
}

export { Context, AuthProvider };