import axios from 'axios';
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

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:7000/api/users/login', {
        email,
        password,
      });
  
      // Assuming the backend responds with a token
      const { token } = response.data;
  
      // Handle successful login (e.g., store the token, redirect user)
      login({ token });
    } catch (error) {
      console.error("Login failed:", error);
      // Handle login error (e.g., show an error message)
    }
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
          label={<Typography variant="body1" component="span" fontWeight="fontWeightBold" color="black">Email</Typography>}
          placeholder="Ex: Maguire@FlexUI.com"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            width: '140%',
            height: '40px',
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#999BA1 !important',
              },
              '&:hover fieldset': {
                borderColor: '#999BA1 !important',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#999BA1 !important',
              },
            },
            '& .MuiInputBase-input::placeholder': {
              color: '#999BA1',
            },
          }}
        />
        <TextField
          label={<Typography variant="body1" component="span" fontWeight="fontWeightBold" color="black">Password</Typography>}
          placeholder="password"
          variant="outlined"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            height: '40px',
            width: '140%',
            marginTop: '30px',
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#999BA1 !important',
              },
              '&:hover fieldset': {
                borderColor: '#999BA1 !important',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#999BA1 !important',
              },
            },
            '& .MuiInputBase-input::placeholder': {
              color: '#999BA1',
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
            height: '40px',
            marginTop: '40px',
            paddingTop: '10px',
            paddingBottom: '10px',
            backgroundColor: '#6236F5',
            color: '#ffffff',
            '&:hover': {
              backgroundColor: '#4e29d4',
            },
          }}
        >
          Login Account ➔
        </Button>
      </Box>
    </Container>
  );
};
