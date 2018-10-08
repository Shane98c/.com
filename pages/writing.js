import Post from "../components/Post";
import Layout from "../components/Layout";

const posts = [
  {
    title: "Explore Earth’s rocks with Macrostrat.org",
    snippet:
      "Geologists, for better or worse, have been wandering the globe for a...",
    img:
      "http://youcanscience.com/wp-content/uploads/2016/01/Capture-820x510.png",
    date: "January 26, 2016",
    link: "http://youcanscience.com/explore-earths-rocks-with-macrostrat-org/",
    src: "YouCanScience.org",
    srcLink: "http://youcanscience.com/"
  }
];
const buildPosts = posts => posts.map(post => <Post {...post} />);
export default () => <Layout>{buildPosts(posts)}</Layout>;
