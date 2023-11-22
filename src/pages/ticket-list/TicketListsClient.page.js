import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { SearchForm } from '../../components/search-form/SearchForm.comp';
import { TicketTableClient } from '../../components/ticket-table/TicketTableClient.comp';
import tickets from '../../assets/data/dummy-tickets.json'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp';
import { Link } from 'react-router-dom';

    export const TicketListsClient = () => {

        const [str, setStr] = useState('');

        const [dispTicket, setDispTicket] = useState([tickets]);


        useEffect(() => { }, [str, dispTicket]);
        useEffect(() => { }, [str, dispTicket]);
        

        const handleOnChange = e => {
            const { value } = e.target;
            console.log(value);
            setStr(value);
            searchTicket(value);
        };

        const searchTicket = (sttr) => {
            const displayTickets = tickets.filter((row) =>
                row.subject.toLowerCase().includes(sttr.toLowerCase())
            );

            setDispTicket(displayTickets);
        };

        return (
            <Container>
                <Row>
                    <Col>
                        <PageBreadcrumb page="Ticket List" />
                    </Col>
                </Row>
                <Row className='mt-4'>
                    <Col>
                        <Link to="/add-ticket-client">
                            <Button variant='info'>Add new Ticket</Button>
                        </Link>
                    </Col>
                    <Col className='text-right'>
                        <SearchForm handleOnChange={handleOnChange} str={str} />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <TicketTableClient/>
                    </Col>
                </Row>
            </Container>
        );
    };
