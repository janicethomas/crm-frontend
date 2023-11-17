import { useEffect, useState } from "react";

function UserForm(props) {
const[name, setName] = useState(props.nameValue);
const[email, setEmail] = useState(props.emailValue);
const[passwd, setPasswd] = useState(props.passwdValue);
const[role, setRole] = useState(props.roleValue);

const arr = [name, email, passwd, role];

useEffect(()=>{
    setName(props.nameValue);
    setEmail(props.emailValue);
    setPasswd(props.passwdValue);
    setRole(props.role);
},[props.nameValue,props.emailValue,props.passwdValue,props.roleValue])

const handleClick = () => {
    props.getState(arr);
}

    return(
        <div style={{maxWidth:"40%", margin:"0px auto"}}>
            <input defaultValue={props.nameValue} onChange={(event)=>setName(event.target.value)} class = "form-control my-3" placeholder="Enter name"/>
            <input defaultValue={props.emailValue} onChange={(event)=>setEmail(event.target.value)} class = "form-control my-3" placeholder="Enter email"/>
            <input defaultValue={props.passwdValue} onChange={(event)=>setPasswd(event.target.value)} class = "form-control my-3" placeholder="Enter password"/>
            <input defaultValue={props.roleValue} onChange={(event)=>setRole(event.target.value)} class = "form-control my-3" placeholder="Enter role"/>
            <button onClick={handleClick} class = "btn btn-success d-block mx-auto my-3" type = "submit">{props.children}</button>
        </div>
    )
}

export default UserForm;