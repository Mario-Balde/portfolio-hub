export default function ProjectCard({
  title,
  description,
  technologies,
  liveUrl,
  githubUrl,
}) {
  return (
    <article className="project-card">
      <h2>{title}</h2>

      <p className="project-description">{description}</p>

      <div className="technologies">
        {technologies.map((technology) => (
          <span key={technology} className="technology">
            {technology}
          </span>
        ))}
      </div>

      <div className="project-links">
        <a
          href={liveUrl}
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          Live Demo ↗
        </a>

        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          GitHub ↗
        </a>
      </div>
    </article>
  );
}
