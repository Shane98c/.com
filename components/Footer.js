const links = [
  ["Email", "mailto:shane98c@gmail.com"],
  ["GitHub", "https://github.com/shane98c"],
  ["LinkedIn", "https://www.linkedin.com/in/shane-loeffler/"],
  ["Instagram", "https://www.instagram.com/shane98c/"],
  ["Bluesky", "https://bsky.app/profile/shaneloeffler.com"],
  ["Twitter", "https://twitter.com/shane98c"],
];

const Footer = () => (
  <footer className="footer">
    <nav>
      {links.map(([name, href]) => (
        <a key={name} href={href} target="_blank" rel="noreferrer">
          {name}
        </a>
      ))}
    </nav>
  </footer>
);

export default Footer;
