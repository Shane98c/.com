import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { SITE, NAME, AVATAR, SOCIAL_LINKS } from "../lib/site";

const SOCIAL_CARD_ALT = "Shane Loeffler: Maps, software, and science";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: `${SITE}/`,
      name: NAME,
      publisher: { "@id": `${SITE}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${SITE}/#person`,
      name: NAME,
      url: `${SITE}/`,
      image: AVATAR,
      description: "Maps, software, and science",
      sameAs: SOCIAL_LINKS.map(([, href]) => href),
    },
  ],
};

const Layout = ({ title, description, path = "/", children }) => {
  const url = `${SITE}${path}`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content={NAME} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={NAME} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={`${SITE}/img/social-card.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={SOCIAL_CARD_ALT} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:alt" content={SOCIAL_CARD_ALT} />
        <meta name="twitter:site" content="@shane98c" />
        <meta name="twitter:creator" content="@shane98c" />
        <link rel="icon" href="/favicon.ico" sizes="16x16 32x32 48x48" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {path === "/" && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
        )}
      </Head>
      <div className="container">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
