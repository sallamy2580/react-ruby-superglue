import { useState } from "react";
import { Link } from "react-router-dom";
import "./LogIn.css";
const LogIn = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    is_teacher: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div className="login-register">
      <section className="login-register-heading">
        <h1>TalenTree</h1>
        <h5>Where leaders create leaders</h5>
      </section>
      <form className="login-register-form">
        <h2>Log In</h2>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={user.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={user.password}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
        <p>
          Don't have an account?{" "}
          <Link className="login-register-link" to="/register">
            Register now!
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LogIn;
