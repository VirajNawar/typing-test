import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useAlert } from '../Context/AlertContext';
import { useTheme } from '../Context/ThemeContext';
import { auth } from '../firebaseConfig';

const SignUpForm = ({handleClose}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const {theme} = useTheme();
    const {setAlert} = useAlert();

    const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };


    const handleSubmit = ()=>{
        if(!email || !password || !confirmPassword){
            setAlert({
                open: true,
                type: 'warning',
                message: 'fill all details'
            });
            setTimeout(()=>{
                setAlert({
                    open:false,
                    type: "",
                    message: ""
                })
            },2000);;
            return;
            
        }
        if(password!==confirmPassword){
            setAlert({
                open: true,
                type: 'warning',
                message: 'password mismatch'
            });
            setTimeout(()=>{
                setAlert({
                    open:false,
                    type: "",
                    message: ""
                })
            },2000);;
            return;
            
        }
        auth.createUserWithEmailAndPassword(email,password).then((ok)=>{
            setAlert({
                open: true,
                type: 'success',
                message: 'signed in'
            });
            setTimeout(()=>{
                setAlert({
                    open:false,
                    type: "",
                    message: ""
                })
            },2000);
            handleClose();
        }).catch((err)=>{
            setAlert({
                open: true,
                type: 'error',
                message: 'not able to sign in'
            });
            setTimeout(()=>{
                setAlert({
                    open:false,
                    type: "",
                    message: ""
                })
            },2000);
        });

        
    }

  return (
    <Box
     p={3}
     style={{
        padding:10,
        display:"flex",
        flexDirection:"column",
        gap:"20px",
        backgroundColor:theme.upperBg

     }}>
        <TextField
        variant="outlined"
        type="email"
        label="Enter email"
        InputLabelProps={{
            style: {
                color: theme.typeBoxText,
            } }}
        InputProps={{
            style:{
                color: theme.hoverBg,
            }
        }
        }
        onChange={(e)=> setEmail(e.target.value)}>

        </TextField>
        <TextField
        variant="outlined"
        type="password"
        label="Enter Password"
        InputLabelProps={{
            style: {
                color: theme.typeBoxText,
            } }}
        InputProps={{
            style:{
                color: theme.hoverBg,
            }
        }
        }
        onChange={(e)=> setPassword(e.target.value)}>

        </TextField>
        <TextField
        variant="outlined"
        type="password"
        label="Confirm Password"
        InputLabelProps={{
            style: {
                color: theme.typeBoxText
            } }}
        InputProps={{
            style:{
                color: theme.hoverBg,
            }
        }
        }
        onChange={(e)=> setConfirmPassword(e.target.value)}>

        </TextField>

        <Button
        variant="contained"
        size="large"
        style={{backgroundColor: isHovering ? '#10B981' : '',
        color: isHovering ? 'white' : '',}}
        onClick = {handleSubmit}
        onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
            Sign Up

        </Button>

    </Box>
  )
}

export default SignUpForm