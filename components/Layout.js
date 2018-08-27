import Header from "./Header";

const layoutStyle = {
  margin: 20,
  padding: 20,
  "font-family": "Verdana"
};

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
);

export default Layout;
