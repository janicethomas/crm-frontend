import React from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './userTable.css'

export const UserTable = ({ users }) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                </tr>
            </thead>

            <tbody>
                {users.length ? users.map((row) => (
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
                    </tr>}
            </tbody>
        </Table>
    );
};
