import Axios from "axios";
import { Link } from "react-router-dom";

function TicketTableRow(props)
{
    const {_id, subject, status} = props.obj;

    const handleClick = () => {
        Axios.delete("http://localhost:4000/ticketRoute/delete-ticket/"+ _id)
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
                    <Link to={"/update-ticket/"+_id} class="text-decoration-none">
                    {subject}
                    </Link>
            </td>
            <td>
                {status}
            </td>
            <td>
            <button onClick={handleClick} class="btn btn-danger">Close</button>
            </td>
        </tr>
    )
}

export default TicketTableRow;