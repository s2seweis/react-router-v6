import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllSettings } from '../../redux/actions/settingActions';
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import { EditOutlined } from '@ant-design/icons';
// import Spinner from '../Spinner';

function SettingsComponent() {
  // const settings2 =
  //   [
  //     {

  //       "_id": "64cb57360224bb7ea049b175",
  //       "__0": 0,
  //       "adminauth": true,
  //       "password": "law123",
  //       "role": "admin",
  //       "username": "admin444"
  //     }
  //   ]

  const { settings1 } = useSelector(state => state.settingsReducer);
  // const { loading } = useSelector(state => state.alertsReducer);
  const [totalSettings, setTotalSettings] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSettings());
  }, []);

  useEffect(
    () => {
      setTotalSettings(settings1);
    },
    [settings1],
  );

  return (
    <div>
      <div style={{ margin: '15px 0px 0px 15px', display: 'flex' }}>
        <div style={{ margin: '15px 0px 0px 15px', display: 'flex' }}>
          <a href="javascript:history.back()">Go Back</a>
        </div>
      </div>
      <h3 style={{ textAlign: 'center' }}>Settings</h3>
      <Row style={{ columnGap: '20px', marginTop: '20px' }} justify="center" gutter={16}>
        {totalSettings?.map(setting => {
          return (
            <Col key={totalSettings._id} style={{ background: 'aliceblue', padding: '10px', marginBottom: '20px', borderRadius: '20px', width: '80%' }}
            >
              <div >
                <div>
                  <div >
                    <h4>name:</h4>
                    <p>{setting.username}</p>
                    <h4>Password:</h4>
                    <p>{setting.password}</p>
                    <h4>Role:</h4>
                    <p>{setting.role}</p>
                    <h4>Id:</h4>
                    <p>{setting._id}</p>
                  </div>
                  <div className="mr-4" style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Link to={`/editsetting/${setting._id}`}>
                      <EditOutlined
                        className="mr-3"
                        style={{ color: 'green', cursor: 'progress' }}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default SettingsComponent;
