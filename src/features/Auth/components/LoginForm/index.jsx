import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/form-controls/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Avatar, Button, LinearProgress, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import PasswordFiled from '../../../../components/form-controls/PasswordFiled';

const useStyle = makeStyles((theme) => ({
  root: {
    position: 'relative',
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

  progress: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
}));

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

function LoginForm(props) {
  const classes = useStyle();
  const schema = yup.object().shape({
    identifier: yup.string().required('Please enter your email'),
    password: yup.string().required('Please enter your password'),
  });

  const form = useForm({
    defaultValues: {
      identifier: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
  };

  const { isSubmitting } = form.formState;

  return (
    <div className={classes.root}>
      {isSubmitting && <LinearProgress className={classes.progress} />}

      <Avatar className={classes.avatar}>
        <LockOutlined></LockOutlined>
      </Avatar>

      <Typography className={classes.title} component="h3" variant="h5">
        Sign in
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField form={form} name="identifier" label="Email" form={form} />
        <PasswordFiled form={form} name="password" label="Password" form={form} />

        <Button
          type="submit"
          className={classes.submit}
          variant="contained"
          color="primary"
          fullWidth
          disabled={isSubmitting}
          size="large"
        >
          Sign in
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
