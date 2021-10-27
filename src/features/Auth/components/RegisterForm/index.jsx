import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/form-controls/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Avatar, Button, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import PasswordFiled from '../../../../components/form-controls/PasswordFiled';

const useStyle = makeStyles((theme) => ({
  root: {
    paddingTop: 20,
  },
  avatar: {
    margin: '0 auto',
    backgroundColor: 'red',
  },
  title: {
    margin: '20px 0 30px 0',
    textAlign: 'center',
  },
  submit: {
    margin: '30px 0 20px 0',
  },
}));

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const classes = useStyle();
  const schema = yup.object().shape({
    fullname: yup
      .string()
      .required('Please enter your full name')
      .test('should has at least two words', 'Please enter at least two words', (value) => {
        console.log('value', value);
        return value.split(' ').length >= 2;
      }),

    email: yup
      .string()
      .required('Please enter your email')
      .email('Please enter a vaild email address'),

    password: yup
      .string()
      .required('Please enter your password')
      .min(6, 'Please enter at least 6 characters.'),

    retypePassword: yup
      .string()
      .required('Please retype your password.')
      .oneOf([yup.ref('password')], 'Password dose not match'),
  });

  const form = useForm({
    defaultValues: {
      fullname: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    console.log(form);
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }
    form.reset();
  };
  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar}>
        <LockOutlined></LockOutlined>
      </Avatar>

      <Typography className={classes.title} component="h3" variant="h5">
        Create An Account
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField form={form} name="fullname" label="Full Name" form={form} />
        <InputField form={form} name="email" label="Email" form={form} />
        <PasswordFiled form={form} name="password" label="Password" form={form} />
        <PasswordFiled form={form} name="retypePassword" label="Reset Password" form={form} />

        <Button
          type="submit"
          className={classes.submit}
          variant="contained"
          color="primary"
          fullWidth
        >
          Create an account
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
