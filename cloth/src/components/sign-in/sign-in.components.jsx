import React, { useState } from "react";
import "./sign-in.styles.scss";

const SignIn = () => {
  const [sign, setSign] = useState({ email: "", password: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSign({ email: "", password: "" });
  };
  const handleChange = (e) => {
    if (e.target.name == "email") setSign({ email: e.target.value });
    else setSign({ password: e.target.value });
  };
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          value={sign.email}
          onChange={handleChange}
          required
        />
        <label>Email</label>
        <input
          name="password"
          type="password"
          value={sign.password}
          onChange={handleChange}
          required
        />
        <label>password</label>
        <input type="submit" value="submit form" />
      </form>
    </div>
  );
};
export default SignIn;
