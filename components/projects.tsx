import { projectsData } from "@/lib/custom.data";
import ProjectCard from "./cards/project";
import Link from "next/link";

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
                tags={project.tags}
              />
            </div>
          ))}
        </div>
        <h1 className="mt-6 text-center text-xl">
          Check out my{" "}
          <Link
            className="underline underline-offset-2 text-blue-400"
            href="https://github.com/cryskram"
          >
            Github
          </Link>{" "}
          for more projects
        </h1>
      </div>
    </div>
  );
};

export default Projects;
