import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, LinearProgress, makeStyles, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../../../../components/form-controls/InputField';
import PasswordField from '../../../../components/form-controls/PasswordField';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    paddingTop: theme.spacing(4),
  },

  avatar: {
    margin: '0 auto',
    backgroundColor: theme.palette.secondary.main,
  },

  title: {
    margin: theme.spacing(2, 0, 3, 0),
    textAlign: 'center',
  },

  submit: {
    margin: theme.spacing(3, 0, 2, 0),
  },
  progess: {
    position: 'absolute',
    top: theme.spacing(1),
    left: 0,
    right: 0,
    color: 'red',
  }
}));

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

function LoginForm(props) {
  const classes = useStyles();

  const schema = yup.object().shape({  
    identifier: yup.string().required('Please enter your email.').email('Please enter a valid email address.'),
    password: yup.string().required('Please enter your pass word.'),   
  });
  const form = useForm({
    defaultValues: {
      identifier: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = async (values) => {
    console.log('TODO FORM: ', values);
    const { onSubmit } = props;
    if (onSubmit) {
     await onSubmit(values);
    }
  };

  const {isSubmitting} = form.formState;

  return (
    <div className={classes.root}>
      {isSubmitting && <LinearProgress className={classes.progess}/>}

      <Avatar className={classes.avatar}>
        <LockOutlined></LockOutlined>
      </Avatar>

      <Typography className={classes.title} component="h3" variant="h5">
      Sign in
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="identifier" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />

        <Button disabled={isSubmitting} type="submit" variant="contained" color="primary" fullWidth className={classes.submit} size="large">
          {/* Tại sao chỗ này cần type submit?? */}
          Sign in
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
