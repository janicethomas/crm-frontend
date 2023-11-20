import React from 'react'
import {useEffect, useState} from 'react'
import Axios  from 'axios'
import { Table } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import UserTableRow from "./UserTableRow"
import './userTable.css'

export const UserTable = () => {
    const [arr,setArr] = useState([]);

    // useEffect(()=>{
    //     Axios.get("http://localhost:4000/userRoute")
    //     .then((res)=>{
    //         if (res.status === 200)
    //             setArr(res.data);
    //         else
    //             Promise.reject();
    //     })
    //     .catch((err)=>alert(err))
    // },[])

    useEffect(()=>{
        Axios.get("https://mern-crm-backend.onrender.com/userRoute")
        .then((res)=>{
            if (res.status === 200)
                setArr(res.data);
            else
                Promise.reject();
        })
        .catch((err)=>alert(err))
    },[])

    const ListItems = () => {
        return arr.map((val,ind)=>{
            return <UserTableRow key={ind} obj = {val}/>
        })
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Delete</th>
                </tr>
            </thead>

            <tbody>
                {/* {users.length ? users.map((row) => (
                    <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>
                            <Link to={`/user/${row.id}`} className='rm-text-dec'>{row.userName}
                            </Link>
                            </td>
                        <td>{row.userEmail}</td>
                        <td>{row.userRole}</td>
                    </tr>
                )) :
                    <tr>
                        <td colSpan="4">No ticket to show</td>
                    </tr>} */}
                    {ListItems()}
            </tbody>
        </Table>
    );
};
