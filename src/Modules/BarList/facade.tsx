import { list, itemButton, logo, itemLogo } from "./styles";

import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export function listItem(itemText: string, icon: JSX.Element) {
  return (
    <ListItem disablePadding sx={{ ...list }}>
      <ListItemButton sx={{ ...itemButton }}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={itemText} />
      </ListItemButton>
    </ListItem>
  );
}

export function buttonLogo() {
  return (
    <ListItem disablePadding sx={{ ...logo }}>
      <ListItemButton disableRipple sx={{ ...itemLogo }}>
        <ListItemText primary="Deep Web" />
      </ListItemButton>
    </ListItem>
  );
}
