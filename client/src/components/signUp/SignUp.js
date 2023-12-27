import { useState } from "react";

import "./SignUp.css";

function SignUp() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleSignUp = async (event) => {
    event.preventDefault();
    console.log(userName, email, password, phone);
  };

  return (
    <form className="SignUp">
      <h1>SignUp</h1>
      <input
        type="username"
        placeholder="Username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Repeat password"
        value={secondPassword}
        onChange={(e) => setSecondPassword(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button className="signUpButton" onClick={handleSignUp}>
        Signup
      </button>
      {/* todo: add login link */}
      <h5>Already have an account? Login</h5>
      <button className="googleButton">Login with Google</button>
    </form>
  );
}

export default SignUp;
