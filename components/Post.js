const Post = ({ title, snippet, img, width, height, date, link, src, srcLink, audience, priority = false }) => (
  <article className="project">
    {img && (
      <a href={link} target="_blank" rel="noreferrer">
        <img
          src={img.replace("/img/", "/img/thumb/")}
          alt={title}
          width={width}
          height={height}
          fetchPriority={priority ? "high" : undefined}
          loading={priority ? undefined : "lazy"}
          decoding="async"
        />
      </a>
    )}
    <div className="project-text">
      <h2>
        <a href={link} target="_blank" rel="noreferrer">
          {title}
        </a>
      </h2>
      <div className="meta">
        <a href={srcLink} target="_blank" rel="noreferrer">
          {src}
        </a>{" "}
        · {date} · {audience}
      </div>
      <p className="snippet">{snippet}</p>
      <a className="cta" href={link} target="_blank" rel="noreferrer">
        Read it at {src}
      </a>
    </div>
  </article>
);

export default Post;
