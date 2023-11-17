// import React, { useEffect, useState } from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';
// import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp';
// import users from '../../assets/data/dummy-users.json';
// import { MessageHistory } from '../../components/message-history/MessageHistory.comp';
// import { UpdateUser } from '../../components/update-user/UpdateUser.comp';
// import { useParams } from 'react-router-dom';

// // const user = users[0];

// export const User = () => {
//     const {uId} = useParams()

//     const [message, setMessage] = useState('');
//     const [user, setUser] = useState("");

//     useEffect(() => {
//         for (let i = 0; i < users.length; i++) {
//             if (users[i].id === uId) {
//                 setUser(users[i])
//                 continue;
//             }
//         }
//      }, [message, uId]);

//     const handleOnChange = e => {
//         setMessage(e.target.value);
//     };

//     const handleOnSubmit = () => {
//         alert('Form submitted!');
//     };

//     return (
//         <Container>
//             <Row>
//                 <Col>
//                     <PageBreadcrumb page="User" />
//                 </Col>
//             </Row>
//             <Row>
//                 <Col className='font-weight-bolder text-secondary'>v
//                     <div className='user-name'>Name: {user.userName}</div>
//                     <div className='user-email'>Email: {user.userEmail}</div>
//                     <div className='user-passwd'>Password: {user.userPasswd}</div>
//                     <div className='user-role'>Role: {user.userRole}</div>
//                 </Col>
//                 <Col className='text-right'>
//                     <Button variant='outline-info'>Close User</Button>
//                 </Col>
//             </Row>
//             <Row className='mt-4'>
//                 <Col>
//                     {user.history && <MessageHistory msg={user.history} />}
//                 </Col>
//             </Row>
//             <hr />
//             <Row>
//                 <Col>
//                     <UpdateUser msg={message}
//                         handleOnChange={handleOnChange} 
//                         handleOnSubmit={handleOnSubmit} 
//                         />
//                 </Col>
//             </Row>
//         </Container>
//     );
// };
