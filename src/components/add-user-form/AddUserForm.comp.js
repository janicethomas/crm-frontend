import React from 'react'
import { Form, Row, Col, Button } from "react-bootstrap";

import PropTypes from 'prop-types';

import "./add-user-form.style.css";

export const AddUserForm = ({ handleOnSubmit, handleOnChange, frmDt, frmDataError }) => {
    console.log(frmDt)
    return (
        <div className="mt-3 jumbotron">
            <h1 className="text-info text-center">Add New User</h1>
            <hr />
            <Form autoComplete='off' onSubmit={handleOnSubmit}>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Name</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            name="userName"
                            value={frmDt.userName}
                            // minLength="3"
                            // maxLength="100"
                            onChange={handleOnChange}
                            placeholder='Enter name'
                            required
                        />
                        <Form.Text className="text-danger">{frmDataError.userName && "name is required!"}</Form.Text>
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Email</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            name="userEmail"
                            value={frmDt.userEmail}
                            // minLength="3"
                            // maxLength="100"
                            onChange={handleOnChange}
                            placeholder='Enter email'
                            required
                        />
                        <Form.Text className="text-danger">{frmDataError.userEmail && "email is required!"}</Form.Text>
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Password</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            name="userPasswd"
                            value={frmDt.userPasswd}
                            // minLength="3"
                            // maxLength="100"
                            onChange={handleOnChange}
                            placeholder='Enter password'
                            required
                        />
                        <Form.Text className="text-danger">{frmDataError.userPasswd && "password is required!"}</Form.Text>
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Role</Form.Label>
                    <Col sm={6}>
                        <Form.Select aria-label="Default select example">
                            {/* <option>Role</option> */}
                            <option value="Admin">Admin</option>
                            <option value="Client">Client</option>
                        </Form.Select>

                        <Form.Text className="text-danger">{frmDataError.userRole && "role is required!"}</Form.Text>
                    </Col>
                </Form.Group>

                <Button type="submit" variant='info' class="btn btn-large btn-success w-100 d-block">Submit</Button>
            </Form>

        </div>
    )
}



AddUserForm.propTypes = {
    handleOnSubmit: PropTypes.func.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    frmDt: PropTypes.object.isRequired,
    frmDataError: PropTypes.object.isRequired,
};