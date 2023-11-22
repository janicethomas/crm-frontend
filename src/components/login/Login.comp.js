import React from 'react';
import "./login.css";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export const LoginForm = ({ handleOnChange, handleOnSubmit, formSwitcher, email, pass }) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className='text-center ltitle'>Client Login</h1>
                    <hr />
                    <Form autoComplete='off' onSubmit={handleOnSubmit}>
                        <Form.Group>
                            <Form.Label class="password">Email Address</Form.Label>
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
                            <Form.Label class="password">Password</Form.Label>
                            <Form.Control
                                type="Password"
                                name="Password"
                                onChange={handleOnChange}
                                value={pass}
                                placeholder='Password'
                                required
                            />
                        </Form.Group>
                            <br></br>
                            <Button type='Submit'><Link to="/dashboard-client" class="text-light">Login</Link></Button>
                    </Form>
                    <hr />
                </Col>
            </Row>
            <Row >
                <Col>
                <Link to={"/forget-password/"} class='forgot'>
                Forgot Password
                </Link>
                </Col>
            </Row>
        </Container>
        
    )
}

LoginForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired
};
