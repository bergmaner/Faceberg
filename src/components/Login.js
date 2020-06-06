import React from 'react';
import { TextField, Button } from '@material-ui/core';
const Login = () => {
    return (
    <div style = {{ display: 'flex', justifyContent: 'center' }} >
        <div className = "outerBox">
            <TextField fullWidth label = "First Name"/>
            <TextField fullWidth label = "Password"/>
            <Button>Submit</Button>
            
        </div>
    </div>
    )
}
export default Login;
