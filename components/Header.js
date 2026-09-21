import Link from "next/link";
import { useRouter } from "next/router";

const NavLink = ({ href, children }) => {
  const { pathname } = useRouter();
  return (
    <Link href={href} aria-current={pathname === href ? "page" : undefined}>
      {children}
    </Link>
  );
};

const Header = () => (
  <header>
    <nav className="nav">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/writing">Writing</NavLink>
      <a href="https://www.instagram.com/shane98c/" target="_blank" rel="noreferrer">
        Photography
      </a>
    </nav>
    <div className="intro">
      <div>
        <h1>Shane Loeffler</h1>
        <p>Maps, software, and science</p>
      </div>
      <img
        className="avatar"
        src="https://avatars.githubusercontent.com/u/14908734?s=168"
        alt="Shane Loeffler"
        width="84"
        height="84"
      />
    </div>
  </header>
);

export default Header;
