import Header from "./Header";
import Footer from "./Footer";

const layoutStyle = {
  padding: 20,
  fontFamily: "Helvetica"
  // fontWeight: "100"
};

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
    <Footer />
  </div>
);

export default Layout;
