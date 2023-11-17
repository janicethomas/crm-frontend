import React from 'react'
// import { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from "react-bootstrap"
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp"
import AddTicketForm from '../../components/add-ticket-form/AddTicketForm.comp'
import { shortText } from '../../utils/validation'
import { Link } from 'react-router-dom'

export const AddTicket = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <PageBreadcrumb page="New Ticket" />
                </Col>
            </Row>

            <Row className='bg-form'>
                <Col>
                    <AddTicketForm/>
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

// const initialFrmDt = {
//     subject: "",
//     issueDate: "",
//     detail: "",

// };

// const initialFrmError = {
//     subject: false,
//     issueDate: false,
//     detail: false,
// };

// export const AddTicket = () => {
//     const [frmData, setFrmData] = useState(initialFrmDt);
//     const [frmDataError, setFrmDataError] = useState(initialFrmError);
//     useEffect(() => { }, [frmData, frmDataError]);

//     const handleOnChange = e => {
//         const { name, value } = e.target;
//         setFrmData({
//             initialFrmDt,
//             [name]: value
//         })
//     };

//     const handleOnSubmit = async e => {
//         e.preventDefault()

//         setFrmDataError(initialFrmError)
//         const isSubjectValid = await shortText(frmData.subject)

//         setFrmDataError({
//             initialFrmError,
//             subject: !isSubjectValid,
//         });
//         console.log('Form submit request received')
//     };

//     return (
//         <Container>
//             <Row>
//                 <Col>
//                     <PageBreadcrumb page="New Ticket" />
//                 </Col>
//             </Row>

//             <Row>
//                 <Col>
//                     <AddTicketForm handleOnChange={handleOnChange}
//                         handleOnSubmit={handleOnSubmit} frmDt={frmData}
//                         frmDataError={frmDataError}
//                     />
//                 </Col>
//             </Row>
//             <Row>
//                 <Col xs lg="2">
//                 <Link to="/tickets">
//                         <Button variant='info'>Back</Button>
//                     </Link>
//                 </Col>
//             </Row>
//         </Container>
//     )
// }
