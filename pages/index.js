import Layout from "../components/Layout";
import Featured from "../components/Featured";
import Project from "../components/Project";

const featured = [
  {
    img: "/img/flyover.webp",
    width: 1280,
    height: 540,
    title: "Flyover Country",
    sub: "Guide to the window seat. An offline flight map that reveals the geology, ecosystems, and human works below your airplane window, with a live view that labels landmarks, 3D terrain, and guides to clouds and landscapes.",
    linkName: "flyovercountry.app",
    link: "https://flyovercountry.app/",
  },
  {
    img: "/img/farseer.webp",
    width: 1200,
    height: 750,
    title: "Farseer.space",
    sub: "A universe explorer in the browser. Real catalogs where we've measured, best estimates where we haven't, and continuous flight from Earth's surface to the deep field. Search for stars, exoplanets, nebulae, and galaxies, fly to them, or share the flight with friends.",
    linkName: "farseer.space",
    link: "https://farseer.space/",
  },
  {
    img: "/img/birmingham.webp",
    width: 1200,
    height: 717,
    title: "The Tragedy of North Birmingham",
    sub: "Scrolling map and drone footage visualization of ongoing environmental justice issues for this story in ProPublica.",
    linkName: "View the story at ProPublica",
    link: "https://www.propublica.org/article/bluestone-jim-justice-north-birmingham",
  },
  {
    img: "/img/zarr-layer.webp",
    width: 1600,
    height: 900,
    title: "zarr-layer",
    sub: "Open source MapLibre and Mapbox layer that renders Zarr datasets directly on the GPU, in globe or Mercator projections, reprojecting on the fly.",
    linkName: "Try the demo",
    link: "https://zarr-layer.demo.carbonplan.org/",
    links: [
      { name: "Blog post", href: "https://carbonplan.org/blog/zarr-layer-maps" },
      { name: "GitHub", href: "https://github.com/carbonplan/zarr-layer" },
    ],
  },
];

const projects = [
  {
    img: "/img/wiki-geoparquet.webp",
    width: 1200,
    height: 750,
    title: "wiki-geoparquet",
    sub: "Every geotagged English Wikipedia article as GeoParquet and PMTiles, enriched from Wikidata and rebuilt monthly. The demo maps all of them and queries the Parquet directly in the browser with DuckDB.",
    linkName: "Try the demo",
    link: "https://shane98c.github.io/wiki-geoparquet/",
    links: [
      { name: "GitHub", href: "https://github.com/Shane98c/wiki-geoparquet" },
    ],
  },
  {
    img: "/img/ocr.webp",
    width: 1200,
    height: 630,
    title: "Open Climate Risk",
    sub: "Building-level wildfire risk for the contiguous United States, today and under future climate. CarbonPlan's highest-resolution dataset yet, served straight to the browser with cloud-native formats.",
    linkName: "Explore the map at carbonplan.org",
    link: "https://carbonplan.org/research/climate-risk",
    links: [
      { name: "Explainer", href: "https://carbonplan.org/research/climate-risk-explainer" },
      { name: "GitHub", href: "https://github.com/carbonplan/ocr-web" },
    ],
  },
  {
    img: "/img/oae.webp",
    width: 1200,
    height: 630,
    title: "OAE Efficiency Map",
    sub: "Interactive tool built at CarbonPlan with [C]Worthy to explore where and when adding alkalinity to the ocean removes the most CO₂, and how that removal plays out over time.",
    linkName: "Explore the map",
    link: "https://carbonplan.org/research/oae-efficiency",
    links: [
      { name: "Explainer", href: "https://carbonplan.org/research/oae-efficiency-explainer" },
      { name: "GitHub", href: "https://github.com/carbonplan/mcdr-tools" },
    ],
  },
  {
    img: "/img/dor.webp",
    width: 1200,
    height: 630,
    title: "DOR Efficiency Map",
    sub: "Companion tool built at CarbonPlan with [C]Worthy for direct ocean removal. Explore how extracting CO₂ from seawater in a given region and season leads to carbon removal over time, and how storage losses change the result.",
    linkName: "Explore the map",
    link: "https://carbonplan.org/research/dor-efficiency",
    links: [
      { name: "Explainer", href: "https://carbonplan.org/research/dor-efficiency-explainer" },
      { name: "GitHub", href: "https://github.com/carbonplan/mcdr-tools" },
    ],
  },
  {
    img: "/img/fridge.webp",
    width: 1081,
    height: 710,
    title: "Polar Geospatial Center's Fridge App",
    sub: "Search petabytes of commercial satellite imagery and publicly available digital elevation models.",
    linkName: "Search for data",
    link: "https://fridge.pgc.umn.edu/",
  },
  {
    img: "/img/trees.webp",
    width: 1178,
    height: 583,
    title: "Visualizing billions of trees",
    sub: "Worked with NASA scientists to visualize billions of tree crown polygons across the Sahara. Processed computer vision output on HPC systems to transform it for performant visualization in the browser. Cover story of Nature's March 2023 edition.",
    linkName: "Find the viewer on Nature.com",
    link: "https://www.nature.com/articles/s41586-022-05653-6",
  },
  {
    img: "/img/dicksonmounds.webp",
    width: 1200,
    height: 1247,
    title: "Ceded Native Land in Illinois",
    sub: "Designed and implemented this D3-based map animation showing the dispossession of Native land in the early 1800s for a story in ProPublica's Repatriation Project.",
    linkName: "View the story at ProPublica",
    link: "https://www.propublica.org/article/repatriation-nagpra-museums-dickson-mounds-museum",
  },
  {
    img: "/img/eclipse.webp",
    width: 1200,
    height: 534,
    title: "2021 Antarctic Eclipse",
    sub: "Designed a Blender-based visualization of the 2021 Antarctic eclipse.",
    linkName: "See the map",
    link: "https://twitter.com/polargeospatial/status/1467191683083341839/photo/1",
  },
  {
    img: "/img/maptheblacksnake.webp",
    width: 912,
    height: 573,
    title: "Mapping the Black Snake",
    sub: "Interactive map outlining the impacts of the Line 3 tar sands oil pipeline.",
    linkName: "Read the story at maptheblacksnake.com",
    link: "https://maptheblacksnake.com/",
  },
];

export default function Home() {
  return (
    <Layout
      title="Shane Loeffler"
      description="Maps, software, and science — interactive maps, data visualization, and open source earth science tools by Shane Loeffler"
    >
      <section className="section">
        <div className="featured">
          {featured.map((project) => (
            <Featured key={project.title} {...project} />
          ))}
        </div>
      </section>
      <section className="section">
        <div className="work">
          {projects.map((project) => (
            <Project key={project.title} {...project} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
