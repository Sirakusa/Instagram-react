import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";

import { stackSuggestions } from "./styles";

export function user(name: string, image: string) {
  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      sx={{ typography: "body1" }}>
      <Avatar alt="Remy Sharp" src={image} />
      <Stack>
        <Link
          href="#"
          underline="none"
          color="inherit"
          sx={{ fontWeight: "bold" }}>
          {name}
        </Link>
        <div style={{ fontSize: 11 }}>Sugerencia para ti</div>
      </Stack>
      <Link href="#" underline="none">
        {"Seguir"}
      </Link>
    </Stack>
  );
}

export function viewSuggestions() {
  return (
    <Stack
      direction="row"
      spacing={7}
      alignItems="center"
      sx={{ ...stackSuggestions }}>
      <Box sx={{ fontSize: 14 }}>Sugerencia para ti</Box>
      <Link href="#" underline="none" color="inherit" sx={{ fontSize: 11 }}>
        {"Ver todo"}
      </Link>
    </Stack>
  );
}
