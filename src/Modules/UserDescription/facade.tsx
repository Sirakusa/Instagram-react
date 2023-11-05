import Button from "@mui/material-next/Button";

import { Stack, Typography, Box } from "@mui/material";

import PersonAddIcon from "@mui/icons-material/PersonAdd";
import IconButton from "@mui/material/IconButton";

export function ViewImage() {
  return (
    <div>
      <img
        src={"https://picsum.photos/190/190"}
        alt="profileImage"
        style={{ borderRadius: "50%" }}
      />
    </div>
  );
}

export function ButtonsBar() {
  return (
    <Stack
      direction={"row"}
      spacing={2}
      sx={{
        mb: 3,
        display: "flex",
        alignItems: "center",
      }}>
      <Typography>Usuario</Typography>
      <Button color="secondary" variant="filled" sx={{ height: "30px" }}>
        <Typography>Siguiendo</Typography>
      </Button>
      <Button color="secondary" variant="filled" sx={{ height: "30px" }}>
        <Typography>Enviar mensaje</Typography>
      </Button>
      <IconButton>
        <PersonAddIcon />
      </IconButton>
    </Stack>
  );
}

export function DataUser() {
  return (
    <Stack direction={"row"} spacing={4} sx={{ mb: 2 }}>
      <Typography>2149 publicaciones</Typography>
      <Typography>31,1 mil seguidores</Typography>
      <Typography>137 seguidos</Typography>
    </Stack>
  );
}

export function DescriptionUser() {
  return (
    <Box sx={{ width: "510px" }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, rerum
      iure? Cum, animi recusandae nemo reiciendis ducimus suscipit ea commodi
      velit quo vel ipsam ipsa voluptates enim fuga doloribus alias.
    </Box>
  );
}
