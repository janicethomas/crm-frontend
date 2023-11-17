import React from "react";
import { Breadcrumb } from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";
import { Link } from 'react-router-dom';
import "./breadcrumb.css";

export const PageBreadcrumb = ({ page }) => {
    return (
        <Breadcrumb>
            {/* <LinkContainer to="/"> */}
            <Breadcrumb.Item>
            <Link to="/dashboard">
                        <span className="bread">Home/</span>
                    </Link>
            </Breadcrumb.Item>
            {/* </LinkContainer> */}
            <Breadcrumb.Item active><span className="bread1">{page}</span></Breadcrumb.Item>
        </Breadcrumb>
    );
};
