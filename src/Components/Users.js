import List from "./List";

const Users = (props) => {
  if (props.item.length === 0) {
    return <h1>No users</h1>;
  }

  return (
    <div>
      {props.item.map((user) => (
        <List key={user.id} name={user.name} username={user.username} />
      ))}
    </div>
  );
};

export default Users;
