// import './AppRouter.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Admin from './pages/Admin';
import UserRoles from './pages/UserRoles';
import Settings from './pages/Settings';
import Start from './pages/Start';
import Products from './pages/Products';
import Login from './pages/Login';
import Overview from './pages/Overview/Overview';
import Register from './pages/Register';
import PrivateRoutes from './utils/PrivateRoutes';
import PublicRoutes from './utils/PublicRoutes';
import EditUser from './pages/EditUser';
import Animation from './pages/Animation';
import AddUser from './pages/AddUser';
import EditSetting from './pages/EditSetting';
import ForgotPassword from './pages/ForgotPassword';
import PasswordReset from './pages/PasswordReset';
import ResetLink from './pages/ResetLink';
import 'antd/dist/antd.min.css';

function AppRouter() {
    const { users } = useSelector(state => state.currentUserReducer);
    // const userRole = users.role || "guest";
    const user = users.userauth || false;
    const admin = users.adminauth || false;
    const [publicUser, setPublicUser] = useState(user);
    const [privateUser, setPrivateUser] = useState(admin);

    const handleLoginPublic = e => {
        e.preventDefault();
        setPublicUser(true);
    };

    const handleLogoutPublic = e => {
        e.preventDefault();
        setPublicUser(false);
    };

    const handleLoginPrivate = e => {
        e.preventDefault();
        setPrivateUser(true);
    };

    const handleLogoutPrivate = e => {
        e.preventDefault();
        setPrivateUser(false);
    };

    return (
        <div style={{display:"flex", justifyContent:"center"}} className="AppRouter">
            <Router>
                <Routes>
                    <Route element={<PublicRoutes user={publicUser} />}>
                        <Route element={<Start />} user={publicUser} path="/start" />
                        <Route element={<Products />} user={publicUser} path="/products" />
                    </Route>
                    <Route element={<PrivateRoutes user={privateUser} />}>
                        <Route element={<Admin />} path="/admin" exact />
                        <Route element={<Settings />} path="/settings" />
                        <Route element={<UserRoles />} path="/settings/roles" />
                        <Route element={<EditUser />} path="/edituser/:userid" />
                        <Route element={<EditSetting />} path="/editsetting/:userid" />
                        <Route element={<AddUser />} path="/adduser" />
                    </Route>
                    <Route
                        element={
                            <Overview
                                publicUser={publicUser.toString()}
                                privateUser={privateUser.toString()}
                                handleLoginPublic={handleLoginPublic}
                                handleLogoutPublic={handleLogoutPublic}
                                handleLoginPrivate={handleLoginPrivate}
                                handleLogoutPrivate={handleLogoutPrivate}
                            />
                        }
                        exact
                        path="/"
                    />
                    <Route element={<Login />} exact path="/login" />
                    <Route element={<Register />} exact path="/Register" />
                    <Route element={<Animation />} path="/animation" />
                    <Route element={<ForgotPassword />} path="/forgotpassword" />
                    <Route element={<PasswordReset />} path="/passwordreset/:token/:id" />
                    <Route element={<ResetLink />} path="/resetlink" />
                </Routes>
            </Router>
        </div>
    );
}

export default AppRouter;
