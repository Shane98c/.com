import Link from "next/link";

const linkStyle = {
  marginRight: 15,
  textDecoration: "none",
  color: "black",
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
      <Link href="https://www.instagram.com/shane98c/">
        <a style={linkStyle} target="_blank">
          Photography
        </a>
      </Link>
      {/* <Link href="/education">
        <a style={linkStyle}>Education</a>
      </Link> */}
    </div>
    <div className="intro">
      <div>
        <div className="hero">Shane Loeffler</div>
        <div className="subHero">
          Earth scientist, software developer, cartographer
        </div>
      </div>
      <div className="heroImg">
        <img src="https://avatars.githubusercontent.com/u/14908734?s=460&u=6f2721927aed492c4cc06c9dbbac17e7097b42d6&v=4"></img>
      </div>
    </div>

    <style jsx>{`
      .headerItems {
        font-size: smaller;
        text-align: right;
        padding-bottom: 30px;
      }
      .hero {
        font-size: 2em;
        padding-top: 20px;
      }
      .subHero {
        font-weight: 300;
        padding-top: 10px;
      }
      .heroImg img {
        border-radius: 500px;
        height: 100px;
      }
      .divide {
        border-bottom: 1px solid;
        text-align: center;
        padding: 5px;
      }
      .intro {
        padding: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
    `}</style>
  </div>
);

export default Header;
