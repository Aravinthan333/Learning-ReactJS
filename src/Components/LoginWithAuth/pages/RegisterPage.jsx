import "./RegisterPage.css";

const RegisterPage = () => {
  return (
    <section className="register-block">
      <div className="container">
        <div className="row ">
          <div className="col register-sec">
            <h2 className="text-center">Register Now</h2>
            <form className="register-form" action="">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1" className="text-uppercase">
                  Name
                </label>

                <input type="text" className="form-control" name="name" id="" />
                <span className="text-danger">Name is required.</span>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1" className="text-uppercase">
                  Email
                </label>

                <input
                  type="text"
                  className="form-control"
                  name="email"
                  id=""
                />
                <span className="text-danger">Email is required.</span>
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
                  id=""
                />
                <span className="text-danger">Password is required.</span>
              </div>
              <div className="form-group">
                <span className="text-danger">
                  <p>Custom Error Message!</p>
                </span>
                <div className="text-center">
                  <div className="spinner-border text-primary " role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>

                <input
                  type="submit"
                  className="btn btn-login float-right"
                  value="Register"
                />
              </div>
              <div className="clearfix"></div>
              <div className="form-group">
                Already have account ? Please <a href="#">Login</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
