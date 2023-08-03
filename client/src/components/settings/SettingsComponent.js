import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllSettings } from '../../redux/actions/settingActions';
import { Col, Row, Divider, DatePicker, Checkbox } from 'antd';

// ###
import { Link } from 'react-router-dom';
import { Popconfirm, message } from "antd";
import { EditOutlined } from "@ant-design/icons";

// ###
import Spinner from '../Spinner';

function SettingsComponent() {


  // ###

  // JSON Initial State
  const settings2 =
    [
      {

        "_id": "64cb57360224bb7ea049b175",
        "__0": 0,
        "adminauth": true,
        "password": "law123",
        "role": "admin",
        "username": "admin444"
      }
    ]

    console.log("line:201", settings2);

    



  // ###







  const { settings1 } = useSelector(state => state.settingsReducer);
  console.log("line:200", settings1);

  const settingsInitial = 
  // settings1 
  // || 
  settings2
  console.log("line:202",  settingsInitial);

  const { loading } = useSelector(state => state.alertsReducer);

  const [totalSettings, setTotalSettings] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSettings());
  }, []);

  useEffect(
    () => {
      setTotalSettings(settings1);
    },
    [settings1]
  );

  return (
    <div>

      <div style={{ margin: "15px 0px 0px 15px", display: "flex" }}>
        <a href="javascript:history.back()">Go Back</a>
      </div>

      <h3 style={{ textAlign: "center" }}>Settings</h3>


      {/* <button className="btn1">
        <Link to="/adduser">ADD USER23</Link>
      </button> */}



      {/* {loading == true && <Spinner />} */}

      <Row style={{ columnGap: "20px", marginTop: "20px" }} justify="center" gutter={16}>

        {totalSettings?.map(setting => {
          return (
            <Col style={{ background: "aliceblue", padding: "10px", marginBottom: "20px", borderRadius: "20px", width: "80%" }}
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

                  {/* ### */}
                  <div className="mr-4" style={{ display: "flex", justifyContent: "space-around" }}>
                    <Link to={`/editsetting/${setting._id}`}>
                      <EditOutlined
                        className="mr-3"
                        style={{ color: "green", cursor: "progress" }}
                      />
                    </Link>


                  </div>
                  {/* ### */}



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
