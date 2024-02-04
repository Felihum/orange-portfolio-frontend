import axios from "axios";

const URL = "http://localhost:8080/v1/projects";

async function getAllProjects(){
    try {
        const response = await axios.get(URL + "/todos");

        console.log(response.data[0])
    } catch (error) {
        console.log(error)
    }
}

export { getAllProjects }