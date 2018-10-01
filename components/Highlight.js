import Duties from "./Duties";
import styled from "styled-components";

const Wrapper = styled.div`
  .highlight {
    padding: 20px 20px 5px 20px;
    display: grid;
  }
  .titles {
  }
  img {
    width: 100%;
    min-width: 50%;
  }
  .title {
    font-size: 180%;
    font-weight: bold;
    color: ${({ color }) => color || "white"};
  }
  .sub {
    padding-top: 3px;
    width: 75%;
  }
  :nth-child(even) {
    img {
      grid-column-end: 1;
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
      padding-left: 5px;
    }
    .links {
      text-align: right;
    }
  }
  :nth-child(odd) {
    img {
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
      padding-right: 5px;
    }
    .links {
    }
  }
`;

const Highlight = ({ title, sub, img, duties, link, ...rest }) => (
  <Wrapper {...rest}>
    <div className="highlight">
      <img src={img} />
      <div className="titles">
        <a href={link} target="_blank">
          <div className="title">{title}</div>
        </a>
        <div className="sub">{sub}</div>
      </div>
      <div className="links" />
    </div>
    <Duties duties={duties} />
  </Wrapper>
);

export default Highlight;
