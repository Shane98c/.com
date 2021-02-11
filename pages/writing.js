import Post from "../components/Post";
import Layout from "../components/Layout";

const posts = [
  {
    title: "Explore Earth’s rocks with Macrostrat.org",
    snippet:
      "Geologists, for better or worse, have been wandering the globe for a couple hundred years now, meticulously mapping every outcrop, moraine, fossil bed, and fold they can find. At this point in history we’ve got a pretty good idea of what rocks are where, more or less how they formed, and when. Earth’s history is being teased out thanks to huge (and recent) advances in our understanding of our planet’s dynamics such as plate tectonics and advances in radiometric dating. It’s pretty likely that someone has put a lot of thought into what the heck is going on with the rocks in your backyard; but how can you join in on that contemplation?",
    img:
      "http://youcanscience.com/wp-content/uploads/2016/01/Capture-820x510.png",
    date: "January 26, 2016",
    link: "http://youcanscience.com/explore-earths-rocks-with-macrostrat-org/",
    src: "YouCanScience.com",
    srcLink: "http://youcanscience.com/",
  },
  {
    title: "Explore the Universe with SpaceEngine",
    snippet:
      "It’s one thing to know that there are 200 billion stars in the Milky Way Galaxy, that the Sun is a fairly average one, that many stars have planetary systems, and that there are hundreds of billions of other galaxies in our observable universe. It is another thing entirely to feel those numbers and facts. We can know them intellectually, rattle them off, and continue on with our day on planet Earth as if nothing profound was said, somehow not dropping dead of astonishment. This is maybe because even just a single billion is an unimaginable number. Our brains stop short, dumbfounded by the the prospect that there could possibly be that much stuff; the astonishment you might expect a humble human to feel at the thought of that much vastness is lost when its brain gets hung up on something it isn’t equipped to deal with, namely enormous quantities and their infinite possibilities.",
    img:
      "http://youcanscience.com/wp-content/uploads/2015/10/space-engine-820x510.jpg",
    date: "October 21, 2015",
    link: "http://youcanscience.com/explore-the-universe-with-spaceengine/",
    src: "YouCanScience.com",
    srcLink: "http://youcanscience.com/",
  },
  {
    title: "Explore Earth’s past with these tools",
    snippet:
      "Human’s have unearthed an astonishing number of fossils and other clues to what the Earth was like in the past.  So many, in fact, that they need tools to keep track of them. Databases, like the Paleobiology Database and the Neotoma Paleoecology Database (both based at the University of Wisconsin Madison), allow scientists – and you – to explore and analyze the history of life in ways that were unimaginable not long ago. By organizing the locations, types, ages, and relationships between these discoveries, we can begin to tease out new answers to big questions about the history of life and climate on Earth.",
    img:
      "http://youcanscience.com/wp-content/uploads/2016/04/clear_map_high-820x510.jpg",
    date: "April 16, 2016",
    link: "http://youcanscience.com/explore-earths-past-free-tools/",
    src: "YouCanScience.com",
    srcLink: "http://youcanscience.com/",
  },
];
const buildPosts = (posts) =>
  posts.map((post, index) => <Post key={index} {...post} />);
export default () => <Layout>{buildPosts(posts)}</Layout>;
