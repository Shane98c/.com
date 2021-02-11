const getDuties = (duties) =>
  duties.map((duty, index) => <span key={index}>{duty}</span>);

const Duties = (props) => (
  <div>
    <div className="duty">{getDuties(props.duties)}</div>
    <style jsx>{`
      .duty {
        display: flex;
        justify-content: space-around;
        flex-flow: row wrap;
        margin-top: 10px;
        margin-bottom: 15px;
        border-bottom: 1px solid;
        padding: 0 20px 5px 20px;
        font-size: 1em;
      }
    `}</style>
  </div>
);
export default Duties;
