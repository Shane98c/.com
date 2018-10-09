import Duties from "./Duties";
import styled from "styled-components";

const Wrapper = styled.div`
  .highlight {
    padding: 20px 20px 5px 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .text {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .titles a {
    text-decoration: none;
  }
  .heroImg img {
    min-width: 150px;
    max-width: 400px;
  }
  .titles {
    display: inline;
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
      float: left;
    }
    .text {
      text-align: right;
      float: right;
    }
    .sub {
      text-align: right;
      float: right;
    }
    .links {
      text-align: right;
    }
  }
  :nth-child(odd) {
    .highlight {
      flex-direction: row-reverse;
    }
    .heroImg {
      float: right;
    }
    .text {
      float: left;
    }
    .sub {
      text-align: left;
    }
    .links {
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
      <span className="heroImg">
        <img src={img} />
      </span>
      <div className="text">
        <div className="titles">
          <a href={link} target="_blank">
            <div className="title">{title}</div>
          </a>
          <div className="sub">{sub}</div>
        </div>
        <div className="links">{formatLinks(storeLinks)}</div>
      </div>
    </div>
    <Duties duties={duties} />
  </Wrapper>
);

export default Highlight;
