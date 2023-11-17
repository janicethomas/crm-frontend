import UserForm from "../user-form/UserForm.comp";
import { useState } from "react";
import Axios from "axios";

function AddUserForm()
{
    const [arr,setArr] = useState([]);
    const getState = (childData)=>{
        setArr(childData);
    }

    const handleSubmit = () => {
        const data = {userName: arr[0], userEmail: arr[1], userPasswd: arr[2], userRole: arr[3]}
        Axios.post("http://localhost:4000/userRoute/create-user",data)
        .then((res)=>{
            if(res.status === 200)
                alert("record added")
            else
            Promise.reject();

        })
        .catch((err)=>alert(err));
    }

    return(
        <form onSubmit={handleSubmit}>
            <UserForm getState={getState} nameValue="" emailValue="" passwdValue="" roleValue="">
                Create user
            </UserForm>
        </form>
    )
}

export default AddUserForm;


// import React from 'react'
// import { Form, Row, Col, Button } from "react-bootstrap";

// import PropTypes from 'prop-types';

// import "./add-ticket-form.style.css";

// export const AddTicketForm = ({ handleOnSubmit, handleOnChange, frmDt, frmDataError }) => {
//     console.log(frmDt)
//     return (
//         <div className="mt-3 jumbotron boxing">
//             <h1 className="text-info text-center tti">Add New Ticket</h1>
//             <hr />
//             <Form autoComplete='off' onSubmit={handleOnSubmit}>
//                 <Form.Group as={Row}>
//                     <Form.Label column sm={3}>Subject</Form.Label>
//                     <Col sm={9}>
//                         <Form.Control
//                             name="subject"
//                             value={frmDt.subject}
//                             // minLength="3"
//                             // maxLength="100"
//                             onChange={handleOnChange}
//                             placeholder='Subject'
//                             required
//                         />
//                         <Form.Text className="text-danger">{frmDataError.subject && "subject is required!"}</Form.Text>
//                     </Col>
//                 </Form.Group>

//                 <Form.Group as={Row}>
//                     <Form.Label column sm={5}>Issue Found</Form.Label>
//                     <Col sm={7}>
//                         <Form.Control
//                             type="date"
//                             name="issueDate"
//                             value={frmDt.issueDate}
//                             onChange={handleOnChange}
//                             required
//                         />
//                     </Col>
//                 </Form.Group>

//                 <Form.Group>
//                     <Form.Label>Details</Form.Label>
//                     <Form.Control
//                         as="textarea"
//                         name="detail"
//                         rows="5"
//                         value={frmDt.detail}
//                         onChange={handleOnChange}
//                         required
//                     />
//                 </Form.Group>
//                 <br></br>
//                 <Button type="submit" variant='info' class="btn btn-large btn-success w-100 d-block">Submit</Button>
//             </Form>

//         </div>
//     )
// }



// AddTicketForm.propTypes = {
//     handleOnSubmit: PropTypes.func.isRequired,
//     handleOnChange: PropTypes.func.isRequired,
//     frmDt: PropTypes.object.isRequired,
//     frmDataError: PropTypes.object.isRequired,
// };


// import React from 'react'
// import { Form, Row, Col, Button } from "react-bootstrap";

// import PropTypes from 'prop-types';

// import "./add-user-form.style.css";

// export const AddUserForm = ({ handleOnSubmit, handleOnChange, frmDt, frmDataError }) => {
//     console.log(frmDt)
//     return (
//         <div className="mt-3 jumbotron">
//             <h1 className="text-info text-center">Add New User</h1>
//             <hr />
//             <Form autoComplete='off' onSubmit={handleOnSubmit}>
//                 <Form.Group as={Row}>
//                     <Form.Label column sm={3}>Name</Form.Label>
//                     <Col sm={9}>
//                         <Form.Control
//                             name="userName"
//                             value={frmDt.userName}
//                             // minLength="3"
//                             // maxLength="100"
//                             onChange={handleOnChange}
//                             placeholder='Enter name'
//                             required
//                         />
//                         <Form.Text className="text-danger">{frmDataError.userName && "name is required!"}</Form.Text>
//                     </Col>
//                 </Form.Group>

//                 <Form.Group as={Row}>
//                     <Form.Label column sm={3}>Email</Form.Label>
//                     <Col sm={9}>
//                         <Form.Control
//                             name="userEmail"
//                             value={frmDt.userEmail}
//                             // minLength="3"
//                             // maxLength="100"
//                             onChange={handleOnChange}
//                             placeholder='Enter email'
//                             required
//                         />
//                         <Form.Text className="text-danger">{frmDataError.userEmail && "email is required!"}</Form.Text>
//                     </Col>
//                 </Form.Group>
//                 <Form.Group as={Row}>
//                     <Form.Label column sm={3}>Password</Form.Label>
//                     <Col sm={9}>
//                         <Form.Control
//                             name="userPasswd"
//                             value={frmDt.userPasswd}
//                             // minLength="3"
//                             // maxLength="100"
//                             onChange={handleOnChange}
//                             placeholder='Enter password'
//                             required
//                         />
//                         <Form.Text className="text-danger">{frmDataError.userPasswd && "password is required!"}</Form.Text>
//                     </Col>
//                 </Form.Group>
//                 <Form.Group as={Row}>
//                     <Form.Label column sm={3}>Role</Form.Label>
//                     <Col sm={6}>
//                         <Form.Select aria-label="Default select example">
//                             {/* <option>Role</option> */}
//                             <option value="Admin">Admin</option>
//                             <option value="Client">Client</option>
//                         </Form.Select>

//                         <Form.Text className="text-danger">{frmDataError.userRole && "role is required!"}</Form.Text>
//                     </Col>
//                 </Form.Group>

//                 <Button type="submit" variant='info' class="btn btn-large btn-success w-100 d-block">Submit</Button>
//             </Form>

//         </div>
//     )
// }



// AddUserForm.propTypes = {
//     handleOnSubmit: PropTypes.func.isRequired,
//     handleOnChange: PropTypes.func.isRequired,
//     frmDt: PropTypes.object.isRequired,
//     frmDataError: PropTypes.object.isRequired,
// };