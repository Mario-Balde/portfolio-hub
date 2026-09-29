import "./App.css";

import projects from "./data/projects";
import ProjectCard from "./components/ProjectCard";
import Hero from "./components/Hero";

function App() {
  return (
    <main>
      <Hero />
      <h2 className="projects-heading">My Projects</h2>

      <p className="projects-intro">
        Projects built from{" "}
        <a
          href="https://www.frontendmentor.io/"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor challenges
        </a>
        , focusing on responsive design, accessibility, and frontend
        development.
      </p>

      <section>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            status={project.status}
            description={project.description}
            technologies={project.technologies}
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
