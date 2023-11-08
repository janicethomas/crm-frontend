import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./PasswordReset.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const ResetPassword = ({
  handleOnChange,
  handleOnResetSubmit,
  formSwitcher,
  email,
}) => {
  return (
    <div>
      <Container>
        <Row className="container-fluid d-flex flex-wrap flex-row justify-content-around align-items-center">
          <Col className="jumbotron1">
            <h1 className="text-center">Reset Password</h1>
            <hr />
            <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
              <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleOnChange}
                  placeholder="Enter Email"
                  required
                />
              </Form.Group>
              <br></br>
              <Button type="Submit" class="btn">
                Reset Password
              </Button>
            </Form>
            <hr />
            <button>
              <Link to={"/"} class="text-light text-decoration-none">
                Login Now
              </Link>
            </button>
          </Col>
        </Row>
      </Container>
      <div class="footer-bottom">
        <div class="container">
          <p class="m-0 text-center">
            &copy; 2023 <i>CRM360</i>. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

ResetPassword.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnResetSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};
