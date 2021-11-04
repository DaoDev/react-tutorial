import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CodeIcon from '@material-ui/icons/Code';
import { Link, NavLink } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Register from '../../features/Auth/components/Register';
import { IconButton, MenuItem } from '@material-ui/core';
import { AccountCircle, Close } from '@material-ui/icons';
import Login from '../../features/Auth/components/Login';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { Menu } from '@mui/material';
import { logout } from '../../features/Auth/userSlice';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
  },
  closeButton: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: theme.palette.grey[500],
    zIndex: 1,
  },
}));

const MODE = {
  LOGIN: 'login',
  REGISTER: 'register',
};

export default function Header() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggieIn = !!loggedInUser.id;

  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(MODE.LOGIN);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUserClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogoutClick = () => {
    const action = logout();
    dispatch(action);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <CodeIcon className={classes.menuButton} />
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.link} to="/">
              {' '}
              EZ SHOP
            </Link>
          </Typography>
          <NavLink className={classes.link} to="/albums">
            <Button color="inherit">Albums</Button>
          </NavLink>
          <NavLink className={classes.link} to="/todo">
            <Button color="inherit">Todo</Button>
          </NavLink>

          {!isLoggieIn && (
            <Button color="inherit" onClick={handleClickOpen}>
              Login
            </Button>
          )}

          {isLoggieIn && (
            <IconButton color="inherit" onClick={handleUserClick}>
              <AccountCircle />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Menu
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
        <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
      </Menu>

      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <IconButton className={classes.closeButton} onClick={handleClose}>
          <Close />
        </IconButton>
        <DialogContent>
          <DialogContentText>
            {mode === MODE.REGISTER && (
              <>
                <Register closeDialog={handleClose} />

                <Box textAlign="center">
                  <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                    Already have an account. Login here.
                  </Button>
                </Box>
              </>
            )}
            {mode === MODE.LOGIN && (
              <>
                <Login closeDialog={handleClose} />

                <Box textAlign="center">
                  <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                    Don't have an account. Register here.
                  </Button>
                </Box>
              </>
            )}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
