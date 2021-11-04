import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@material-ui/core';
import { Controller } from 'react-hook-form';
import { Visibility, VisibilityOff } from '@material-ui/icons';

PasswordFiled.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disable: PropTypes.bool,
};

function PasswordFiled(props) {
  const { form, name, label } = props;
  const { control } = form;
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((x) => !x);
  };

  return (
    <Controller
      name={name}
      control={control}
      id="outlined-adornment-password"
      type={showPassword ? 'text' : 'password'}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={toggleShowPassword}
            edge="end"
          >
            {showPassword ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </InputAdornment>
      }
      render={({ field: { onChange, onBlur, value, name }, fieldState: { error, invalid } }) => (
        <>
          <FormControl error={invalid} fullWidth margin="normal" variant="outlined">
            <InputLabel htmlFor={name}>{label}</InputLabel>
            <OutlinedInput
              id={name}
              error={invalid}
              type={showPassword ? 'text' : 'password'}
              label={label}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={toggleShowPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
              margin="normal"
              onChange={onChange}
              onBlur={onBlur}
              value={value}
            />
            <FormHelperText error={invalid}>{error?.message}</FormHelperText>
          </FormControl>
        </>
      )}
    />
  );
}

export default PasswordFiled;
