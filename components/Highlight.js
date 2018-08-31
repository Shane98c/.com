import Duties from "./Duties";

const Highlight = props => (
  <div>
    <div className="highlight">
      <img src={props.img} />
      <div className="titles">
        <div className="title">{props.title}</div>
        <div className="sub">{props.sub}</div>
      </div>

      <style jsx>{`
        .highlight {
          padding: 20px 20px 5px 20px;
          display: grid;
        }
        .titles {
          display: grid;
        }
        img {
          width: 100%;
          grid-column-end: 1;
        }
        .title {
          text-align: right;
          font-size: 180%;
          font-weight: bold;
          grid-column-start: 3;
          color: ${props.color};
        }
        .sub {
          text-align: right;
          margin-right: 0;
          grid-column-start: 3;
          grid-column-end: 3;
        }
      `}</style>
    </div>
    <Duties duties={props.duties} />
  </div>
);

export default Highlight;
