import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getAllUsers} from '../redux/actions/userActions';
import {Col, Row, Divider, DatePicker, Checkbox} from 'antd';
// import {Link} from 'react-router-dom';
import Spinner from '../components/Spinner';

function UserRoles () {
  const {users} = useSelector (state => state.usersReducer);
  console.log("line:200", users);

  const {loading} = useSelector (state => state.alertsReducer);

  const [totalUsers, setTotalUsers] = useState ([]);

  const dispatch = useDispatch ();

  useEffect (() => {
    dispatch (getAllUsers ());
  }, []);

  useEffect (
    () => {
      setTotalUsers (users);
    },
    [users]
  );

  return (
    <div>

      

      {/* {loading == true && <Spinner />} */}

      <Row style={{columnGap:"20px", marginTop:"20px"}} justify="center" gutter={16}>

        {totalUsers.map (user => {
          return (
            <Col style={{background:"aliceblue", padding:"10px"}}
            >
              <div >
                

                <div>

                  <div >
                    <h4>Username:</h4>
                    <p>{user.username}</p>
                    <h4>Password:</h4>
                    <p>{user.password}</p>
                    <h4>Role:</h4>
                    <p>{user.role}</p>
                    <h4>Id:</h4>
                    <p>{user._id}</p>
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

export default UserRoles;
