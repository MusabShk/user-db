import logo from "./logo.svg";
import "./App.css";
import AddUserButton from "./Components/AddUserButton";
import Users from "./Components/Users";
import { useState } from "react/cjs/react.development";

const dummy_users = [
  {
    id: Math.random().toString(),
    name: "Musab shaikh",
    username: "musab@gmail.com",
  },
  {
    id: Math.random().toString(),
    name: "example",
    username: "example@gmail.com",
  },
];

function App() {
  const [usrlist, setUsrlist] = useState(dummy_users);

  const saveUserHandler = (user) => {
    setUsrlist((prevState) => [...prevState, user]);
  };

  return (
    <div className="container parent">
      <AddUserButton onNewUser={saveUserHandler} />
      <Users item={usrlist} />
    </div>
  );
}

export default App;
