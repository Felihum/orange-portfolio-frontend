import api from "./api";

async function getProjectById(id){
  try {
    const response = await api.get("/v1/projects/buscar/" + id)

    return response.data
  } catch (error) {
    console.log(error)
  }
}

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

async function deleteProject(id){
  try {
    await api.delete("/v1/projects/deletar/" + id);

    window.alert("Projeto deletado")
  } catch (error) {
    window.alert(error)
  }
}


async function updateProject(id, image, titleProject, tags, link, description){
    const mappingTags = tags ? tags.trim().split(',').map((tag) => {
      return {name:tag}
    }) : null
    try {
      const response = await api.patch("/v1/projects/atualizar/" + id, {
        titleProject: titleProject,
        link: link,
        description: description,
        user: localStorage.getItem("userId"),
        tags: mappingTags,
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
  const mappingTags = tags ? tags.trim().split(',').map((tag) => {
    return {name:tag}
  }) : null
    try {
      await api.post("/v1/projects/criarProjeto", {
        titleProject: titleProject,
        link: link,
        description: description,
        date: new Date(),
        user: {
          id: localStorage.getItem("userId"),
        },
        tags: mappingTags,
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


export { getAllProjects, getProjectById, getProjectsByTag, createProject, updateProject, deleteProject }