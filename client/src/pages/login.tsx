// src/pages/login.tsx

import { useLogin } from "@refinedev/core";
import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Navbar } from "../components/shared/Navbar";

export const Login: React.FC = () => {
  const { mutate: login } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    login({ email, password });
  };

  return (
    <Container
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
       
      }}
    >
      <Navbar />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="100%"
        maxWidth="400px"
        padding="40px"
        backgroundColor="#ffffff"
        
        borderRadius="8px"
        marginTop="20px"
      >
        <Typography variant="h4" component="h1" gutterBottom pb={1}>
          Login your account
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom pb={2}>
          Wealth Management made easy for you!
        </Typography>
        <TextField
  label={
    <Typography variant="body1" component="span" fontWeight="fontWeightBold" color="black">
      Email
    </Typography>
  }
  placeholder="Ex: Maguire@FlexUI.com"
  variant="outlined"
  fullWidth
  margin="normal"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  sx={{
    
   
    width: '140%', // Increase width
    height: '40px',
   
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#999BA1 !important', // Change border color
      },
      '&:hover fieldset': {
        borderColor: '#999BA1 !important', // Keep border color on hover
      },
      '&.Mui-focused fieldset': {
        borderColor: '#999BA1 !important', // Keep border color on focus
      },
    },
    '& .MuiInputBase-input::placeholder': {
      color: '#999BA1', // Change placeholder color
    },
  }}
/>
<TextField
  label={
    <Typography variant="body1" component="span" fontWeight="fontWeightBold" color="black" >
      Password
    </Typography>
  }
  placeholder="password"
  variant="outlined"
  type="password"
  fullWidth
  margin="normal"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  sx={{
    height: '40px',
    width: '140%', // Increase width
    marginTop: '30px', // Add padding to the top
    
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#999BA1 !important', // Change border color
      },
      '&:hover fieldset': {
        borderColor: '#999BA1 !important', // Keep border color on hover
      },
      '&.Mui-focused fieldset': {
        borderColor: '#999BA1 !important', // Keep border color on focus
      },
    },
    '& .MuiInputBase-input::placeholder': {
      color: '#999BA1', // Change placeholder color
    },
  }}
/>

<Button
  variant="contained"
  color="primary"
  fullWidth
  onClick={handleSubmit}
  sx={{
    width: '140%',
    height: '40px', // Adjust the height as needed
    marginTop: '40px',
    paddingTop: '10px', // Add padding to the top
    paddingBottom: '10px', // Add padding to the bottom
    backgroundColor: '#6236F5',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#4e29d4', // Optional: A slightly darker color for hover state
    },
  }}
>
  Login Account ➔
</Button>

      </Box>
    </Container>
  );
};
