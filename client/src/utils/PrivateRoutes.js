import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = (user) => {
    // let auth = {'token':false};
    return(
        user.user ? <Outlet/> 
        : <Navigate to="/"/>
        // : <Outlet/> 
    );
};

export default PrivateRoutes;