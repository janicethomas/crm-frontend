import Axios from "axios";
import { Link } from "react-router-dom";

function UserTableRow(props)
{
    const {_id, userName, userEmail, userRole} = props.obj;

    const handleClick = () => {
        Axios.delete("http://localhost:4000/userRoute/delete-user/"+ _id)
        .then((res)=>{
            if(res.status === 200)
            {
                alert("record deleted")
                window.location.reload()
            }
            else
            Promise.reject();

        })
        .catch((err)=>alert(err));
    }

    return(
        <tr>
            <td>
                    <Link to={"/update-user/"+_id} class="text-decoration-none">
                    {userName}
                    </Link>
            </td>
            <td>
                {userEmail}
            </td>
            <td>
                {userRole}
            </td>
            <td>
            <button onClick={handleClick} class="btn btn-danger">Delete</button>
            </td>
        </tr>
    )
}

export default UserTableRow;