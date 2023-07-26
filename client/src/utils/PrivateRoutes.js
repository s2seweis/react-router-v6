import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = (user) => {
    // let : declare a variable that is block scoped in JavaScript
    let auth = {'token':false}
    console.log( "line:11", user);
    console.log( "line:12", user.user);
    console.log( "line:1", auth);
    console.log( "line:2", auth.token);
    return(
        user.user ? <Outlet/> 
        : <Navigate to="/"/>
        // : <Outlet/> 
    )
}

export default PrivateRoutes