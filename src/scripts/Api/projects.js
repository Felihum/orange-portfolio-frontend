import api from "./api";

async function getAllProjects(){
    try {
        const response = await api.get("/v1/projects/todos");

        return response.data
    } catch (error) {
        console.log(error)
    }
}

async function getProjectsByTag(tag){
    try {
        const response = await api.get("/v1/projects/byTag/" + tag);

        return response.data
    } catch (error) {
        console.log(error)
    }
}

async function createProject(image, titleProject, tags, link, description, date) {
    //console.log(titleProject);
    console.log(tags);
    //console.log(link);
    //console.log(description); 
  
    try {
      await api.post("/v1/projects/criarProjeto", {
        titleProject: titleProject,
        link: link,
        description: description,
        date: date,
        user: {
          id: localStorage.getItem("userId"),
        },
        tags: tags.map(tag => ({ name: tag.name })),
        images: [
          {
            image: image,
          },
        ],
      });
      console.log("Enviado");
    } catch (error) {
      console.log(error);
    }
}


export { getAllProjects, getProjectsByTag, createProject }