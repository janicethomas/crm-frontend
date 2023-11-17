import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { SearchForm } from '../../components/search-form/SearchForm.comp';
import { UserTable } from '../../components/user-table/UserTable.comp';
import users from '../../assets/data/dummy-users.json'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp';
import { Link } from 'react-router-dom';

export const UserLists = () => {

    const [str, setStr] = useState('');

    // const [dispUser, setDispUser] = useState([users]);


    useEffect(() => { }, [str]);
    // useEffect(() => { }, [str, dispUser]);


    const handleOnChange = e => {
        const { value } = e.target;
        console.log(value);
        setStr(value);
        searchUser(value);
    };

    const searchUser = (sttr) => {
        const displayUsers = users.filter((row) =>
            row.subject.toLowerCase().includes(sttr.toLowerCase())
        );

        // setDispUser(displayUsers);
    };

    return (
        <Container>
            <Row>
                <Col>
                    <PageBreadcrumb page="User List" />
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col>
                    <Link to="/add-user">
                        <Button variant='info'>Add new User</Button>
                    </Link>
                </Col>
                <Col className='text-right'>
                    <SearchForm handleOnChange={handleOnChange} str={str} />
                </Col>
            </Row>
            <hr />
            <Row>
                <Col>
                    <UserTable />
                </Col>
            </Row>
        </Container>
    );
};
