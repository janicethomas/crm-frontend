import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from "react-bootstrap"
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp"
import { AddUserForm } from "../../components/add-user-form/AddUserForm.comp"
import { shortText } from '../../utils/validation'
import { Link } from 'react-router-dom'


const initialFrmDt = {
    userName: "",
    userPasswd: "",
    userPhone: "",
    userEmail: "",
    userRole: ""

};

const initialFrmError = {
    userName: false,
    userPasswd: false,
    userPhone: false,
    userEmail: false,
    userRole: false
};

export const AddUser = () => {
    const [frmData, setFrmData] = useState(initialFrmDt);
    const [frmDataError, setFrmDataError] = useState(initialFrmError);
    useEffect(() => { }, [frmData, frmDataError]);

    const handleOnChange = e => {
        const { name, value } = e.target;
        setFrmData({
            initialFrmDt,
            [name]: value
        })
    };

    const handleOnSubmit = async e => {
        e.preventDefault()

        setFrmDataError(initialFrmError)
        const isSubjectValid = await shortText(frmData.subject)

        setFrmDataError({
            initialFrmError,
            subject: !isSubjectValid,
        });
        console.log('Form submit request received')
    };

    return (
        <Container>
            <Row>
                <Col>
                    <PageBreadcrumb page="New User" />
                </Col>
            </Row>

            <Row>
                <Col>
                    <AddUserForm handleOnChange={handleOnChange}
                        handleOnSubmit={handleOnSubmit} frmDt={frmData}
                        frmDataError={frmDataError}
                    />
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
