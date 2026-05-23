import { useEffect, useState } from "react";

export const UserForm= ({handlerAddUser, initialUserForm, userSelected})=>{
    const [userForm, setUserForm] = useState(initialUserForm);

  useEffect(()=>{
    setUserForm({
      ...userSelected,
      //password:'',
    });
  },[userSelected]);
    const onInputChange = ({ target }) => {
    //console.log(target);
    const { name, value } = target;
    setUserForm({
      ...userForm,
      [name]: value,
    });
  };

  const { username, password, email } = userForm;

  const onSubmit = (event) => {
    event.preventDefault();
    if (!username || !password || !email) {
      alert('debe completar los campos del formulario.');
      return;
    }
    console.log(userForm);

    //guardar userForm en el listado de usuarios
    handlerAddUser(userForm);
    setUserForm(initialUserForm);
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="col-md-6">
        <label className="form-label">Username</label>
        <input
          type="text"
          className="form-control"
          name="username"
          value={username}
          placeholder="Username"
          onChange={onInputChange}
        />
      </div>
      <div className="col-md-6">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          value={password}
          placeholder="Password"
          onChange={onInputChange}
        />
      </div>
      <div className="col-md-6">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={email}
          placeholder="Email"
          onChange={onInputChange}
        />
      </div>
      <button className="btn btn-primary w-50 my-4" type="submit">
        Crear
      </button>
    </form>
  );
}