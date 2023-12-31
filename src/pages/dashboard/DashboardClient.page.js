import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import tickets from '../../assets/data/dummy-tickets.json';
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp';
import { Link } from 'react-router-dom';
import { TicketTableClient } from '../../components/ticket-table/TicketTableClient.comp';

export const DashboardClient = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <PageBreadcrumb page="Dashboard" />
                </Col>
            </Row>
            <Row>
                <Col className='text-center mt-5 mb-2'>
                    <Link to="/add-ticket-client">
                        <Button variant='info' style={{ 'fontSize': "2rem", padding: "10px 30px" }}> Add New Ticket</Button>
                    </Link>
                </Col>
            </Row>

            {/* <Row>
                <Col className='text-center mb-2'>
                    <div> Total tickets: 50</div>
                    <div> Pending tickets: 5</div>
                </Col>
            </Row> */}

            <Row>
                <Col className='mt-2 text-light'>
                    Recently added tickets
                </Col>
            </Row>
            <hr />

            <Row>
                <Col className='recent-ticket'>
                    <TicketTableClient tickets={tickets} />
                </Col>
            </Row>


        </Container>
    );
};