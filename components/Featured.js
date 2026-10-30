
const Featured = ({ title, sub, img, width, height, link, linkName, links = [], priority = false, lazy = false }) => (
  <article className="card">
    <a href={link} target="_blank" rel="noreferrer">
      <img
        className="cover"
        src={img}
        srcSet={`${img.replace("/img/", "/img/thumb/")} 640w, ${img} ${width}w`}
        sizes="(min-width: 960px) 446px, (min-width: 720px) calc(50vw - 34px), calc(100vw - 40px)"
        alt={title}
        width={width}
        height={height}
        fetchPriority={priority ? "high" : undefined}
        loading={lazy ? "lazy" : undefined}
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
