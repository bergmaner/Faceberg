import React from 'react';
import { TextField, Typography, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const useStyles = makeStyles( () => ({
   textArea: {
    width: '100%',
   },
   title: {
    marginBottom: '10px'
   },
   button: {
       marginTop: '10px'
   },
   outerBox: {
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0px 2px 10px rgba(0,0,0,0.6), 0px 2px 10px rgba(0,0,0,0.6)'
   },
  }));

  const TextArea = styled(TextField)`
  .MuiInput-underline:before {
     display:none;
 }
 .MuiInput-underline:after{
     display:none;
 }
  
  `

const AddPost = () => {

    const classes = useStyles();

    return (
        <div className = { classes.outerBox }>
            <Typography className = { classes.title } variant = "h6" >What's on your mind?</Typography>
            <Grid>
            <TextArea
          fullWidth
          multiline
          rows = {3}
          placeholder = "Please write here"
        />
            </Grid>
          <Button className = { classes.button } color = 'primary' variant = 'contained'>Post</Button>
        </div>
    )
}
export default AddPost;