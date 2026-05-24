export const LoginPage = () => {
  return (
    <>
      <div className="modal" tabIndex="-1" style={{display:"block"}}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Login Page</h5>
            </div>
            <form className="form-signin m-auto w-75 " action="">
              <div className="modal-body">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    name="username"
                  />
                  <label>Username</label>
                </div>
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="Password"
                  />
                  <label>Password</label>
                </div>
                <div className="form-check text-start my-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="remember-me"
                  />
                  <label className="form-check-label">Remember me</label>
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
