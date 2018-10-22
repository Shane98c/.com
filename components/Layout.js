import Header from "./Header";
import Footer from "./Footer";

const layoutStyle = {
  padding: 20,
  fontFamily: "Helvetica",
  maxWidth: 1000,
  margin: "0 auto"
};

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
    <Footer />
  </div>
);

export default Layout;
