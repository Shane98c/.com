import Duties from "./Duties";

const Highlight = props => (
  <div>
    <img src={props.img} />
    <div>{props.title}</div>
    <div>{props.sub}</div>
    <Duties duties={props.duties} />
  </div>
);

export default Highlight;
