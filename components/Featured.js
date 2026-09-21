
const Featured = ({ title, sub, img, width, height, link, linkName, links = [] }) => (
  <article className="card">
    <a href={link} target="_blank" rel="noreferrer">
      <img
        className="cover"
        src={img}
        alt={title}
        width={width}
        height={height}
        fetchPriority="high"
      />
    </a>
    <div className="card-body">
      <h2>
        <a href={link} target="_blank" rel="noreferrer">
          {title}
        </a>
      </h2>
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

export default Featured;
