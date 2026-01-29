import { projects } from "../data/projects";
import { FaGithub } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";
function Projects () {
    return (
        <section id="projects" className="projects section fade-up">
            <h2>Projects</h2>

            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <p>
                            <strong>Tech:</strong> {project.tech.join(", ")}
                        </p>
                        <div className="project-links">
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="pill pill-demo">
                            <MdOpenInNew /> Demo
                        </a>
                        <a href={project.liveCode} target="_blank" rel="noopener noreferrer" className="pill pill-code">
                            <FaGithub /> Code
                        </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;