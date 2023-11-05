import { Box, Stack, Divider } from "@mui/material";
import { mainBox } from "./styles";

import { ViewImage, User, IconButtons } from "./componets";

export default function ImageAvatars() {
  return (
    <Box sx={{ ...mainBox }}>
      <Stack spacing={2}>
        {User(
          "Jose666",
          "/static/images/avatar/1.jpg",
          "Mandarin Oriental Ritz, Madrid"
        )}
        <Box sx={{ width: "410px", height: "600px" }}>{ViewImage()}</Box>
      </Stack>
      <Stack>
        {IconButtons()}
        <Box sx={{ width: 150, height: 0, overflow: "hidden" }} />
      </Stack>
      <Divider />
    </Box>
  );
}
