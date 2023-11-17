import React from 'react'
// import { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from "react-bootstrap"
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp"
import { UpdateUserForm } from '../../components/update-user-form/UpdateUserForm.comp'
import { shortText } from '../../utils/validation'
import { Link } from 'react-router-dom'

export const UpdateUser = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <PageBreadcrumb page="Update User" />
                </Col>
            </Row>

            <Row>
                <Col>
                    <UpdateUserForm/>
                </Col>
            </Row>
            <Row>
                <Col xs lg="2">
                    <Link to="/users">
                        <Button variant='info'>Back</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}