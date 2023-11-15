import React from 'react';
import { Navigate } from 'react-router-dom';
import { DefaultLayout } from '../../layout/DefaultLayout';

const isAuth = true;

export const PrivateRoute = ({Component, ...rest}) => {
    return (
        isAuth ?
            (<DefaultLayout>
                <Component {...rest} />
            </DefaultLayout>)
             :
            <Navigate to="/"/>
    );
};
