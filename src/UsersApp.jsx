import { UsersList } from "./components/UsersList";
import { UserForm } from "./components/UserForm";
import { useUsers } from "./hooks/useUsers";



export const UsersApp = () =>{
    
    const {
        users,
        userSelected,
        initialUserForm,
        visibleForm,
        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm,
        handlerOpenForm,
        handlerCloseForm
    } = useUsers();

    return (
      <>
          {!visibleForm || 
            <div className="abrir-modal animacion fadeIn">
              <div className="modal" style={{display:"block"}} tabIndex="-1">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">
                        {userSelected.id>0 ?'Editar':'Crear'} Modal Usuarios
                      </h5>
                    </div>
                    <div className="modal-body">
                      <UserForm 
                        handlerAddUser={handlerAddUser} 
                        initialUserForm={initialUserForm} 
                        userSelected={userSelected}
                        handlerCloseForm={handlerCloseForm}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }

         <div className="container my-4 ">
      <div className="row">
        <div className="col">
          {visibleForm ||
          <button 
          className="btn btn-primary my-2"
          onClick={handlerOpenForm}>
            Nuevo Usuario
          </button>}
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
    </>
    );
}