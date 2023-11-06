import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export const AgentLogin = ({ handleOnChange, handleOnSubmit, formSwitcher, email, pass }) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className='text-info text-center'>Agent Login</h1>
                    <hr />
                    <Form autoComplete='off' onSubmit={handleOnSubmit}>
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

                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="Password"
                                name="Password"
                                onChange={handleOnChange}
                                value={pass}
                                placeholder='Password'
                                required
                            />
                        </Form.Group>

                        <Button type='Submit'>Login</Button>
                    </Form>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                <Link to={"/forget-password/"}>
                Forgot Password
                </Link>
                </Col>
            </Row>
        </Container>
    )
}

AgentLogin.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired
};