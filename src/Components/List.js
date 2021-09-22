const List = (props) => {
  return (
    <div className="row">
      <ul className="list-group">
        <li className="list-group-item">Name : {props.name}</li>
        <li className="list-group-item">Username : {props.username}</li>
      </ul>
      <p />
    </div>
  );
};

export default List;
