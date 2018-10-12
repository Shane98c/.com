import Duties from "./Duties";
import styled from "styled-components";

const Wrapper = styled.div`
  .highlight {
    padding: 20px 20px 5px 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  .text {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 50%;
    min-width: 300px;
  }

  .titles a {
    text-decoration: none;
  }
  .heroImg {
    max-width: 50%;
    min-width: 300px;
  }
  .heroImg img {
    max-width: 100%;
  }
  .title {
    font-size: 180%;
    font-weight: bold;
    color: ${({ color }) => color || "black"};
  }
  .sub {
    padding: 4px 5px 5px 0px;
    /* width: 75%; */
  }
  .links img {
    width: 150px;
  }
  .siteLink a {
    text-decoration: underline;
    color: black;
  }

  :nth-child(even) {
    .text {
      text-align: right;
    }
    .sub {
      margin-left: auto;
    }
  }
  :nth-child(odd) {
    .highlight {
      flex-direction: row-reverse;
    }
  }
`;

const formatLinks = storeLinks => {
  let links = [];
  if (storeLinks && storeLinks.ios) {
    links.push(
      <div>
        <a href={storeLinks.ios} target="_blank">
          <img src="../static/img/appstr.svg" />
        </a>
      </div>
    );
  }
  if (storeLinks && storeLinks.android) {
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

const Highlight = ({
  title,
  sub,
  img,
  duties,
  link,
  storeLinks,
  linkName,
  ...rest
}) => (
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
          <div className="siteLink">
            <a href={link} target="_blank">
              {linkName}
            </a>
          </div>
        </div>
        <span className="sub">{sub}</span>
        <div className="links">{formatLinks(storeLinks)}</div>
      </div>
    </div>
    <Duties duties={duties} />
  </Wrapper>
);

export default Highlight;
