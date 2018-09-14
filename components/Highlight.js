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
  nth-child(odd) {
    img {
      grid-column-end: 3;
    }
    .title {
      text-align: left;
      grid-column-start: 1;
    }
    .sub {
      text-align: left;
      margin-right: 0;
      grid-column-start: 1;
    }
  }
  nth-child(even) {
    img {
      grid-column-end: 1;
    }
    .title {
      text-align: left;
      grid-column-start: 1;
    }
    .sub {
      text-align: left;
      margin-right: 0;
      grid-column-start: 1;
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
    </div>
    <Duties duties={duties} />
  </Wrapper>
);

export default Highlight;
