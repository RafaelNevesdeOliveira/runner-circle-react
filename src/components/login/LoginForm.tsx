import React from "react";
import {
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import {
  ButtonLogin,
  LoginCard,
  LoginContainer,
  LoginContainerImage,
} from "../../styles1/login/LoginFormStyles";
import Logo from "../../assets/loginForm/Logo.svg";
import Runnner from "../../assets/loginForm/RunnerCircle.svg";

const LoginForm: React.FC = () => {
  return (
    <LoginCard>
      <LoginContainer>
        <Typography
          variant="h5"
          style={{ fontWeight: "bold", fontSize: "2rem" }}
          gutterBottom
        >
          Login
        </Typography>
        <FormLabel>E-mail</FormLabel>
        <TextField
          color="secondary"
          label="Email"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <FormLabel>Senha</FormLabel>
        <TextField
          label="Senha"
          color="secondary"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Lembrar-me"
        />
        <ButtonLogin variant="contained">Login</ButtonLogin>
        <Typography variant="body2" style={{ marginTop: 20 }}>
          Ainda não tem conta? <a href="#register">Crie seu cadastro!</a>
        </Typography>
      </LoginContainer>
      <LoginContainerImage>
        <img
          src={Logo}
          alt="Logo"
          style={{
            position: "absolute",
            top: 20,
            left: "50%",
            transform: "translateX(-50%)",
            width: "180px",
          }}
        />
        <img
          src={Runnner}
          alt="Runnner"
          style={{
            position: "absolute",
            left: "50%",
            bottom: "0%",
            transform: "translateX(-50%)",
            width: "400px",
          }}
        />
      </LoginContainerImage>
    </LoginCard>
  );
};

export default LoginForm;
