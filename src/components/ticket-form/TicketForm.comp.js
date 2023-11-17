import { useEffect, useState } from "react";

function TicketForm(props) {
const[subject, setSubject] = useState(props.subjectValue);
const[status, setStatus] = useState(props.statusValue);
const[message, setMessage] = useState(props.messageValue);
const[adminReply, setAdminReply] = useState(props.adminReplyValue);

const arr = [subject, status, message, adminReply];

useEffect(()=>{
    setSubject(props.subjectValue);
    setStatus(props.statusValue);
    setMessage(props.messageValue);
    setAdminReply(props.adminReply);
},[props.subjectValue,props.statusValue,props.messageValue,props.adminReplyValue])

const handleClick = () => {
    props.getState(arr);
}

    return(
        <div style={{maxWidth:"40%", margin:"0px auto"}}>
            <input defaultValue={props.subjectValue} onChange={(event)=>setSubject(event.target.value)} class = "form-control my-3" placeholder="Enter your subject"/>
            <input defaultValue={props.statusValue} onChange={(event)=>setStatus(event.target.value)} class = "form-control my-3" placeholder="Enter your status"/>
            <input defaultValue={props.messageValue} onChange={(event)=>setMessage(event.target.value)} class = "form-control my-3" placeholder="Enter your message"/>
            <input defaultValue={props.adminReplyValue} onChange={(event)=>setAdminReply(event.target.value)} class = "form-control my-3" placeholder="Enter your reply"/>
            <button onClick={handleClick} class = "btn btn-success d-block mx-auto my-3" type = "submit">{props.children}</button>
        </div>
    )
}

export default TicketForm;