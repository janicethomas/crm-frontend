import React from 'react'
// import { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from "react-bootstrap"
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp"
import { UpdateTicketForm } from '../../components/update-ticket-form/UpdateTicketForm.comp'
import { shortText } from '../../utils/validation'
import { Link } from 'react-router-dom'

export const UpdateTicket = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <PageBreadcrumb page="Update Ticket" />
                </Col>
            </Row>

            <Row>
                <Col>
                    <UpdateTicketForm/>
                </Col>
            </Row>
            <Row>
                <Col xs lg="2">
                    <Link to="/tickets">
                        <Button variant='info'>Back</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}