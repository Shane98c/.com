import Duties from "./Duties";
import styled from "styled-components";

const Wrapper = styled.div`
  .highlight {
    padding: 20px 20px 5px 20px;
    display: grid;
  }
  .titles {
    display: grid;
  }
  img {
    width: 100%;
  }
  .title {
    font-size: 180%;
    font-weight: bold;
    color: ${({ color }) => color || "white"};
  }
  :nth-child(even) {
    img {
      grid-column-end: 1;
      grid-row-start: 1;
      grid-row-end: 3
    }
    .title {
      text-align: right;
      grid-column-start: 1;
      grid-row-start: 1;
    }
    .sub {
      text-align: right;
      margin-right: 0;
      grid-column-start: 1;
      grid-row-start: 2;
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
      grid-column-start: 1;
      grid-row-start: 1;
    }
    .title {
      grid-row-start: 1;
      grid-column-start 1;
    }
    .sub {
      text-align: left;
      grid-column-start: 1;
      /* grid-row-start: 2; */
    }
    .links {
    }
  }
`;

const Highlight = ({ title, sub, img, duties, ...rest }) => (
  <Wrapper {...rest}>
    <div className="highlight">
      <img src={img} />
      <div className="titles">
        <div className="title">{title}</div>
        <div className="sub">{sub}</div>
      </div>
      <div className="links">store links here</div>
    </div>
    <Duties duties={duties} />
  </Wrapper>
);

export default Highlight;
