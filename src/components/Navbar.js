import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, Container } from '@material-ui/core/';
import DropDownMenu from './DropDownMenu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { firebaseApp } from '../services/Firebase';

const useStyles = makeStyles( () => ({
  root: {
    minHeight: '64px',
    flexGrow: 1,
  },
  appBar: {
    minHeight: '64px',
    padding:   '0px'
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = (props) => {

    const classes = useStyles();

    const logOut = () => {
        firebaseApp.auth().signOut();
    }

    const menuConfig = {
      icon: <AccountCircle/>,
      class: 'account',
      items: [
        { text: 'My Account' },
        { text: 'Log Out', onClick: logOut }
      ]
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
            { props.status === 'logged' && <DropDownMenu menuConfig = {menuConfig} /> }
        </Toolbar>
        </Container>
      </AppBar>
    </div>
  
  );
}
export default Navbar;