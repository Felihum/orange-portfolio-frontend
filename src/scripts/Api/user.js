import api from "./api";

async function getUserByName(username){

    try{
        const response = await api.get("/v1/users/buscarPorNome/" + username)

        console.log(response)
    } catch(error){
        console.log(error);
    }

}

async function getUserById(id){
    try {
        const response = await api.get("/v1/users/buscar/" + id)

        return response.data

    } catch (error) {
        console.log(error)
    }
}

async function getProjectsByUsername(username){
    
    try{
        const response = await api.get("/v1/users/buscarPorNome/" + username)

        if(response.data[0].projects != 0){
            return response.data[0].projects
        } else{
            return console.log("O usuário nao possui projetos")
        }
    } catch(error){
        console.log(error);
    }
    
}

export {getUserByName, getProjectsByUsername, getUserById}