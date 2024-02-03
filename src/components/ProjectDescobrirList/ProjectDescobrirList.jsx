import ProjectDescobrir from "../ProjectDescobrir/ProjectDescobrir";

// eslint-disable-next-line react/prop-types
function ProjectDescobrirList({ setOpenModalVisual, projetos }) {
    return (
        <>
            {
                // eslint-disable-next-line react/prop-types
                projetos.map((projeto, index) => (
                    <ProjectDescobrir key={index} setOpenModalVisual={setOpenModalVisual} image={projeto.image} title={projeto.title} tag={projeto.tags} description={projeto.description} />
                ))
            }
        </>
    );
}

export default ProjectDescobrirList;