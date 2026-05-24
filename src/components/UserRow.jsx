export const UserRow = ({ id, username, email, handlerRemoveUser,handlerUserSelectedForm }) =>{
  
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
                email
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