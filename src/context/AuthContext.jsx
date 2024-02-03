import { createContext, useState } from "react";

const Context = createContext();

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {

    const [authenticated, setAuthenticated] = useState(false);

    async function handleLogin(){
        const { data } = await api.post("/authenti")
    }

    return (
        <Context.Provider value={{ authenticated: false }}>
            {children}
        </Context.Provider>
    );
}

export { Context, AuthProvider };