import Layout from "../components/Layout";
import Highlight from "../components/Highlight";

export default () => (
  <div>
    <Layout>
      <div className="intro">
        <div className="hero">Shane Loeffler</div>
        <div className="subHero">
          Earth scientist, software developer, and science communicator
        </div>
        <img src="../static/img/banner.jpeg" />
      </div>

      <div className="divide">selected work</div>
      <Highlight
        img="../static/img/FC.png"
        title="Flyover Country App"
        sub="Bringing the world outside your airplane window seat to life"
        link="https://flyovercountry.io"
        duties={["concept", "design", "development", "funding"]}
        color="#005ead"
      />
      <Highlight
        img="../static/img/FC.png"
        title="MNsight App"
        sub="Visualizing Minnesota’s landscapes and geologic past"
        link="https://shane98c.github.io/MNsight/"
        duties={["concept", "design", "development"]}
        color="#7A0019"
      />
    </Layout>
    <style jsx>{`
      .hero {
        font-size: 2em;
        padding-top: 20px;
      }
      .subHero {
        font-weight: 100;
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
      img {
        width: 100%;
        margin: 40px 0 10px 0;
      }
    `}</style>
  </div>
);
