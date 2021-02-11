import Post from "../components/Post";
import Layout from "../components/Layout";

const posts = [
  {
    title: "Mobile UX design: learning from the Flyover Country mobile app",
    audience: "Academic",
    snippet:
      "Abstract: Technology has transformed maps into interactive tools for exploring and understanding the world. In this article, we present the user experience (UX) design process for Flyover Country (http://flyovercountry.io), a mobile mapping application that visualizes information about the Earth’s geology and history, allowing users to save and then access the information offline while flying, driving, or hiking. Specifically, the paper presents a UX design study that tracks the conceptualization, implementation, and revision of Flyover Country, and employs scenario-based design to walk through a pair of use case scenarios that informed our UX design: science outreach to the general public and field trip guides for geoscience education. In the paper, we note UX design insights that are potentially transferable to other mobile mapping contexts, organizing insights by mobile representation design (scale, projection, symbolization, and typography) versus mobile interaction design (map entry point, bottom navigation, floating action button, and pull-up information panel).",
    img: "./static/img/jom.jpg",
    date: "2021",
    link: "https://www.tandfonline.com/doi/full/10.1080/17445647.2020.1867247",
    src: "Journal of Maps",
    srcLink: "https://www.tandfonline.com/toc/tjom20/current",
  },
  {
    title: "Explore Earth’s rocks with Macrostrat.org",
    audience: "General Public",
    snippet:
      "Geologists, for better or worse, have been wandering the globe for a couple hundred years now, meticulously mapping every outcrop, moraine, fossil bed, and fold they can find. At this point in history we’ve got a pretty good idea of what rocks are where, more or less how they formed, and when. Earth’s history is being teased out thanks to huge (and recent) advances in our understanding of our planet’s dynamics such as plate tectonics and advances in radiometric dating. It’s pretty likely that someone has put a lot of thought into what the heck is going on with the rocks in your backyard; but how can you join in on that contemplation?",
    img: "./static/img/macro.png",
    date: "January 26, 2016",
    link: "http://youcanscience.com/explore-earths-rocks-with-macrostrat-org/",
    src: "YouCanScience.com",
    srcLink: "http://youcanscience.com/",
  },
  {
    title: "Explore the Universe with SpaceEngine",
    audience: "General Public",
    snippet:
      "It’s one thing to know that there are 200 billion stars in the Milky Way Galaxy, that the Sun is a fairly average one, that many stars have planetary systems, and that there are hundreds of billions of other galaxies in our observable universe. It is another thing entirely to feel those numbers and facts. We can know them intellectually, rattle them off, and continue on with our day on planet Earth as if nothing profound was said, somehow not dropping dead of astonishment. This is maybe because even just a single billion is an unimaginable number. Our brains stop short, dumbfounded by the the prospect that there could possibly be that much stuff; the astonishment you might expect a humble human to feel at the thought of that much vastness is lost when its brain gets hung up on something it isn’t equipped to deal with, namely enormous quantities and their infinite possibilities.",
    img: "./static/img/se.jpg",
    date: "October 21, 2015",
    link: "http://youcanscience.com/explore-the-universe-with-spaceengine/",
    src: "YouCanScience.com",
    srcLink: "http://youcanscience.com/",
  },
  {
    title: "Explore Earth’s past with these tools",
    audience: "General Public",
    snippet:
      "Human’s have unearthed an astonishing number of fossils and other clues to what the Earth was like in the past.  So many, in fact, that they need tools to keep track of them. Databases, like the Paleobiology Database and the Neotoma Paleoecology Database (both based at the University of Wisconsin Madison), allow scientists – and you – to explore and analyze the history of life in ways that were unimaginable not long ago. By organizing the locations, types, ages, and relationships between these discoveries, we can begin to tease out new answers to big questions about the history of life and climate on Earth.",
    img: "./static/img/pbdb.jpg",
    date: "April 16, 2016",
    link: "http://youcanscience.com/explore-earths-past-free-tools/",
    src: "YouCanScience.com",
    srcLink: "http://youcanscience.com/",
  },
];
const buildPosts = (posts) =>
  posts.map((post, index) => <Post key={index} {...post} />);
export default () => <Layout>{buildPosts(posts)}</Layout>;
