import Layout from "../components/Layout";
import Highlight from "../components/Highlight";

export default () => (
  <div>
    <Layout>
      <Highlight
        img="../static/img/FC.png"
        title="Flyover Country App"
        sub="Bringing the world outside your airplane window seat to life"
        link="https://flyovercountry.io"
        duties={["concept", "design", "development", "funding"]}
      />
    </Layout>
  </div>
);
