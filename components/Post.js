const Post = ({ title, snippet, img, width, height, date, link, src, srcLink, audience }) => (
  <article className="project">
    {img && (
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img.replace("/img/", "/img/thumb/")} alt={title} width={width} height={height} loading="lazy" decoding="async" />
      </a>
    )}
    <div className="project-text">
      <h3>
        <a href={link} target="_blank" rel="noreferrer">
          {title}
        </a>
      </h3>
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
