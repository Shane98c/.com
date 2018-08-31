const getDuties = duties => duties.map(duty => <span>{duty}</span>);

const Duties = props => (
  <div>
    <div className="duty">{getDuties(props.duties)}</div>
    <style jsx>{`
      .duty {
        display: flex;
        justify-content: space-around;
        flex-flow: row wrap;
        margin-top: 10px;
        border-bottom: 1px solid;
        padding: 0 20px 5px 20px;
        font-size: 0.9em;
      }
    `}</style>
  </div>
);
export default Duties;
