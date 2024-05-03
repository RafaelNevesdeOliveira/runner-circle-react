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
} from "./styles";
import Logo from "../../assets/loginForm/Logo.svg";
import Runnner from "../../assets/loginForm/RunnerCircle.svg";

export function Cadastro() {
  return (
    <LoginCard>
      <LoginContainer>
        <Typography
          variant="h5"
          style={{ fontWeight: "bold", fontSize: "2rem" }}
          gutterBottom
        >
          Cadastro
        </Typography>
        <FormLabel>Nome</FormLabel>
        <TextField
          color="secondary"
          label="Seu nome"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <FormLabel>Email ou usuário</FormLabel>
        <TextField
          label="usuario123@hotmail.com"
          color="secondary"
          type="password"
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
        <ButtonLogin >
          Cadastrar
        </ButtonLogin>
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
}