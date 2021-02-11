const Footer = () => (
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
      <a href="https://www.instagram.com/shane98c/" target="_blank">
        Instagram
      </a>
    </div>
    <style jsx>{`
      .footerTitle {
        display: flex;
        justify-content: center;
        padding-top: 25px;
        font-weight: 600;
      }
      .footerItems {
        padding-top: 10px;
        padding-bottom: 10px;
        font-size: smaller;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        width: 100%;
      }
      .footerItems a {
        color: black;
        width: 50px;
        text-align: center;
      }
    `}</style>
  </div>
);

export default Footer;
