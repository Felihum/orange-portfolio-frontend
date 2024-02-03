import axios from "axios";

const URL = "http://localhost:8080/auth/login"

async function login({ event, email, password }){
    event.preventDefault();
    
    try{
        const response = await axios.post(URL, {
            email,
            password
        })

        console.log(response)
    } catch(error){
        console.log(error)
        
    }
}

export {login}