import { useState } from "react";
import UserForm from "./UserForm";

const AddUserButton = (props) => {
  const [name, setName] = useState("Add user");

  const nameHandler = () => {
    if (name === "Add user") {
      return setName("Close");
    }
    if (name === "Close") {
      return setName("Add user");
    }
  };

  const saveUserHandler = (user) => {
    const UserData = {
      ...user,
      id: Math.random().toString(),
    };
    props.onNewUser(UserData);
  };

  return (
    <div>
      <p className="text-center">
        <a
          className="btn btn-primary "
          data-bs-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
          onClick={nameHandler}
        >
          {name}
        </a>
      </p>
      <div className="collapse" id="collapseExample">
        <div className="card card-body ">
          <UserForm onSave={saveUserHandler} />
        </div>
      </div>
    </div>
  );
};

export default AddUserButton;
