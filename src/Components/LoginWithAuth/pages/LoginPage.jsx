import { LoginApi } from "../services/Api";
import "./LoginPage.css";
import { useState } from "react";
import { storeUserData } from "../services/Storage";
import { isAuthenticated } from "../services/Auth";
import { Link, Navigate } from "react-router-dom";
import NavBar from "../components/NavBar";

const LoginPage = () => {
  const initialStateErrors = {
    email: { required: false },
    password: { required: false },
    custom_error: null,
  };

  const [errors, setErrors] = useState(initialStateErrors);
  const [Loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({ email: "", password: "" });

  const handleInput = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = initialStateErrors;
    let hasError = false;
    if (inputs.email == "") {
      errors.email.required = true;
      hasError = true;
    }
    if (inputs.password == "") {
      errors.password.required = true;
      hasError = true;
    }

    if (!hasError) {
      setLoading(true);
      LoginApi(inputs)
        .then((res) => {
          // console.log(res);
          storeUserData(res.data.idToken);
        })
        .catch((err) => {
          //   console.log(err);
          if (err.code == "ERR_BAD_REQUEST") {
            setErrors({ ...errors, custom_error: "Invalid Credentials" });
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }

    setErrors({ ...errors });
  };

  if (isAuthenticated()) {
    return <Navigate to="/dashboard" />;
  }
  // -----------------------------------------------------------------------

  return (
    <div>
      <NavBar />
      <section className="login-block">
        <div className="container">
          <div className="row ">
            <div className="col login-sec">
              <h2 className="text-center">Login Now</h2>
              <form className="login-form" onSubmit={handleSubmit} action="">
                <div className="form-group">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="text-uppercase"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id=""
                    placeholder="email"
                    onChange={handleInput}
                  />
                  {errors.email.required && (
                    <span className="text-danger">Email is required.</span>
                  )}
                </div>
                <div className="form-group">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="text-uppercase"
                  >
                    Password
                  </label>
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="password"
                    id=""
                    onChange={handleInput}
                  />
                  {errors.password.required && (
                    <span className="text-danger">Password is required.</span>
                  )}{" "}
                </div>
                <div className="form-group">
                  {Loading && (
                    <div className="text-center">
                      <div
                        className="spinner-border text-primary "
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                    </div>
                  )}
                  <span className="text-danger">
                    {errors.custom_error ? <p>{errors.custom_error}</p> : null}
                  </span>
                  <input
                    type="submit"
                    className="btn btn-login float-right"
                    value="Login"
                    disabled={Loading}
                  />
                </div>
                <div className="clearfix"></div>
                <div className="form-group">
                  Create new account ? Please{" "}
                  <Link to="/register">Register</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
