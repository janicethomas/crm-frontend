import React from "react";
import { Breadcrumb } from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";
import { Link } from 'react-router-dom'

export const PageBreadcrumb = ({ page }) => {
    return (
        <Breadcrumb>
            {/* <LinkContainer to="/"> */}
            <Breadcrumb.Item>
            <Link to="/dashboard">
                        Home
                    </Link>
            </Breadcrumb.Item>
            {/* </LinkContainer> */}
            <Breadcrumb.Item active>{page}</Breadcrumb.Item>
        </Breadcrumb>
    );
};