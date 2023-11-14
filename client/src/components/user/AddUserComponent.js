import React from 'react';
import { Col, Row, Form, Input, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../Spinner';
import { addUser } from '../../redux/actions/displayUserActions';

function AddUserComponent() {

    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.alertsReducer);

    function onFinish(values) {
        dispatch(addUser(values));
    }

    const handleChange = () => {
    };

    return (
        <div>
            <div style={{ margin: '15px 0px 0px 15px', display: 'flex' }}>
                <a href="javascript:history.back()">Go Back</a>
            </div>
            {loading && (<Spinner />)}
            <Row justify='center mt-5'>
                <Col lg={12} sm={18} xs={22} className='p-2'>
                    <Form style={{ background: 'aliceblue', padding: '15px', borderRadius: '15px', marginTop: '50px' }} className='bs1 p-2' layout='vertical' onFinish={onFinish}>
                        <h3>Add New User</h3>
                        <hr />
                        <Form.Item name='username' label='User name' rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name='email' label='User email' rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name='password' label='Password' rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>

                        <Form.Item name='role' label='Role'
                        >
                            <Select
                                defaultValue=""
                                onChange={handleChange}
                                options={[
                                    { value: 'user', label: 'User' },
                                    { value: 'admin', label: 'Admin' },

                                ]}
                            />
                        </Form.Item>

                        <Form.Item name='adminauth' label='AdminAuth'
                        >
                            <Select
                                defaultValue=""
                                onChange={handleChange}
                                options={[
                                    { value: true, label: 'True' },
                                    { value: false, label: 'False' },

                                ]}
                            />
                        </Form.Item>
                        <Form.Item name='userauth' label='UserAuth'
                        >
                            <Select
                                defaultValue=""
                                onChange={handleChange}
                                options={[
                                    { value: true, label: 'True' },
                                    { value: false, label: 'False' },

                                ]}
                            />
                        </Form.Item>
                        <div className='text-right'>
                            <button className='btn1'>ADD USER</button>
                        </div>
                    </Form>
                </Col>
            </Row>

        </div>
    );
}

export default AddUserComponent;
