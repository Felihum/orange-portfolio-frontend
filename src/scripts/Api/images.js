import api from "./api";

async function getImageById(id){
    try {
        const response = await api.get("http://localhost:8080/api/images/" + id)

        return response.data
    } catch (error) {
        console.log(error)
    }
}

export {getImageById}