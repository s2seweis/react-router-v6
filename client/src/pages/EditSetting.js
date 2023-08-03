import { Col, Row, Form, Input, Select, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../components/Spinner';
import { editUser, getAllUsers } from '../redux/actions/displayUserActions';

import { useParams } from 'react-router-dom';


import EditSettingsComponent from '../components/settings/EditSettingsComponent';

function EditSetting({ match }) {
  

  return (
    <div>

      <EditSettingsComponent/>
   
    </div>
  );
}

export default EditSetting;
