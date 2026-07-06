import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export const UserRow = ({ id, username, email}) =>{
  const { handlerRemoveUser,handlerUserSelectedForm } = useContext(UserContext);
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
          <NavLink className={"btn btn-sm btn-warning"} 
            to={'/users/edit/'+ id}>
            Update Route
          </NavLink>
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