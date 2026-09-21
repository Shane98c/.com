import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const SITE = "https://shaneloeffler.com";
const BANNER_ALT = "Ice forming over oak leaves in shallow water";

const Layout = ({ title, description, path = "/", children }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${SITE}${path}`} />
      <meta property="og:image" content={`${SITE}/img/banner.webp`} />
      <meta property="og:image:width" content="1500" />
      <meta property="og:image:height" content="500" />
      <meta property="og:image:alt" content={BANNER_ALT} />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="icon" href="/favicon.ico" sizes="16x16 32x32 48x48" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </Head>
    <div className="container">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  </>
);

export default Layout;
