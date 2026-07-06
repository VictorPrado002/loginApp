import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { UserContext } from "../context/UserContext";

export const UserForm= ({userSelected,handlerCloseForm})=>{
  const {handlerAddUser, initialUserForm} =useContext(UserContext);
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

    if(!email.includes('@')){
      Swal.fire(
        'Error de validación email',
        'El email debe ser válido, incluir un @!',
        'error'
      )
      return;
    }
    console.log(userForm);

    //guardar userForm en el listado de usuarios
    handlerAddUser(userForm);
    setUserForm(initialUserForm);
  };
  const onCloseForm = ()=>{
    handlerCloseForm();
    setUserForm(initialUserForm);
  } 
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
      <button className="btn btn-primary w-25 my-4" type="submit">
        {id>0?'Editar':'Crear'}
      </button>
     
      {!handlerCloseForm ||  <button 
        className="btn btn-danger w-25 mx-2"
        type="button"
        onClick={()=>onCloseForm()}>
            Cerrar
      </button>}
    </form>
  );
}