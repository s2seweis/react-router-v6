import { Col, Row, Form, Input, Select, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../Spinner';
import { editUser, getAllUsers } from '../../redux/actions/displayUserActions';

import { useParams } from 'react-router-dom';

function EditUserComponent({ match }) {
  //   const { users } = useSelector(state => state.displayUsersReducer);
  //   console.log("line:300", users);
  //   ###

  // const {id} = useParams();
  // console.log("line:321", id);

  let { userid } = useParams();
  console.log('line:300', userid);

  const { users1 } = useSelector(state => state.displayUsersReducer);
  console.log('line:301', users1);

  //   ###
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.alertsReducer);
  const [user, setuser] = useState();
  console.log('line:302', user);
  const [totalusers, settotalusers] = useState([]);

  //   const {users} = useSelector (state => state.usersReducer);
  //   console.log ('line:106', users);

  useEffect(
    () => {
      if (users1.length == 0) {
        dispatch(getAllUsers());
      } else {
        settotalusers(users1);
        setuser(users1.find(o => o._id == userid));
        console.log('line:303', user);
      }
    },
    [users1]
  );

  function onFinish(values) {
    values._id = user._id;

    dispatch(editUser(values));
    console.log("line:304", values);
  }

  // ###
  const handleChange = (value) => {
    console.log("line:305", value);
  };
  // const handleChange2 = (value) => {
  //   console.log("line:306", value);
  // };
  // ###

  // console.log("line:305", user.adminauth);

  return (
    <div
    // users={users}
    >
      <div style={{ margin: "15px 0px 0px 15px", display: "flex" }}>
        <a href="javascript:history.back()">Go Back</a>
      </div>

      {loading && <Spinner />}
      <Row justify="center mt-5" style={{ marginTop: "25px" }}>
        <Col style={{ background: "aliceblue", borderRadius: "10px" }} lg={12} sm={20} xs={22} className="p-2">
          {totalusers.length > 0 &&
            <Form
              initialValues={user}
              className="bs1 p-2"
              layout="vertical"
              onFinish={onFinish}
              style={{ marginTop: "50px", background: "aliceblue", padding: "15px", borderRadius: "15px" }}
            >
              <h3>Edit User1</h3>

              <hr />
              <Form.Item
                name="username"
                label="User name"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>

              {/* <Form.Item
                name="image"
                label="Image url"
                rules={[{required: true}]}
              >

                <Input />
              </Form.Item> */}
              <Form.Item
                name="password"
                label="Password"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>

          

               {/* <Form.Item
                name="role"
                label="Role"
                // rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>' */}



              {/* ### Role is currently a problem */}

              <Form.Item name='role' label='Role' 
              // rules={[{ required: true }]}
              >
                <Select
                  defaultValue=""
                  // style={{ width: 120 }}
                  onChange={handleChange}
                  options={[
                    { value: 'user', label: 'User' },
                    { value: 'admin', label: 'Admin' }

                  ]}
                />
              </Form.Item>


              <Form.Item name='adminauth' label='AdminAuth' rules={[{ required: true }]}>
                <Select
                  defaultValue=""
                  // style={{ width: 120 }}
                  onChange={handleChange}
                  options={[
                    { value: true, label: 'True' },
                    { value: false, label: 'False' },

                  ]}
                />
              </Form.Item>

              <Form.Item name='userauth' label='PubicAuth' rules={[{ required: true }]}>
                <Select
                  defaultValue=""
                  // style={{ width: 120 }}
                  onChange={handleChange}
                  options={[
                    { value: true, label: 'True' },
                    { value: false, label: 'False' },

                  ]}
                />
              </Form.Item>

              <div className="text-right">
                <button className="btn1">Edit USER1</button>
              </div>
            </Form>}
        </Col>
      </Row>
    </div>
  );
}

export default EditUserComponent;
