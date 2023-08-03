import { Col, Row, Form, Input, Select, Space } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../components/Spinner'
import { addUser } from '../redux/actions/displayUserActions'

// ###
import AddUserComponent from '../components/user/AddUserComponent'
// ###


function AddUser() {

   

    return (
        <div>


            <AddUserComponent/>
           

        </div>
    )
}

export default AddUser