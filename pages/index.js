import * as React from "react";
import Layout from "../components/Layout";
import Highlight from "../components/Highlight";

const projects = [
  {
    img: "../static/img/FC.png",
    title: "Flyover Country App",
    sub: "Bringing the world outside your airplane window seat to life.",
    linkName: "flyovercountry.io",
    link: "https://flyovercountry.io",
    storeLinks: {
      android:
        "https://play.google.com/store/apps/details?id=com.ionicframework.app303739",
      ios: "https://itunes.apple.com/us/app/flyover-country/id1059886913"
    },
    duties: ["concept", "design", "development", "funding"],
    color: "#005ead",
    side: "right"
  },
  {
    img: "../static/img/MNsight.png",
    title: "MNsight App",
    sub: "Visualizing Minnesota’s landscapes and geologic past.",
    linkName: "shane98c.github.io/MNsight",
    link: "https://shane98c.github.io/MNsight/",
    storeLinks: {
      android: "https://play.google.com/store/apps/details?id=com.MNsight.geo",
      ios: "https://itunes.apple.com/us/app/mnsight/id1304610283"
    },
    duties: ["concept", "design", "development"],
    color: "#7A0019",
    side: "left"
  }
];

const buildHighlights = projects =>
  projects.map(project => <Highlight {...project} />);

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
      {buildHighlights(projects)}
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
