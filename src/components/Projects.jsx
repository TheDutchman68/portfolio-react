import { projects } from "../data/projects";

function Projects () {
    return (
        <section id="projects" className="projects section">
            <h2>Projects</h2>

            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <p>
                            <strong>Tech:</strong> {project.tech.join(", ")}
                        </p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            Live Demo
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;