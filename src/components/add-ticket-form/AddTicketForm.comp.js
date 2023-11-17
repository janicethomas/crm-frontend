import React from 'react'
import { Form, Row, Col, Button } from "react-bootstrap";

import PropTypes from 'prop-types';

import "./add-ticket-form.style.css";

export const AddTicketForm = ({ handleOnSubmit, handleOnChange, frmDt, frmDataError }) => {
    console.log(frmDt)
    return (
        <div className="mt-3 jumbotron boxing">
            <h1 className="text-info text-center tti">Add New Ticket</h1>
            <hr />
            <Form autoComplete='off' onSubmit={handleOnSubmit}>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Subject</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            name="subject"
                            value={frmDt.subject}
                            // minLength="3"
                            // maxLength="100"
                            onChange={handleOnChange}
                            placeholder='Subject'
                            required
                        />
                        <Form.Text className="text-danger">{frmDataError.subject && "subject is required!"}</Form.Text>
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm={5}>Issue Found</Form.Label>
                    <Col sm={7}>
                        <Form.Control
                            type="date"
                            name="issueDate"
                            value={frmDt.issueDate}
                            onChange={handleOnChange}
                            required
                        />
                    </Col>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Details</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="detail"
                        rows="5"
                        value={frmDt.detail}
                        onChange={handleOnChange}
                        required
                    />
                </Form.Group>
                <br></br>
                <Button type="submit" variant='info' class="btn btn-large btn-success w-100 d-block">Submit</Button>
            </Form>

        </div>
    )
}



AddTicketForm.propTypes = {
    handleOnSubmit: PropTypes.func.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    frmDt: PropTypes.object.isRequired,
    frmDataError: PropTypes.object.isRequired,
};
