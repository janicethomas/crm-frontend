import React from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './ticketTable.css'

export const TicketTable = ({ tickets }) => {
    return (
        <Table striped bordered hover>
            <thead className='thea'>
                <tr>
                    <th>#</th>
                    <th>Subjects</th>
                    <th>Status</th>
                    <th>Opened Date</th>
                </tr>
            </thead>

            <tbody>
                {tickets.length ? tickets.map((row) => (
                    <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>
                            <Link to={`/ticket/${row.id}`} className='rm-text-dec'>
                                {row.subject}
                            </Link>
                        </td>
                        <td>{row.status}</td>
                        <td>{row.addedAt}</td>
                    </tr>
                )) :
                    <tr>
                        <td colSpan="4">No ticket to show</td>
                    </tr>}
            </tbody>
        </Table>
    );
};
