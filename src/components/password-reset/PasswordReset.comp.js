import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './PasswordReset.css'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export const ResetPassword = ({ handleOnChange, handleOnResetSubmit, formSwitcher, email }) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className='text-center my-5'>Reset Password</h1>
                    <hr />
                    <Form autoComplete='off' onSubmit={handleOnResetSubmit}>
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={email}
                                onChange={handleOnChange}
                                placeholder='Enter Email'
                                required
                            />
                        </Form.Group>
                        <br></br>
                        <Button type='Submit' class="btn">Reset Password</Button>
                    </Form>
                    <hr />
                </Col>
            </Row>
            <Row>
                {/* <Col> */}
                <button class="mx-3">
                <Link to={"/"} class="text-light text-decoration-none">
                Login Now
                </Link>
                </button>
                {/* </Col> */}
            </Row>
        </Container>
    )
}

ResetPassword.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
};
