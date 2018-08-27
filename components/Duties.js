var Duties = props => (
  <div>
    {props.duties.map(duty => (
      <span>{duty}</span>
    ))}
  </div>
);

export default Duties;
