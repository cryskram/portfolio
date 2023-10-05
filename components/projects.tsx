import { projectsData } from "@/lib/custom.data";
import ProjectCard from "./cards/project";

const Projects = () => {
  return (
    <div className="mt-8">
      <div className="flex flex-col justify-center w-4/5 mx-auto">
        <h1 className="title">#Projects</h1>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {projectsData.data.map((project) => (
            <div key={project.name}>
              <ProjectCard
                name={project.name}
                image={project.image}
                link={project.link}
                description={project.description}
                type={project.type}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
