import Layout from "../components/Layout";
import styled from "styled-components";

const Wrapper = styled.div`
  .bio {
    display: flex;
  }
  .bioPic {
    width: 200px;
  }
`;
export default () => (
  <Layout>
    <Wrapper>
      <div className="bio">
        <div className="bioPic">
          <img src="../static/img/me.jpg" />
        </div>
      </div>
    </Wrapper>
  </Layout>
);
