import axios from "axios";

const URL = "http://localhost:8080/v1/users";

async function getUserByName(username){

    try{
        const response = await axios.get(URL + "/buscarPorNome/" + username)

        console.log(response)
    } catch(error){
        console.log(error);
    }

}

async function getProjectsByUsername(username){
    
    try{
        const response = await axios.get(URL + "/buscarPorNome/" + username)

        if(response.data[0].projects != 0){
            return response.data[0].projects
        } else{
            return console.log("O usuário nao possui projetos")
        }
    } catch(error){
        console.log(error);
    }
    
}

export {getUserByName, getProjectsByUsername}