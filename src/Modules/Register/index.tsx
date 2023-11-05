import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import { SignUpForm } from "./facade";
import {
  BoxStyle,
  BoxText,
  BoxRegister,
  BoxEnter,
  Box2Style,
  MainBox,
  WidthRegister,
} from "./styles";

export default function Register() {
  return (
    <>
      {" "}
      <Box sx={{ ...BoxStyle }}>
        <div style={{ ...MainBox }}>
          <p style={{ fontSize: "60px" }}>DEEP WEB</p>
        </div>

        <Box sx={{ ...BoxRegister }}>
          <p>Regístrate para ver fotos y vídeos de tus amigos.</p>
        </Box>

        <Button
          variant="contained"
          href="#contained-buttons"
          size="small"
          sx={{
            transform: "translateY(-105px)",
            fontSize: "10px",
            width: WidthRegister,
          }}>
          Iniciar sesion con facebook
        </Button>

        <Box sx={{ ...BoxEnter, transform: "translateY(-26px)" }}>
          {SignUpForm()}
        </Box>
      </Box>
      <Box sx={{ ...Box2Style, ...BoxText }}>
        <p>
          ¿Tienes una cuenta? <Link to="/">Entrar</Link>
        </p>
      </Box>{" "}
    </>
  );
}
