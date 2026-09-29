export default function ProjectCard({
  title,
  status,
  description,
  technologies,
  liveUrl,
  githubUrl,
}) {
  return (
    <article className="project-card">
      {status && <p className="project-status">{status}</p>}

      <h2>{title}</h2>

      <p className="project-description">{description}</p>

      <div className="technologies">
        {technologies.map((technology) => (
          <span key={technology} className="technology">
            {technology}
          </span>
        ))}
      </div>

      {(liveUrl || githubUrl) && (
        <div className="project-links">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              Live Demo ↗
            </a>
          )}

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              GitHub ↗
            </a>
          )}
        </div>
      )}
    </article>
  );
}
