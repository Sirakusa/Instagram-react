import { Box } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";

import { boxStyle, boxLogin, box2Style } from "./styles";
import { SignUpForm } from "./facade";

export default function Login() {
  return (
    <Box sx={{ transform: "translateY(90px)" }}>
      <Box sx={{ ...boxStyle }}>
        <div style={{ transform: "translateY(-50px)" }}>
          <h1
            style={{
              fontSize: "14px",
              textAlign: "center",
              fontFamily: "Arial",
            }}>
            DEEP WEB
          </h1>
        </div>
        <Box sx={{ ...boxLogin, transform: "translateY(-40px)" }}>
          {SignUpForm()}
        </Box>

        <Box
          sx={{ fontSize: "14px", textAlign: "center", fontFamily: "Arial" }}>
          <p>
            <a href="https://www.instagram.com/accounts/Login/?source=auth_switcher">
              <FacebookIcon sx={{ fontSize: 17 }} />
              Iniciar sesión con Facebook
            </a>
            <br />
            <br />
            <br />
            <a href="https://www.instagram.com/accounts/Login/?source=auth_switcher">
              ¿Has olvidado la contraseña?
            </a>
          </p>
        </Box>
      </Box>

      <Box
        sx={{
          ...box2Style,
          fontSize: "14px",
          textAlign: "center",
          fontFamily: "Arial",
        }}>
        <p>
          ¿No tienes una cuenta? <Link to="/register">Regístrate</Link>
        </p>
      </Box>
    </Box>
  );
}
