import { Outlet, Navigate } from 'react-router-dom'

const PublicRoutes = (user) => {
    // console.log("line:10", user);
    // console.log("line:11", user.user);
    // let : declare a variable that is block scoped in JavaScript
    let auth = {'token':true}
    // console.log( "line:12", auth);
    // console.log( "line:13", auth.token);
    return(
        user.user ? <Outlet/> 
        : <Navigate to="/"/>
        // : <Outlet/> 
    )
}

export default PublicRoutes