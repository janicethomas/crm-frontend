import { useParams } from "react-router-dom";
import UserForm from "../user-form/UserForm.comp";
import Axios from "axios";
import { useEffect, useState } from "react";

export const UpdateUserForm = () =>
{
    const {id} =  useParams();

    const [data,setData] = useState({userName:"",userEmail:"",userPasswd:"",userRole:""});
    const [newData, setNewData] = useState([]);

    useEffect(()=>{
        Axios.get("http://localhost:4000/userRoute/update-user/"+id)
        .then((res)=>{
            if(res.status === 200){
                const {userName,userEmail,userPasswd,userRole} = res.data;
                setData({userName,userEmail,userPasswd,userRole});
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err))
    },[id]);

    // useEffect(()=>{
    //     Axios.get("https://mern-crm-backend.onrender.com/userRoute/update-user/"+id)
    //     .then((res)=>{
    //         if(res.status === 200){
    //             const {userName,userEmail,userPasswd,userRole} = res.data;
    //             setData({userName,userEmail,userPasswd,userRole});
    //         }
    //         else
    //             Promise.reject();
    //     })
    //     .catch((err)=>alert(err))
    // },[id]);


    const getState = (childData) =>{
        setNewData(childData);
    }

    const handleSubmit = () => {
        const data = {userName:newData[0],userEmail:newData[1],userPasswd:newData[2],userRole:newData[3]}
        Axios.put("http://localhost:4000/userRoute/update-user/"+id, data)
        .then((res)=>{
            if(res.status === 200)
                alert("Record updated successfully");
            else
                Promise.reject();
        })
        .catch((err)=>alert(err))
    }

    // const handleSubmit = () => {
    //     const data = {userName:newData[0],userEmail:newData[1],userPasswd:newData[2],userRole:newData[3]}
    //     Axios.put("https://mern-crm-backend.onrender.com/userRoute/update-user/"+id, data)
    //     .then((res)=>{
    //         if(res.status === 200)
    //             alert("Record updated successfully");
    //         else
    //             Promise.reject();
    //     })
    //     .catch((err)=>alert(err))
    // }

    return (
        <form onSubmit={handleSubmit}>
            <UserForm getState={getState} nameValue={data.userName} emailValue={data.userEmail} passwdValue={data.userPasswd} roleValue={data.userRole}>
                    Update Ticket
                    </UserForm>
        </form>
    )
}


// import React from 'react';
// import { Form, Button } from 'react-bootstrap';
// import PropTypes from 'prop-types';

// export const UpdateTicket = ({ msg, handleOnChange, handleOnSubmit}) => {


//     return (
//         <Form onSubmit={handleOnSubmit}>
//             <Form.Label>Reply</Form.Label>
//             <Form.Text style={{ display: 'block' }}>
//                 Please reply your message here or update the ticket
//             </Form.Text>
//             <Form.Control
//                 as='textarea'
//                 row="5"
//                 name="detail"
//                 value={msg}
//                 onChange={handleOnChange}
//             />
//             <div className="text-right mt-3 mb-3">
//                 <Button variant='info' type='submit'>
//                     Reply
//                 </Button>
//             </div>
          
//         </Form>
//     );
// };


// UpdateTicket.propTypes = {
//     msg: PropTypes.string.isRequired,
//     handleOnChange: PropTypes.func.isRequired,
//     handleOnSubmit: PropTypes.func.isRequired,
// }

// import React from 'react';
// import { Form, Button } from 'react-bootstrap';
// import PropTypes from 'prop-types';

// export const UpdateUser = ({ msg, handleOnChange, handleOnSubmit}) => {


//     return (
//         <Form onSubmit={handleOnSubmit}>
//             <Form.Label>Reply</Form.Label>
//             <Form.Text style={{ display: 'block' }}>
//                 Please reply your message here or update the User
//             </Form.Text>
//             <Form.Control
//                 as='textarea'
//                 row="5"
//                 name="detail"
//                 value={msg}
//                 onChange={handleOnChange}
//             />
//             <div className="text-right mt-3 mb-3">
//                 <Button variant='info' type='submit'>
//                     Reply
//                 </Button>
//             </div>
          
//         </Form>
//     );
// };


// UpdateUser.propTypes = {
//     msg: PropTypes.string.isRequired,
//     handleOnChange: PropTypes.func.isRequired,
//     handleOnSubmit: PropTypes.func.isRequired,
// }