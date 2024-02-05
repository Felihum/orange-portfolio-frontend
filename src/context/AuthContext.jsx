import { createContext, useEffect, useState } from "react";
import api from "../scripts/Api/api";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {

    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('userToken')

        if(token){
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
            setAuthenticated(true)
        }

        setLoading(false)
    }, [])

    async function login(email, password){
        const { data: {token, id} } = await api.post("/auth/login", {
            email,
            password
        })
        localStorage.setItem("userToken", JSON.stringify(token));
        localStorage.setItem("userId", id);
        api.defaults.headers.Authorization = `Bearer ${token}`
        setAuthenticated(true)

        return true;
        
    }

    async function register(name, surname, nationality, email, password){
        console.log(name)
        console.log(surname)
        console.log(nationality)
        console.log(email)
        console.log(password)
        try {
            const response = await api.post("/auth/register", {
                name,
                surname,
                nacionalidade: nationality,
                email,
                password,
                role: "USER"
            })

            return response
        } catch (error) {
            return error
        }

    }

    function logout(){
        setAuthenticated(false)
        localStorage.removeItem("userToken");
        api.defaults.headers.Authorization = undefined;
        

        return false;
    }

    if(loading){
        return <h1>Loading...</h1>
    }

    return (
        <AuthContext.Provider value={{ authenticated, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };