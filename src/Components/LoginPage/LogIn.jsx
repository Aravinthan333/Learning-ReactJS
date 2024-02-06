import { useState } from "react";
import Styles from "./Login.module.css";

const LogIn = ({ handleLogin }) => {
  return (
    <div className={Styles.body}>
      <span className="material-symbols-outlined" onClick={handleLogin}>
        close
      </span>
      <div className={Styles.loginPage}>
        <h1>Log In</h1>
        <div className={Styles.inputContainer}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" placeholder="User Name" />
        </div>
        <div className={Styles.inputContainer}>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="********" />
        </div>

        <button>Log In</button>
        <p>
          Don&apos;t have an account? <span>Sign Up</span>
        </p>
      </div>
    </div>
  );
};

const SignUp = ({ handleSignup }) => {
  return (
    <div className={Styles.body}>
      <span className="material-symbols-outlined" onClick={handleSignup}>
        close
      </span>
      <div className={Styles.loginPage}>
        <h1>Sign Up</h1>
        <div className={Styles.inputContainer}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" placeholder="User Name" />
        </div>
        <div className={Styles.inputContainer}>
          <label htmlFor="email">Mail Id:</label>
          <input type="mail" id="email" placeholder="Mail Id" />
        </div>
        <div className={Styles.inputContainer}>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="********" />
        </div>

        <button>Sign Up</button>
        <p>
          Already have an account? <span>Log In</span>
        </p>
      </div>
    </div>
  );
};

const Home = () => {
  const [isLogin, setLogin] = useState(null);

  const handleLogin = () => {
    setLogin(!isLogin);
  };

  const [isSignup, setSignup] = useState(null);

  const handleSignup = () => {
    setSignup(!isSignup);
  };

  return (
    <div className={Styles.home}>
      <button onClick={handleLogin}>Log In</button>
      <button onClick={handleSignup}>Sign Up</button>
      {isLogin && <LogIn handleLogin={handleLogin} />}
      {isSignup && <SignUp handleSignup={handleSignup} />}
    </div>
  );
};

export default Home;
