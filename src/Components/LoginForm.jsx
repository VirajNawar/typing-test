import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useAlert } from '../Context/AlertContext';
import { useTheme } from '../Context/ThemeContext';
import { auth } from '../firebaseConfig';

const LoginForm = ({handleClose}) => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {setAlert} = useAlert();

    const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

    const handleSubmit = () =>{
        if(!email || !password){
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

        auth.signInWithEmailAndPassword(email,password).then((ok)=>{
            setAlert({
                open: true,
                type: 'success',
                message: 'logged in'
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
            console.log(err.code, err.message);
            setAlert({
                open: true,
                type: 'error',
                message: 'not able to login'
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

    const {theme} = useTheme();


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
                color: theme.typeBoxText
            } }}
        InputProps={{
            style:{
                color: theme.hoverBg
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
                color: theme.typeBoxText
            } }}
        InputProps={{
            style:{
                color: theme.hoverBg,
            }
        }
        }
        onChange={(e)=> setPassword(e.target.value)}/>

        <Button
        variant="contained"
        size="large"
        style={{backgroundColor: isHovering ? '#10B981' : '',
        color: isHovering ? 'white' : '',}}
        onClick = {handleSubmit}
        onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
            Login
        </Button>

    </Box>
  )
}

export default LoginForm