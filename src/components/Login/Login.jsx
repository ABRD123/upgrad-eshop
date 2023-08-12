import React from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Container, Typography, Stack, FormControl, TextField, Button, Link} from '@mui/material';
import { Box } from '@mui/system';

const formControlStyle = { margin: 1, width: 300 }; // style for the inputs

// main SignIn component
function Login() {
    return ( <>
        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 2 }}> 
            <Stack sx={{ justifyContent: 'center', alignItems: 'center', padding: 2, backgroundColor: 'whitesmoke' }}>
                {/* Lock Icon at the top of Sign In Page */}
                <Avatar sx={{ display: 'div', backgroundColor: '#db1226', textAlign: 'center', m:1 }}>
                    <LockOutlinedIcon sx={{ color: 'white', margin: 'auto'}}></LockOutlinedIcon>
                </Avatar>
                <Typography sx={{ fontWeight: 'bold', fontFamily: 'revert', mb: 1}}>Sign In</Typography>
            
                {/* Form Inputs */}
                <FormControl id='email' sx={formControlStyle}>
                    <TextField label="Email Address *" variant="outlined" size="small"></TextField>
                </FormControl>
                <FormControl id='pass' sx={formControlStyle}>
                    <TextField label="Password *" variant="outlined" size="small"></TextField>
                </FormControl>

                {/* Sign In button */}
                <Button variant="contained" sx={{ width: 300, mt: 1, backgroundColor: "#3c32a8"}}>SIGN IN</Button>

                {/* Link below the button to SIGN UP */}
                <Box sx={{ display:'flex', width: 300}}>
                    <Link href='signup' sx={{ mt: 1, fontSize: 14 }}>Don't have an account? Sign Up</Link>
                </Box>
            </Stack>
        </Container>
    </> );
}

export default Login;