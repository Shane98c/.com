
const Project = ({ title, sub, img, width, height, link, linkName, links = [] }) => (
  <article className="project">
    <a href={link} target="_blank" rel="noreferrer">
      <img src={img.replace("/img/", "/img/thumb/")} alt={title} width={width} height={height} loading="lazy" decoding="async" />
    </a>
    <div className="project-text">
      <h3>
        <a href={link} target="_blank" rel="noreferrer">
          {title}
        </a>
      </h3>
      <p>{sub}</p>
      <div className="links">
        <a className="cta" href={link} target="_blank" rel="noreferrer">
          {linkName}
        </a>
        {links.map(({ name, href }) => (
          <a key={name} href={href} target="_blank" rel="noreferrer">
            {name}
          </a>
        ))}
      </div>
    </div>
  </article>
);

export default Project;
