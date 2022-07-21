import React, { useState } from "react";
import "./login.css";
import userData from "../Db/users.json";
import { useNavigate } from "react-router-dom";
import { useServer } from "../context";

const Login = () => {
  const [hasError, SetHasError] = useState(false);

  const { dispatch } = useServer();

  const navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();
    const userName = e.target.username.value;
    const pass = e.target.pass.value;
    const finduser = userData.filter(
      (item) => item.username === userName && item.password === pass
    );

    if (finduser.length > 0) {
      navigate("/home");
      dispatch({ type: "login", payload: finduser });
    } else {
      SetHasError(true);
    }
  };

  return (
    <div className="container">
      <h2>LOGIN</h2>
      <form className="login-form" onSubmit={loginHandler}>
        {hasError && <p className="error">Incorrect Username or password</p>}
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          required
        />
        <input
          type="password"
          id="pass"
          name="pass"
          placeholder="password"
          required
        />
        <input type="submit" id="login" value="Login" />
      </form>
    </div>
  );
};

export default Login;
