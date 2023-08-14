import React, {useEffect, useState} from 'react';
import {Row, Col, Input, Form} from 'antd';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {userLogin} from '../redux/actions/userActions';
import Spinner from '../components/Spinner';

// ###

import {getCurrentUser} from '../redux/actions/currentUserAction';

// ###

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init ();

function Login () {
  const dispatch = useDispatch ();
  const {loading} = useSelector (state => state.alertsReducer);

  function onFinish (values) {
    dispatch (userLogin (values));

    // console.log ('line:300', values);
  }
  function onSubmit () {
    dispatch (getCurrentUser());
  }

  // function onclick () {
  //   dispatch(getCurrentUser)
  // }

 

  return (
    <div className="login" style={{margin: '200px auto', padding: '20px', justifyContent:"center"}}>
      {loading && <Spinner />}
      
      <Row style={{justifyContent:"center", background:"aliceblue", padding:"50px"}} gutter={16} className="d-flex aligin-items-center">

        {/* <Col lg={8} /> */}

        <Col
          // style={{marginTop: '100px'}}
          lg={6} md={10} sm={10} style={{width:""}}
          className="text-left p-5"
        >
          <Form
            layout="vertical"
            className="login-form p-5"
            onFinish={onFinish}
            style={{width:"auto", background:"aliceblue"}}
          >
            <h1>Login</h1>
            <hr />

            <Form.Item
              name="username"
              label="Username"
              rules={[{required: true}]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[{required: true}]}
            >
              <Input />
            </Form.Item>

            <button style={{marginBottom: '15px'}} className="btn1 mt-2 mb-3">
              Login
            </button>

            <br />

            <div style={{marginBottom: '15px'}}>
              <Link to="/register">Click here to Register</Link>
            </div>
            {/* <br style={{marginBottom:"20px"}} /> */}

          </Form>

          {/* ### */}
          {/* ### Instead of the button the use effect hook should handle to get the current user after the userlogin action was fired */}
          {/* <button onClick={onSubmit}>
            Try to get CurrentUser
          </button> */}
          {/* ### */}

          <hr style={{marginBottom: '20px'}} />
          
          <div style={{marginBottom:"20px"}}><Link to="/forgotpassword">You forgot your Password?</Link></div>
          <div> <Link to="/">Go to Overview without Authentication</Link></div>
          
         

        </Col>

      </Row>

    </div>
  );
}

export default Login;
