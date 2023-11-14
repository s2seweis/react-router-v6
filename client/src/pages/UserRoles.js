import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllUsers, deleteUser } from '../redux/actions/displayUserActions';
// Revisit it again Popconfirm
import { Col, Row, Popconfirm } from 'antd';
import { Link } from 'react-router-dom';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
// import Spinner from '../components/Spinner';

function UserRoles() {
  const { users1 } = useSelector(state => state.displayUsersReducer);
  // const { loading } = useSelector(state => state.alertsReducer);
  const [totalUsers, setTotalUsers] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  useEffect(
    () => {
      setTotalUsers(users1);
    },
    [users1],
  );

  return (
    <div>
      <div style={{ margin: '15px 0px 0px 15px', display: 'flex' }}>
        <div style={{ margin: '15px 0px 0px 15px', display: 'flex' }}>
          <a href='javascript:history.back()'>Go Back</a>
        </div>
      </div>
      <button className='btn1'>
        <Link to='/adduser'>ADD USER</Link>
      </button>
      {/* {loading == true && <Spinner />} */}
      <Row style={{ columnGap: '20px', marginTop: '20px', margin: '20px' }} justify='center' gutter={16}>
        {totalUsers?.map(user => {
          return (
            <Col key={totalUsers._id} style={{ background: 'aliceblue', padding: '10px', marginBottom: '20px', borderRadius: '20px' }}
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
                  <div className='mr-4' style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Link to={`/edituser/${user._id}`}>
                      <EditOutlined
                        className='mr-3'
                        style={{ color: 'green', cursor: 'progress' }}
                      />
                    </Link>
                    <Popconfirm
                      title='Are you sure to delete this car?'
                      onConfirm={() => { dispatch(deleteUser({ userid: user._id })); }}
                      okText='Yes'
                      cancelText='No'
                    >
                      <DeleteOutlined
                        style={{ color: 'red', cursor: 'progress' }}
                      />
                    </Popconfirm>
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
