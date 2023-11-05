import { Stack, Box, Typography } from "@mui/material";
import { fontUser, fontFollow, stack } from "./styles";

import {
  TurnedInNotIcon,
  DetailsIcon,
  ChatBubbleOutlineIcon,
  IconButton,
  FavoriteBorderIcon,
} from "./icons";

export function IconButtons() {
  return (
    <Stack direction="row" spacing={15} sx={{ marginLeft: "20px" }}>
      <Stack direction="row" spacing={1}>
        <IconButton>
          <FavoriteBorderIcon />
        </IconButton>
        <IconButton>
          <ChatBubbleOutlineIcon />
        </IconButton>
        <IconButton>
          <DetailsIcon />
        </IconButton>
      </Stack>
      <IconButton>
        <TurnedInNotIcon />
      </IconButton>
    </Stack>
  );
}

export function Comments() {
  return <Box sx={{ height: "430px" }}></Box>;
}

export function ImageProfile() {
  return (
    <div>
      <img
        src={"https://picsum.photos/35/35"}
        alt="profileImage"
        style={{ borderRadius: "50%" }}
      />
    </div>
  );
}

export const UserPost = () => {
  return (
    <Stack direction={"row"} spacing={2} sx={{ ...stack, marginTop: "20px" }}>
      <Typography sx={{ ...fontUser }}>Usuario</Typography>
      <Typography sx={{ ...fontFollow }}>• Siguiendo</Typography>
    </Stack>
  );
};

export function ViewImage() {
  return (
    <Box sx={{ width: "50%", height: "700px" }}>
      <img src={"https://picsum.photos/350/700"} alt="profileImage" />
    </Box>
  );
}
