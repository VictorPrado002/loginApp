import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export const UserForm= ({handlerAddUser, initialUserForm, userSelected})=>{
    const [userForm, setUserForm] = useState(initialUserForm);

    const { id, username, password, email } = userForm;
  useEffect(()=>{
    setUserForm({
      ...userSelected,
      password:'',
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


  const onSubmit = (event) => {
    event.preventDefault();
    if (!username || (!password&& id===0) || !email) {
      Swal.fire(
        'Error de validación',
        'Debe completar los campos del formulario.',
        'error'
      )
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
          {id > 0 ||
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
          }
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
      <div className="col-md-6">
        <input
          type="hidden"
          className="form-control"
          name="id"
          value={id}
        />
      </div>
      <button className="btn btn-primary w-50 my-4" type="submit">
        {id>0?'Editar':'Crear'}
      </button>
    </form>
  );
}