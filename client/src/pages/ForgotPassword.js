import React, {useEffect, useState} from 'react';
import {Row, Col, Input, Form} from 'antd';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {requestResetPassword} from '../redux/actions/userActions';
import Spinner from '../components/Spinner';

// ###

import {getCurrentUser} from '../redux/actions/currentUserAction';

// ###

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init ();

function ForgotPassword () {
  const dispatch = useDispatch ();
  const {loading} = useSelector (state => state.alertsReducer);

  function onFinish (values) {
    dispatch (requestResetPassword (values));

    // console.log ('line:300', values);
  }
  function onSubmit () {
    dispatch (getCurrentUser ());
  }

  // function onclick () {
  //   dispatch(getCurrentUser)
  // }

  return (
    <div className="login" style={{margin: '100px', padding: '20px'}}>

      <div style={{margin: '15px 0px 0px 15px', display: 'flex'}}>
        <button className="btn1">
          <Link to="/">Go Back</Link>
        </button>
      </div>

      {loading && <Spinner />}
      <Row gutter={16} className="d-flex aligin-items-center">

        <Col lg={8} />

        <Col
          // style={{marginTop: '100px'}}
          lg={8}
          className="text-left p-5"
        >
          <Form
            layout="vertical"
            className="login-form p-5"
            onFinish={onFinish}
          >
            <h1>Reset Password</h1>
            <h3>Enter your Email for request an resest link</h3>
            <hr />

            <Form.Item name="email" label="Email" rules={[{required: true}]}>
              <Input />
            </Form.Item>

            <button style={{marginBottom: '15px'}} className="btn1 mt-2 mb-3">
              Submit
            </button>

            <br />

          </Form>

        </Col>

      </Row>

    </div>
  );
}

export default ForgotPassword;
