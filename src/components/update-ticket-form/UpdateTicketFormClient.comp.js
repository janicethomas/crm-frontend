import { useParams } from "react-router-dom";
import TicketFormClient from "../ticket-form/TicketFormClient.comp";
import Axios from "axios";
import { useEffect, useState } from "react";

export const UpdateTicketFormClient = () =>
{
    const {id} =  useParams();

    const [data,setData] = useState({subject:"",status:"",message:"",adminReply:""});
    const [newData, setNewData] = useState([]);

    useEffect(()=>{
        Axios.get("http://localhost:4000/ticketRoute/update-ticket/"+id)
        .then((res)=>{
            if(res.status === 200){
                const {subject,status,message,adminReply} = res.data;
                setData({subject,status,message,adminReply});
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err))
    },[id]);

    // useEffect(()=>{
    //     Axios.get("https://mern-crm-backend.onrender.com/ticketRoute/update-ticket/"+id)
    //     .then((res)=>{
    //         if(res.status === 200){
    //             const {subject,status,message,adminReply} = res.data;
    //             setData({subject,status,message,adminReply});
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
        const data = {subject:newData[0],status:newData[1],message:newData[2],adminReply:newData[3]}
        Axios.put("http://localhost:4000/ticketRoute/update-ticket/"+id, data)
        .then((res)=>{
            if(res.status === 200)
                alert("Record updated successfully");
            else
                Promise.reject();
        })
        .catch((err)=>alert(err))
    }

    // const handleSubmit = () => {
    //     const data = {subject:newData[0],status:newData[1],message:newData[2],adminReply:newData[3]}
    //     Axios.put("https://mern-crm-backend.onrender.com/ticketRoute/update-ticket/"+id, data)
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
            <TicketFormClient getState={getState} subjectValue={data.subject} statusValue={data.status} messageValue={data.message} adminReplyValue={data.adminReply}>
                    Update Ticket
                    </TicketFormClient>
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