import Layout from "../components/Layout";
import Post from "../components/Post";

const posts = [
  {
    title: "Hybrid Icechunk stores for serverless web mapping",
    audience: "Technical",
    snippet:
      "This past winter, we saw one of the worst snowpacks in recent memory for the Western U.S., and we wanted to be able to explore how this season compared to last. NOAA provides seasonal snowfall data as NetCDF, a format commonly used for scientific workflows and analysis. Web maps shine for exploring a dataset quickly, but NetCDF files have not traditionally been compatible with web mapping, and transforming them into a web map-compatible format is a lot of work.",
    img: "/img/icechunk-post.webp",
    width: 1200,
    height: 630,
    date: "August 10, 2026",
    link: "https://cloudnativegeo.org/blog/2026/08/virtual-icechunk-multiscale/",
    src: "Cloud-Native Geospatial Forum",
    srcLink: "https://cloudnativegeo.org/blog/",
  },
  {
    title: "Flexible Zarr visualization for web maps",
    audience: "Technical",
    snippet:
      "We build and distribute many of our climate datasets in cloud-native formats like Zarr, which make scientific data easier to share and analyze. To visualize Zarr on the web, we previously built @carbonplan/maps. The library took advantage of the flexibility of the Zarr format, allowing us to create interactive web maps that combine variables, handle time and other non-spatial dimensions, and query numeric values on the fly.",
    img: "/img/zarr-layer-post.webp",
    width: 1200,
    height: 630,
    date: "April 2, 2026",
    link: "https://carbonplan.org/blog/zarr-layer-maps",
    src: "CarbonPlan",
    srcLink: "https://carbonplan.org/blog",
  },
  {
    title: "Mobile UX design: learning from the Flyover Country mobile app",
    audience: "Academic",
    snippet:
      "Technology has transformed maps into interactive tools for exploring and understanding the world. In this article, we present the user experience (UX) design process for Flyover Country, a mobile mapping application that visualizes information about the Earth's geology and history, allowing users to save and then access the information offline while flying, driving, or hiking. The paper presents a UX design study that tracks the conceptualization, implementation, and revision of Flyover Country, and employs scenario-based design to walk through a pair of use case scenarios that informed our UX design: science outreach to the general public and field trip guides for geoscience education.",
    img: "/img/jom.webp",
    width: 500,
    height: 487,
    date: "2021",
    link: "https://www.tandfonline.com/doi/full/10.1080/17445647.2020.1867247",
    src: "Journal of Maps",
    srcLink: "https://www.tandfonline.com/toc/tjom20/current",
  },
];

export default function Writing() {
  return (
    <Layout
      title="Shane Loeffler · Writing"
      description="Articles and papers by Shane Loeffler"
      path="/writing"
    >
      <section className="section">
        <div className="work">
          {posts.map((post) => (
            <Post key={post.title} {...post} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
