const linkStyle = {
  marginRight: 15,
  textDecoration: "none",
  color: "black"
};

const Header = () => (
  <div>
    <div className="footerTitle">Get in touch</div>
    <div className="footerItems">
      <a href="mailto:shane98c@gmail.com" target="_blank">
        Email
      </a>
      <a href="https://twitter.com/shane98c" target="_blank">
        Twitter
      </a>
      <a href="https://github.com/shane98c" target="_blank">
        Github
      </a>
      <a href="https://www.linkedin.com/in/shane-loeffler/" target="_blank">
        LinkedIn
      </a>
      <a href="https://instagram.com/shane98c/" target="_blank">
        Instagram
      </a>
    </div>
    <div className="num">+1 218 220 8656</div>
    <div className="copy">© Shane Loeffler 2018</div>
    <style jsx>{`
      .footerTitle {
        display: flex;
        justify-content: center;
        padding-top: 25px;
        font-weight: 600;
      }
      .footerItems {
        padding-top: 10px;
        font-size: smaller;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        width: 100%;
      }
      .footerItems a {
        color: black;
      }
      .copy {
        padding-top: 15px;
        font-size: 13px;
      }
      .num {
        padding-top: 15px;
        font-size: 13px;
      }
    `}</style>
  </div>
);

export default Header;
