import Duties from "./Duties";
import styled from "styled-components";

const Wrapper = styled.div`
  .highlight {
    padding: 20px 20px 5px 20px;
    display: grid;
  }
  .titles a {
  }
  .heroImg img {
    width: 400px;
  }
  .title {
    font-size: 180%;
    font-weight: bold;
    color: ${({ color }) => color || "white"};
  }
  .sub {
    padding: 4px 5px 5px 0px;
    width: 75%;
  }
  .links img {
    width: 150px;
  }
  :nth-child(even) {
    .heroImg {
      grid-column-start: 1;
      grid-row-start: 1;
      grid-row-end: 3;
    }
    .title {
      text-align: right;
    }
    .sub {
      text-align: right;
      float: right;
      margin-right: 0;
    }
    .links {
      text-align: right;
      grid-column-start: 2;
    }
  }
  :nth-child(odd) {
    .heroImg {
      grid-column-start: 2;
      grid-row-start: 1;
      grid-row-end: 3;
    }
    .titles {
      text-align: left;
    }
    .title {
    }
    .sub {
      text-align: left;
    }
    .links {
      grid-column-start: 1;
    }
  }
`;

const formatLinks = storeLinks => {
  let links = [];
  if (storeLinks.ios) {
    links.push(
      <div>
        <a href={storeLinks.ios} target="_blank">
          <img src="../static/img/appstr.svg" />
        </a>
      </div>
    );
  }
  if (storeLinks.android) {
    links.push(
      <div>
        <a href={storeLinks.android} target="_blank">
          <img src="../static/img/playstr.svg" />
        </a>
      </div>
    );
  }
  return links;
};

const Highlight = ({ title, sub, img, duties, link, storeLinks, ...rest }) => (
  <Wrapper {...rest}>
    <div className="highlight">
      <div className="heroImg">
        <img src={img} />
      </div>
      <div className="titles">
        <a href={link} target="_blank">
          <div className="title">{title}</div>
        </a>
        <div className="sub">{sub}</div>
      </div>
      <div className="links">{formatLinks(storeLinks)}</div>
    </div>
    <Duties duties={duties} />
  </Wrapper>
);

export default Highlight;
