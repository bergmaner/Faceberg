import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import signIn from '../services/Firebase/signIn';

const Login = () => {

    const [ data, setData ] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        signIn(data);
    };

    const handleChange = (e) => {
        const temp = {...data};
        temp[e.target.name] = e.target.value;
        console.log(temp);
        setData(temp);
    };

    return (        
    <div style = {{ display: 'flex', justifyContent: 'center' }} >
        <div className = 'outerBox'>
            <h1 style = {{ textAlign: 'center' }}>Sign In</h1>
            <TextField fullWidth label = 'First Name' type = 'email' name ='email' onChange = { handleChange }/>
            <TextField fullWidth label = 'Password' type = 'password' name = 'password' onChange = { handleChange }/>
            <Button style = {{ marginTop: '15px' }} fullWidth endIcon = { <SendIcon/> } color = 'primary' variant = 'contained' onClick = { handleSubmit } >Submit</Button>
            <div style = {{ textAlign: 'center', paddingTop: '15px' }} ><span className = 'link'>Have an account yet? Sign Up</span></div>
        </div>
    </div>
    )
}
export default Login;
