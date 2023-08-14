import {Col, Row, Form, Input, Select, Space} from 'antd';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Spinner from '../Spinner';
import {resetPassword} from '../../redux/actions/userActions';

import {useParams} from 'react-router-dom';

function PasswordResetComponent({match}) {
  //   const { users } = useSelector(state => state.displayUsersReducer);
  //   console.log("line:300", users);
  //   ###

  // const {id} = useParams();
  // console.log("line:321", id);

  let {token, id} = useParams ();
  // let {id} = useParams ();
  console.log ('line:1', token);
  console.log ('line:2', id);

  const initialValues = {"token":token, "userId":id}

  // const {settings1} = useSelector (state => state.settingsReducer);
  // console.log ('line:301', settings1);

  //   ###
  const dispatch = useDispatch ();

  const {loading} = useSelector (state => state.alertsReducer);

  //   const [setting, setsetting] = useState();
  //   console.log('line:324', setting);

  //   const [totalsettings, settotalsettings] = useState([]);

  //   //   const {users} = useSelector (state => state.usersReducer);
  //   //   console.log ('line:106', users);

  //   useEffect(
  //     () => {
  //       if (settings1.length == 0) {
  //         dispatch(getAllSettings());
  //       } else {
  //         settotalsettings(settings1);
  //         setsetting(settings1.find(o => o._id == userid));
  //         console.log('line:5000', setting);
  //       }
  //     },
  //     [settings1]
  //   );

  function onFinish (values) {
    // values._id = setting._id;

    console.log("line:2", values);
    dispatch (resetPassword (values));
  }

  // ###
  const handleChange = value => {
    // console.log(`selected ${value}`);
  };
  // ###

  return (
    <div
    // settings={settings}
    >
      <div style={{margin: '15px 0px 0px 15px', display: 'flex'}}>
        <a href="/">Go Back</a>
      </div>

      {loading && <Spinner />}
      <Row justify="center mt-5" style={{marginTop: '25px', justifyContent:"center"}} >
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
            {/* <Form.Item
              name="cpassword"
              label="Confirm Password"
              rules={[{required: true}]}
            >
              <Input />
            </Form.Item> */}

            

           

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
