import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../userSlice';
import RegisterForm from '../RegisterForm';

Register.propTypes = {
  closeDialog: PropTypes.func,
};

function Register(props) {
  const {enqueueSnackbar} = useSnackbar();
  const dispatch =  useDispatch();

  const handleSubmit = async (values) => {
    try {
      // auto set username = email
      values.username = values.email;

      const action = register(values);
    console.log('Form Submit:', values);
    const resultAction = await dispatch(action);
    const user = unwrapResult(resultAction);

    // close dialog
    const {closeDialog} = props;
    if (closeDialog) {
      closeDialog();
    }
    
    console.log('New user', user);
    enqueueSnackbar('Register successfully', {variant: 'success'});

    } catch (error) {
     alert('sai r');

    }
  };
  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
