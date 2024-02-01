import Project from "../Project/Project";

// eslint-disable-next-line react/prop-types
function ProjectList({ setOpenModalEdit, setOpenModalDelete, projetos }) {
    return (
        <>
            {
                // eslint-disable-next-line react/prop-types
                projetos.map((projeto, index) => (
                    <Project key={index} setOpenModalEdit={setOpenModalEdit} setOpenModalDelete={setOpenModalDelete} image={projeto.image} title={projeto.title} tag={projeto.tags} description={projeto.description} />
                ))
            }
        </>
    );
}

export default ProjectList;