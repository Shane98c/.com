import styled from "styled-components";
const Wrapper = styled.div`
  .post {
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
  .title {
    font-size: 180%;
    font-weight: bold;
    color: ${({ color }) => color || "black"};
  }
  .heroImg {
    max-width: 50%;
    min-width: 300px;
  }
  .heroImg img {
    width: 100%;
  }
`;

const Post = props => (
  <Wrapper>
    <div className="post">
      <div className="text">
        <div className="title">
          <a href={props.link} target="_blank">
            {props.title}
          </a>
        </div>
        <div className="snip">{props.snippet}</div>
      </div>

      <div className="heroImg">
        <img src={props.img} />
      </div>
    </div>
  </Wrapper>
);
export default Post;
