import { useState } from "react";
import "./UserForm.css";

const UserForm = (props) => {
  const [isvalid, setIsvalid] = useState({
    name: true,
    username: true,
  });
  const [userinput, setUserinput] = useState({
    name: "",
    username: "",
  });

  const nameChangeHandler = (event) => {
    if (event.target.value.length > 0) {
      setIsvalid((prevState) => {
        return { ...prevState, name: true };
      });
    }
    setUserinput((prevState) => {
      return { ...prevState, name: event.target.value };
    });
  };

  const usernameChangeHandler = (event) => {
    if (event.target.value.length > 0) {
      setIsvalid((prevState) => {
        return { ...prevState, username: true };
      });
    }
    setUserinput((prevState) => {
      return { ...prevState, username: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (userinput.name === "") {
      return setIsvalid((prevState) => {
        return { ...prevState, name: false };
      });
    }
    if (userinput.username === "") {
      return setIsvalid((prevState) => {
        return { ...prevState, username: false };
      });
    }

    props.onSave(userinput);
    setUserinput((prevState) => {
      return { ...prevState, name: "", username: "" };
    });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="row">
          <div className={`col-6 ${isvalid.name ? "" : "invalid"}`}>
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              onChange={nameChangeHandler}
              value={userinput.name}
            />
          </div>
          <div className={`col-6 ${isvalid.username ? "" : "invalid"}`}>
            <label className="form-label">Username</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              onChange={usernameChangeHandler}
              value={userinput.username}
            />
          </div>
        </div>
        <p />
        <p>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </p>
      </form>
    </div>
  );
};

export default UserForm;
