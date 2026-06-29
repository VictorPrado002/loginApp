import { useState } from "react";
import Swal from "sweetalert2";

const initialLoginForm = {
  username: "",
  password: "",
};

export const LoginPage = ({ handlerLogin }) => {
  const [loginForm, setLoginForm] = useState(initialLoginForm);
  const { username, password } = loginForm;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const onSubmit = () => {
    event.preventDefault();
    if (!username || !password) {
      Swal.fire(
        "Error de validación!",
        "Username y password requeridos.",
        "error",
      );
    }

    //implementar el login TODO
    handlerLogin({ username, password });
    
    setLoginForm(initialLoginForm);
  };

  return (
    <>
      <div className="modal show d-block" tabIndex="-1" >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header ">
              <h5 className="modal-title text-center ">Login </h5>
            </div>
            <form className="form-signin m-auto w-75 " onSubmit={onSubmit}>
              <div className="modal-body">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={onInputChange}
                  />
                  <label>Username</label>
                </div>
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={onInputChange}
                  />
                  <label>Password</label>
                </div>
                <div className="form-check text-start my-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={true}
                    name="remember"
                    onChange={()=>{
                      console.log(event.target.value)
                    }}
                  />
                  <label className="form-check-label">Remember me</label>
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary w-100">
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
