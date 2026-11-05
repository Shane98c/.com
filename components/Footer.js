import { SOCIAL_LINKS } from "../lib/site";

const links = [["Email", "mailto:shane98c@gmail.com"], ...SOCIAL_LINKS];

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
