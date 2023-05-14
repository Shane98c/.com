import * as React from "react";
import Layout from "../components/Layout";
import Highlight from "../components/Highlight";
import Head from "next/head";

const projects = [
  {
    img: "../static/img/birmingham.jpg",
    title: "The Tragedy of North Birmingham",
    sub: "Scrolling map and drone footage visualization of ongoing environmental justice issues for this story in ProPublica.",
    linkName: "View the story at ProPublica.com",
    link: "https://www.propublica.org/article/bluestone-jim-justice-north-birmingham",
    duties: ["cartography", "development", "writing"],
  },
  {
    img: "../static/img/fridge.jpg",
    title: "Polar Geospatial Center's Fridge App",
    sub: "Search petabytes of commercial satellite imagery and publicly available digital elevation models.",
    linkName: "Search for data",
    link: "https://fridge.pgc.umn.edu/",
    duties: ["cartography", "full-stack development", "design"],
  },
  {
    img: "../static/img/trees.jpg",
    title: "Visualizing billions of trees",
    sub: "Worked with NASA scientists to visualize billions of tree crown polygons across the Sahara. Processed computer vision output data on HPC systems to transform it for performant visualization in the browser (see viewer). Cover story of Nature's March 2023 edition.",
    linkName: "Find the viewer on Nature.com",
    link: "https://www.nature.com/articles/s41586-022-05653-6",
    duties: ["concept", "design", "development"],
  },
  {
    img: "../static/img/dicksonmounds.jpg",
    title: "Ceded Native Land in Illinois",
    sub: "Designed and implemented this D3-based map animation showing the dispossession of Native Land in the early 1800s for a story in ProPublica's Repatriation Project.",
    linkName: "View the story at ProPublica.com",
    link: "https://www.propublica.org/article/repatriation-nagpra-museums-dickson-mounds-museum",
    duties: ["cartography", "development"],
  },

  {
    img: "../static/img/FC.png",
    title: "Flyover Country App",
    sub: "Bringing the world outside your airplane window seat to life.",
    linkName: "Try the app at flyovercountry.io",
    link: "https://flyovercountry.io",
    storeLinks: {
      android:
        "https://play.google.com/store/apps/details?id=com.ionicframework.app303739",
      ios: "https://itunes.apple.com/us/app/flyover-country/id1059886913",
    },
    duties: ["concept", "design", "development", "funding"],
  },
  {
    img: "../static/img/eclipse.jpeg",
    title: "2021 Antarctic Eclipse",
    sub: "Designed a Blender-based visualization of the 2021 Antarctic Eclipse.",
    linkName: "See the map",
    link: "https://twitter.com/polargeospatial/status/1467191683083341839/photo/1",
    duties: ["cartography"],
  },
  {
    img: "../static/img/maptheblacksnake.png",
    title: "Mapping the Black Snake",
    sub: "Interactive map outlining the impacts of the Line 3 tar sands oil pipeline.",
    linkName: "Read the story at maptheblacksnake.com",
    link: "https://maptheblacksnake.com/",
    duties: ["cartography", "development", "writing"],
  },
  {
    img: "../static/img/MNsight.png",
    title: "MNsight App",
    sub: "Visualizing Minnesota’s landscapes and geologic past.",
    linkName: "Try the app",
    link: "https://shane98c.github.io/MNsight/",
    storeLinks: {
      android: "https://play.google.com/store/apps/details?id=com.MNsight.geo",
      ios: "https://itunes.apple.com/us/app/mnsight/id1304610283",
    },
    duties: ["concept", "design", "development"],
  },
  {
    img: "../static/img/mcea.jpg",
    title: "MN Environmental Justice Bill Map",
    sub: "Used Svelte and Mapbox to create a map allowing stakeholders to explore how choosing different environmental justice bill language would impact their communities.",
    linkName: "View the map",
    link: "https://shane98c.github.io/mcea-map/public/",
    duties: ["cartography", "development"],
  },
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
        content="Earth scientist, software developer, and cartographer"
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
