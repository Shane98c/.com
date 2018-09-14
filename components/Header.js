import Link from "next/link";

const linkStyle = {
  marginRight: 15,
  textDecoration: "none",
  color: "black",
  fontWeight: "100"
};

const Header = () => (
  <div>
    <div className="headerItems">
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/work">
        <a style={linkStyle}>Work</a>
      </Link>
      <Link href="/photos">
        <a style={linkStyle}>Photography</a>
      </Link>
      <Link href="/education">
        <a style={linkStyle}>Education</a>
      </Link>
    </div>

    <style jsx>{`
      .headerItems {
        font-size: smaller;
        text-align: right;
      }
    `}</style>
  </div>
);

export default Header;
