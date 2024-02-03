import axios from "axios";

const URL = "http://localhost:8080/auth/register"

async function register({ name, surname, nacionalidade, email, password, role }){
    const response = await axios.post(URL, {
        name: name,
        surname: surname,
        nacionalidade: nacionalidade,
        email: email,
        password: password,
        role: role
    })

    if(response.status.){

    }
}