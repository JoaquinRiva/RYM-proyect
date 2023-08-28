import {useState} from "react";
import {validar} from "../helpers";

function Login({login}) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "Email required", //
    password: "Password required", //
  });

  function inputHandler(e) {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validar({
        ...userData,
        [e.target.name]: e.target.value,
      })
    );
  }

  function submitHandler(e) {
    e.preventDefault();

    login(userData);
  }

  function diseableHandler() {
    let disabled;
    for (let error in errors) {
      if (errors[error] === "") disabled = false;
      else {
        disabled = true;
        break;
      }
    }

    return disabled;
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>USERNAME</label>
          <input
            type="text"
            name="email"
            value={userData.email}
            onChange={inputHandler}
            placeholder="wubalubadubdub@flarg.com"
          />
          <span>{errors.email}</span>
        </div>
        <div>
          <label>PASSWORD</label>
          <input
            name="password"
            type="password"
            value={userData.password}
            onChange={inputHandler}
            placeholder="Password"
          />
        </div>
        {errors.password && <span>{errors.password}</span>}
        {/* {errors.password || errors.email ? null : (
          <button type="submit">SUBMIT</button>
        )} */}
        <button disabled={diseableHandler()} type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default Login;
