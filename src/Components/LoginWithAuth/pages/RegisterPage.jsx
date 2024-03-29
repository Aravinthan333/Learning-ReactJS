import { useState } from "react";
import "./RegisterPage.css";
import { RegisterApi } from "../services/Api";
import { storeUserData } from "../services/Storage";
import { isAuthenticated } from "../services/Auth";
import { Link, Navigate } from "react-router-dom";
import NavBar from "../components/NavBar";

const RegisterPage = () => {
  const initialStateErrors = {
    email: { required: false },
    password: { required: false },
    name: { required: false },
    custom_error: null,
  };

  const [errors, setErrors] = useState(initialStateErrors);

  const [Loading, setLoading] = useState(false);

  const [inputs, setInputs] = useState({ email: "", password: "", name: "" });

  const handleInput = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = initialStateErrors;
    let hasError = false;
    if (inputs.name == "") {
      errors.name.required = true;
      hasError = true;
    }
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
      RegisterApi(inputs)
        .then((res) => {
          // console.log(res);
          storeUserData(res.data.idToken);
        })
        .catch((err) => {
          // console.log(err);
          if (err.response.data.error.message == "EMAIL_EXISTS") {
            setErrors({
              ...errors,
              custom_error: "Email is registered already!!!",
            });
          } else if (
            String(err.response.data.error.message).includes("WEAK_PASSWORD")
          ) {
            setErrors({
              ...errors,
              custom_error: "Password must be atleast 6 characters",
            });
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }

    setErrors({ ...errors });
  };

  // ----------------------------------------------------------------------

  if (isAuthenticated()) {
    return <Navigate to="/dashboard" />;
  }

  // ----------------------------------------------------------------------
  return (
    <div>
      <NavBar />
      <section className="register-block">
        <div className="container">
          <div className="row ">
            <div className="col register-sec">
              <h2 className="text-center">Register Now</h2>
              <form onSubmit={handleSubmit} className="register-form" action="">
                <div className="form-group">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="text-uppercase"
                  >
                    Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    onChange={handleInput}
                    id=""
                  />
                  {errors.name.required && (
                    <span className="text-danger">Name is required.</span>
                  )}
                </div>
                <div className="form-group">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="text-uppercase"
                  >
                    Email
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    onChange={handleInput}
                    id=""
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
                    onChange={handleInput}
                    id=""
                  />
                  {errors.password.required && (
                    <span className="text-danger">Password is required.</span>
                  )}
                </div>
                <div className="form-group">
                  <span className="text-danger">
                    {errors.custom_error ? <p>{errors.custom_error}</p> : null}
                  </span>
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

                  <input
                    type="submit"
                    className="btn btn-login float-right"
                    value="Register"
                    disabled={Loading}
                  />
                </div>
                <div className="clearfix"></div>
                <div className="form-group">
                  Already have account ? Please <Link to="/login">Login</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegisterPage;
