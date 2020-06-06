import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import signUp from '../services/Firebase/signUp';

const Register = () => {

    const [ data, setData ] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        signUp(data);
    };

    const handleChange = (e) => {
        const temp = {...data};
        temp[e.target.name] = e.target.value;
        console.log(temp);
        setData(temp);
    };

    return (
    <div style = {{ display: 'flex', justifyContent: 'center' }}>
        <div className = 'outerBox'>
            <h1 style = {{ textAlign: 'center' }}>Sign Up</h1>
            <TextField fullWidth label = 'First Name' name = 'firstName' onChange = { handleChange }/>
            <TextField fullWidth label = 'Last Name' name = 'lastName' onChange = { handleChange }/>
            <TextField fullWidth label = 'Email' type = 'email' name = 'email' onChange = { handleChange }/>
            <TextField fullWidth label = 'Password' type = 'password' name = 'password' onChange = { handleChange }/>
            <Button style = {{ marginTop: '15px' }} fullWidth endIcon = {<SendIcon/>} color = 'primary' variant = 'contained' type = 'submit' onClick = { handleSubmit }>Submit</Button>
            <div style = {{ textAlign: 'center', paddingTop: '15px' }} ><span className = 'link'>Already have an account? Sign In</span></div>
        </div>
    </div>
    )
}
export default Register;
