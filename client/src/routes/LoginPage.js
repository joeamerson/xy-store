import LoginForm from "../components/content/Forms/loginForm/LoginForm";
import { Alert, Typography } from "@mui/material";
import Logo from "../components/header/navbar/Logo";
import {
  ContainerStyle,
  WrapperStyle,
  TitleContaintertStyle,
  FormTitleStyle,
  ContainerFormStyle,
  WrapperFormStyle,
} from "../styles/content.style/form.style/form.style";
import { useSelector } from "react-redux";

const LoginInPage = () => {
  const auth = useSelector((state) => state.entities.auth.error);
  const errorMessage = useSelector((state) => state.entities.auth.errorMessage);
  return (
    <>
      <ContainerStyle>
        <WrapperStyle>
          <ContainerFormStyle>
            <WrapperFormStyle>
              <TitleContaintertStyle>
                <Logo />
              </TitleContaintertStyle>
              <FormTitleStyle>
                <Typography variant="h6" marginBottom={2}>
                  Sign in to your account
                </Typography>
              </FormTitleStyle>
              {auth && errorMessage ? (
                <Typography marginBottom={2}>
                  <Alert severity="error">{errorMessage}</Alert>
                </Typography>
              ) : null}

              <LoginForm />
            </WrapperFormStyle>
          </ContainerFormStyle>
        </WrapperStyle>
      </ContainerStyle>
    </>
  );
};

export default LoginInPage;
