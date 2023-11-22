import React from 'react'
// import { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from "react-bootstrap"
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp"
import { UpdateTicketFormClient } from '../../components/update-ticket-form/UpdateTicketFormClient.comp'
import { shortText } from '../../utils/validation'
import { Link } from 'react-router-dom'

export const UpdateTicketClient = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <PageBreadcrumb page="Update Ticket" />
                </Col>
            </Row>

            <Row>
                <Col>
                    <UpdateTicketFormClient/>
                </Col>
            </Row>
            <Row>
                <Col xs lg="2">
                    <Link to="/tickets-client">
                        <Button variant='info'>Back</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}