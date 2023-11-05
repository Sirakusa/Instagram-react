import {
  HomeIcon,
  SearchIcon,
  ExploreIcon,
  MapsUgcIcon,
  FavoriteBorderIcon,
  AddCircleOutlineIcon,
  TuneIcon,
  AcUnitIcon,
  Avatar,
} from "./icons";

import { Box, List } from "@mui/material";

import { box } from "./styles";

import { buttonLogo, listItem } from "./facade";

export default function BarList() {
  return (
    <Box sx={{ ...box }}>
      <nav aria-label="main mailbox folders">
        <List>
          {buttonLogo()}
          {listItem("Inicio", <HomeIcon />)}
          {listItem("Busqueda", <SearchIcon />)}
          {listItem("Explorar", <ExploreIcon />)}
          {listItem("Reels", <MapsUgcIcon />)}
          {listItem("Notificaciones", <FavoriteBorderIcon />)}
          {listItem("Crear", <AddCircleOutlineIcon />)}
          {listItem(
            "Perfil",
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          )}
        </List>
      </nav>

      <Box sx={{ height: "275px" }}></Box>

      {listItem("Threads", <AcUnitIcon />)}
      {listItem("Mas", <TuneIcon />)}
    </Box>
  );
}
