import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PublicRoutes = (user) => {  
    // let auth = {'token':true};
    return(
        user.user ? <Outlet/> 
        : <Navigate to="/"/>
    );
};

export default PublicRoutes;