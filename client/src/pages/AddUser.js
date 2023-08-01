import { Col, Row, Form, Input } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../components/Spinner'
import { addUser } from '../redux/actions/displayUserActions'

// needs the  user.user state otherwise it will be redirected to landing page

function AddUser() {

    const dispatch = useDispatch()
    const { loading } = useSelector(state => state.alertsReducer)

    function onFinish(values) {
        
        console.log("line:60", values);

        dispatch(addUser(values))
         console.log(values)


    }

    return (
        <div>
            <div style={{ margin: "15px 0px 0px 15px", display: "flex" }}>
                <a href="javascript:history.back()">Go Back</a>
            </div>
            {loading && (<Spinner />)}
            <Row justify='center mt-5'>
                <Col lg={12} sm={18} xs={22} className='p-2'>
                    <Form className='bs1 p-2' layout='vertical' onFinish={onFinish}>
                        <h3>Add New User</h3>
                        <hr />
                        <Form.Item name='username' label='User name' rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name='password' label='Password' rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name='role' label='Role' rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                       

                        <div className='text-right'>
                            <button className='btn1'>ADD USER</button>
                        </div>

                    </Form>
                </Col>
            </Row>

        </div>
    )
}

export default AddUser