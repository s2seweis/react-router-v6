import { Col, Row, Form, Input, Select, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../components/Spinner';
import { editUser, getAllUsers } from '../redux/actions/displayUserActions';

import { useParams } from 'react-router-dom';

// ###
import EditUserComponent from '../components/user/EditUserComponent';
// ###

function EditUser({ match }) {
  

  return (
    <div>

      <EditUserComponent/>
   
    </div>
  );
}

export default EditUser;
