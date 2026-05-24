import { useReducer, useState } from "react";
import { UsersList } from "./components/UsersList";
import { UserForm } from "./components/UserForm";
import { usersReducer } from "./reducers/usersReducer";

const initialUsers = [
  {
    id: 1,
    username: 'Victor',
    password: '12345',
    email: 'pepe@correo.com',
  },
];

const initialUserForm={
    id: 0,
    username:'',
    password:'',
    email:'',
}

export const UsersApp = () =>{
    const [users, dispatch] = useReducer(usersReducer, initialUsers);
    const [userSelected,setUserSelected] =useState(initialUserForm);
    
    const handlerAddUser = (user) => {
        let type;

        if (user.id ===0){
          type='addUser';
        }else{
          type='updateUser'
        }
        dispatch({
        type,
        payload: user,
        });
    };
    const handlerRemoveUser = (id) => {
        console.log(id);
        dispatch({
        type: 'removeUser',
        payload: id,
        });
    };
    const handlerUserSelectedForm =(user) =>{
      //console.log(user);
      setUserSelected({...user});
    }

    return (
         <div className="container my-4 ">
      <div className="row">
        <div className="col">
          <UserForm handlerAddUser={handlerAddUser} initialUserForm={initialUserForm} userSelected={userSelected}/>
        </div>
        <div className="col">
          {users.length===0
          ? <div className="alert alert-warning">No hay usuarios en el sistema!</div>
          : <UsersList
              users={users} 
              handlerRemoveUser={handlerRemoveUser}
              handlerUserSelectedForm={handlerUserSelectedForm} />}
        </div>
      </div>
      <h2 className="text-center">Users App</h2>
      <form className="form-signin m-auto w-40 " action="">
        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            placeholder="name@example.com"
          />
          <label>Email Adress</label>
        </div>
        <div className="form-floating">
          <input type="text" className="form-control" placeholder="Password" />
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
        <button className="btn btn-primary w-100 py-2">Sign in</button>
      </form>
    </div>
    );
}