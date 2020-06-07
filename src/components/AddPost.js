import React from 'react';
import { TextareaAutosize,Typography, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
  
   }
  }));

const AddPost = () => {

    const classes = useStyles();

    return (
        <div className = { classes.outerBox }>
            <Typography className = { classes.title } variant = "h6" >What's in your mind?</Typography>
            <Grid>
        <TextareaAutosize 
        placeholder = 'please write here...'
        rowsMin = {5}
        data-length = {120}
        className = { classes.textArea }
        />
            </Grid>
          <Button className = { classes.button } color = 'primary' variant = 'contained'>Post</Button>
        </div>
    )
}
export default AddPost;