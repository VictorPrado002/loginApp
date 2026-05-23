export const UserRow = ({ id, username, email,password, handlerRemoveUser,handlerUserSelectedForm }) =>{
  
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{username}</td>
        <td>{email}</td>
        <td>
          <button 
            onClick={()=> handlerUserSelectedForm(
              {
                id,
                username,
                email,
                password
              })}
            type="button" 
            className="btn btn-sm btn-warning">
            Update
          </button>
        </td>
        <td>
          <button
            onClick={() => handlerRemoveUser(id)}
            type="button"
            className="btn btn-sm btn-danger"
          >
            Remove
          </button>
        </td>
      </tr>
    </>
  );
}