import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, IconButton, Container } from '@material-ui/core/';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { firebaseApp } from '../services/Firebase';

const useStyles = makeStyles( () => ({
  root: {
    minHeight: '64px',
    flexGrow: 1,
  },
  appBar: {
    minHeight: '64px'
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = (props) => {

    const [ anchorEl, setAnchorEl ] = useState(null);
    const open = Boolean(anchorEl);
    const classes = useStyles();

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
    const handleClose = () => {
        setAnchorEl(null);
    }
    const logOut = () => {
        setAnchorEl(null);
        firebaseApp.auth().signOut();
    }

  return (
    <div className = {classes.root}>
      <AppBar className = {classes.appBar}>
      <Container fixed>
        <Toolbar className = {classes.appBar}>
          <Typography variant = "h6" className = { classes.title } >
            Faceberg
          </Typography>
            { props.status === 'notLogged' && props.signIn === false && <Button onClick = { () => props.changeSignIn(true) }  color="inherit">Sign In</Button> }
            { props.status === 'notLogged' && props.signIn === true &&  <Button onClick = { () => props.changeSignIn(false) } color="inherit">Sign Up</Button> }
            { props.status === 'logged' && 
          <div>
              <IconButton
                aria-label = "account of current user"
                aria-controls = "menu-appbar"
                aria-haspopup = "true"
                onClick = { handleMenu }
                color = "inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id = "menu-appbar"
                anchorEl = {open}
                anchorOrigin = {{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin = {{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open = {open}
                onClose = {handleClose}
              >
                <MenuItem onClick = {handleClose}>Profile</MenuItem>
                <MenuItem onClick = { logOut }>Logout</MenuItem>
              </Menu>
            </div> }
        </Toolbar>
        </Container>
      </AppBar>
    </div>
  
  );
}
export default Navbar;