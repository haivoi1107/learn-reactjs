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

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const classes = useStyles();

  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required('Please enter your full name.')
      .test('should has at least two words', 'Please enter at least two words.', (value) => {
        console.log('value', value);
        return value.trim().split(' ').length >= 2;
      }),
    email: yup.string().required('Please enter your email.').email('Please enter a valid email address.'),
    password: yup.string().required('Please enter your pass word.').min(6, 'Please enter at least six words.'),
    retypePassword: yup
      .string()
      .required('Please enter your pass word field.')
      .oneOf([yup.ref('password')], 'Password does not match.'),
  });
  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = async (values) => {
    console.log('TODO FORM: ', values);
    const { onSubmit } = props;
    if (onSubmit) {
     await onSubmit(values);
    }
    form.reset();
  };

  const {isSubmitting} = form.formState;

  return (
    <div className={classes.root}>
      {isSubmitting && <LinearProgress className={classes.progess}/>}

      <Avatar className={classes.avatar}>
        <LockOutlined></LockOutlined>
      </Avatar>

      <Typography className={classes.title} component="h3" variant="h5">
        Create An Account
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="fullName" label="Full Name" form={form} />
        <InputField name="email" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />
        <PasswordField name="retypePassword" label="Retype Password" form={form} />

        <Button disabled={isSubmitting} type="submit" variant="contained" color="primary" fullWidth className={classes.submit}>
          {/* Tại sao chỗ này cần type submit?? */}
          Create an account
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
