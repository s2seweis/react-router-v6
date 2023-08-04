import React from 'react';
import {Row, Col, Input, Form} from 'antd';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {userLogin} from '../redux/actions/userActions';
import Spinner from '../components/Spinner';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init ();

function Login () {
  const dispatch = useDispatch ();
  const {loading} = useSelector (state => state.alertsReducer);
  function onFinish (values) {
    dispatch (userLogin (values));

    console.log ('line:3', values);
  }
  return (
    <div className="login" style={{margin: '100px', padding: '20px'}}>
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

          <hr style={{marginBottom:"20px"}} />
          <Link  to="/">Go to Overview without Authentication</Link>

        </Col>

      </Row>

    </div>
  );
}

export default Login;
