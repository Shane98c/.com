import * as React from "react";
import Layout from "../components/Layout";
import Highlight from "../components/Highlight";
import Head from "next/head";

const projects = [
  {
    img: "../static/img/maptheblacksnake.png",
    title: "Mapping the Black Snake",
    sub:
      "Interactive map outlining the impacts of the Line 3 tar sands oil pipeline.",
    linkName: "maptheblacksnake.com",
    link: "https://maptheblacksnake.com/",
    duties: ["concept", "design", "development", "writing"],
    color: "black",
  },
  {
    img: "../static/img/FC.png",
    title: "Flyover Country App",
    sub: "Bringing the world outside your airplane window seat to life.",
    linkName: "flyovercountry.io",
    link: "https://flyovercountry.io",
    storeLinks: {
      android:
        "https://play.google.com/store/apps/details?id=com.ionicframework.app303739",
      ios: "https://itunes.apple.com/us/app/flyover-country/id1059886913",
    },
    duties: ["concept", "design", "development", "funding"],
    color: "#005ead",
  },
  {
    img: "../static/img/MNsight.png",
    title: "MNsight App",
    sub: "Visualizing Minnesota’s landscapes and geologic past.",
    linkName: "shane98c.github.io/MNsight",
    link: "https://shane98c.github.io/MNsight/",
    storeLinks: {
      android: "https://play.google.com/store/apps/details?id=com.MNsight.geo",
      ios: "https://itunes.apple.com/us/app/mnsight/id1304610283",
    },
    duties: ["concept", "design", "development"],
    color: "#7A0019",
  },
  // {
  //   img: "../static/img/mgv.png",
  //   title: "MultiGeoVis",
  //   sub: "Visualizing multivariate spatiotemporal data on mobile devices.",
  //   linkName: "github.com/Shane98c/multigeovis",
  //   link: "https://github.com/Shane98c/multigeovis",
  //   duties: ["concept", "design", "development"],
  //   color: "#008946",
  // },
];

const buildHighlights = (projects) =>
  projects.map((project, index) => <Highlight {...project} key={index} />);

const headerImg = {
  borderRadius: "15px",
};

export default () => (
  <div>
    <Head>
      <title>Shane Loeffler</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content="Shane Loeffler" />
      <meta
        property="og:description"
        content="Earth scientist, web developer, and cartographer"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://shaneloeffler.com/" />
      <meta
        property="og:image"
        content="https://avatars.githubusercontent.com/u/14908734?s=460&u=6f2721927aed492c4cc06c9dbbac17e7097b42d6&v=4"
      />
    </Head>
    <Layout>
      <img src="../static/img/banner.jpeg" style={headerImg} />
      <div className="divide">selected work</div>
      {buildHighlights(projects)}
    </Layout>
    <style jsx>{`
      img {
        width: 100%;
        margin: 40px 0 10px 0;
      }
      .divide {
        border-bottom: 1px solid;
        text-align: center;
        padding: 5px;
      }
    `}</style>
  </div>
);
