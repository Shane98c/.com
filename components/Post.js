import styled from "styled-components";
const Wrapper = styled.div`
  .post {
    padding: 50px 20px 20px 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    border-bottom: 1px solid;
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
  .title a {
    text-decoration: none;
  }
  .heroImg {
    max-width: 50%;
    min-width: 300px;
    display: inline-flex;
    align-items: center;
  }
  .heroImg img {
    width: 100%;
  }
  .snip {
    padding: 10px 20px 0px 5px;
    font-size: 0.9rem;
  }
  .src {
    font-size: 0.7rem;
  }
  .src a {
    color: black;
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
        <div className="src">
          <a href="{props.srcLink">{props.src}</a> - {props.date}
        </div>
        <div className="snip">{props.snippet} . . .</div>
      </div>

      <div className="heroImg">
        <img src={props.img} />
      </div>
    </div>
  </Wrapper>
);
export default Post;
