import React, {Fragment,useState,useEffect} from 'react';
import "./UpdateProfile.css";
import Loader from "../layout/Loader/Loader";
import { Link,useNavigate } from 'react-router-dom';
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import FaceIcon from "@material-ui/icons/FaceOutlined"

import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, updateProfile} from '../../actions/userAction';
import { useAlert } from "react-alert";

const UpdatedProfile = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const alert = useAlert();
    const { error,loading,isAuthenticated } = useSelector(state => state.user);


  return (
    <div>UpdatedProfile</div>
  )
}

export default UpdatedProfile