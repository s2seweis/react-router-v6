import React from 'react';
import {Col, Row, Form, Input} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import Spinner from '../Spinner';
import {resetPassword} from '../../redux/actions/userActions';
import {useParams} from 'react-router-dom';

function PasswordResetComponent() {
  let {token, id} = useParams ();
  const initialValues = {'token':token, 'userId':id};
  const dispatch = useDispatch ();
  const {loading} = useSelector (state => state.alertsReducer);

  function onFinish (values) {
    dispatch (resetPassword (values));
  }
  return (
    <div
    >
      <div style={{margin: '15px 0px 0px 15px', display: 'flex'}}>
        <a href="/">Go Back</a>
      </div>
      {loading && <Spinner />}
      <Row justify="center mt-5" style={{marginTop: '25px', justifyContent:'center'}} >
        <Col
          style={{background: 'aliceblue', borderRadius: '10px'}}
          lg={12}
          sm={20}
          xs={22}
          className="p-2"
        >
            <Form
              initialValues={initialValues}
              className="bs1 p-2"
              layout="vertical"
              onFinish={onFinish}
              style={{
                marginTop: '50px',
                background: 'aliceblue',
                padding: '15px',
                borderRadius: '15px',
              }}
            >
              <h3>Reset Password</h3>
              <hr />
               <Form.Item
              name="token"
              label="Token"
              rules={[{required: true}]}
            >
              <Input />
            </Form.Item>
               <Form.Item
              name="userId"
              label="User ID"
              rules={[{required: true}]}
            >
              <Input />
            </Form.Item>
               <Form.Item
              name="password"
              label="New Password"
              rules={[{required: true}]}
            >
              <Input />
            </Form.Item>
              <div className="text-right">
                <button className="btn1">Submit</button>
              </div>
            </Form>
        </Col>
      </Row>
    </div>
  );
}

export default PasswordResetComponent;
