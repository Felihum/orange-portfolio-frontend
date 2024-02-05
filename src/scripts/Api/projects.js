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

async function updateProject(id, image, titleProject, tags, link, description){
    try {
      const response = await api.patch("/v1/projects/atualizar/" + id, {
        titleProject: titleProject,
        link: link,
        description: description,
        date: new Date(),
        user: {
          id: localStorage.getItem("userId"),
        },
        tags: tags.map(tag => ({ name: tag.name })),
        images: [
          {
            image: image,
          },
        ],
      })

      console.log(response)

    } catch (error) {
      console.log(error)
    }
}

async function createProject(image, titleProject, tags, link, description) {
    console.log(titleProject);
    console.log(tags);
    console.log(link);
    console.log(description);
    console.log(new Date());
  
    try {
      const result = await api.post("/v1/projects/criarProjeto", {
        titleProject: titleProject,
        link: link,
        description: description,
        date: new Date(),
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
      return(true);
    } catch (error) {
      return(error);
    }
}


export { getAllProjects, getProjectsByTag, createProject, updateProject }