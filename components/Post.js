import styled from "styled-components";
const Wrapper = styled.div`
  .post {
    padding: 20px 20px 5px 20px;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  }
  .title {
    font-weight: bold;
  }
  .heroImg {
    width: 100%;
  }
  .heroImg img {
    width: 100%;
  }
`;

const Post = props => (
  <Wrapper>
    <div className="post">
      <div className="title">{props.title}</div>
      <div className="heroImg">
        <img src={props.img} />
      </div>
    </div>
  </Wrapper>
);
export default Post;
