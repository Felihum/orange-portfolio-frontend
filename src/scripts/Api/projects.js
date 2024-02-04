import api from "./api";

async function getAllProjects(){
    try {
        const response = await api.get("/v1/projects/todos");

        return response.data
    } catch (error) {
        console.log(error)
    }
}

export { getAllProjects }