const getDuties = duties => duties.map(duty => <span>{duty}</span>);

const Duties = props => (
  <div>
    <div className="duty">{getDuties(props.duties)}</div>
    <style jsx>{`
      .duty {
        display: flex;
        justify-content: space-around;
        flex-flow: row wrap;
        margin: 10px;
      }
    `}</style>
  </div>
);
export default Duties;
