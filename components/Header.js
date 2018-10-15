import Link from "next/link";

const linkStyle = {
  marginRight: 15,
  textDecoration: "none",
  color: "black"
};

const Header = () => (
  <div>
    <div className="headerItems">
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/writing">
        <a style={linkStyle}>Writing</a>
      </Link>
      {/* <Link href="/photos">
        <a style={linkStyle}>Photography</a>
      </Link>
      <Link href="/education">
        <a style={linkStyle}>Education</a>
      </Link> */}
    </div>
    <div className="intro">
      <div className="hero">Shane Loeffler</div>
      <div className="subHero">
        Earth scientist, software developer, and science communicator
      </div>
    </div>

    <style jsx>{`
      .headerItems {
        font-size: smaller;
        text-align: right;
      }
      .hero {
        font-size: 2em;
        padding-top: 20px;
      }
      .subHero {
        font-weight: 300;
        padding-top: 10px;
      }
      .divide {
        border-bottom: 1px solid;
        text-align: center;
        padding: 5px;
      }
      .intro {
        padding: 10px;
      }
    `}</style>
  </div>
);

export default Header;
