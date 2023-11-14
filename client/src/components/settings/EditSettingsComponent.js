import React, { useEffect, useState } from 'react';
import { Col, Row, Form, Input, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../Spinner';
import { editSetting, getAllSettings } from '../../redux/actions/settingActions';
import { useParams } from 'react-router-dom';

function EditSettingsComponent() {
  let { userid } = useParams();

  const { settings1 } = useSelector(state => state.settingsReducer);
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.alertsReducer);
  const [setting, setsetting] = useState();
  const [totalsettings, settotalsettings] = useState([]);

  useEffect(
    () => {
      if (settings1.length == 0) {
        dispatch(getAllSettings());
      } else {
        settotalsettings(settings1);
        setsetting(settings1.find(o => o._id == userid));
      }
    },
    [settings1],
  );

  function onFinish(values) {
    values._id = setting._id;
    dispatch(editSetting(values));
  }

  const handleChange = () => {};

  return (
    <div>
      <div style={{ margin: '15px 0px 0px 15px', display: 'flex' }}>
        <a href="javascript:history.back()">Go Back</a>
      </div>
      {loading && <Spinner />}
      <Row justify="center mt-5" style={{ marginTop: '25px' }}>
        <Col style={{ background: 'aliceblue', borderRadius: '10px' }} lg={12} sm={20} xs={22} className="p-2">
          {totalsettings.length > 0 && (
            <Form
              initialValues={setting}
              className="bs1 p-2"
              layout="vertical"
              onFinish={onFinish}
              style={{ marginTop: '50px', background: 'aliceblue', padding: '15px', borderRadius: '15px' }}
            >
              <h3>Edit Setting</h3>
              <hr />
              <Form.Item name="username" label="User name" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item name="password" label="Password" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item name="role" label="Role" rules={[{ required: true }]}>
                <Select
                  defaultValue=""
                  onChange={handleChange}
                  options={[
                    { value: 'user', label: 'User' },
                    { value: 'admin', label: 'Admin' },
                  ]}
                />
              </Form.Item>
              <div className="text-right">
                <button className="btn1">Edit USER</button>
              </div>
            </Form>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default EditSettingsComponent;
