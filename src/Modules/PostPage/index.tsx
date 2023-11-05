import { SentimentSatisfiedAltIcon } from "./icons";

import { Box, Stack, Typography, Divider, TextField } from "@mui/material";
import { mainBox, stack, fontHour, fontLikes, infoBox } from "./styles";

import {
  IconButtons,
  ViewImage,
  UserPost,
  Comments,
  ImageProfile,
} from "./facade";

export default function SecondPost() {
  return (
    <Box sx={{ ...mainBox }}>
      <Stack direction={"row"}>
        {ViewImage()}
        <Box sx={{ ...infoBox }}>
          {UserPost()}
          <Typography sx={{ fontSize: "13px", marginLeft: "20px", mb: 1 }}>
            Mandarin Oriental Ritz, Madrid
          </Typography>
          <Divider />
          {Comments()}
          {IconButtons()}
          <Typography sx={{ ...fontLikes }}>222 Me gusta</Typography>
          <Typography sx={{ ...fontHour }}>HACE UNA HORA</Typography>
          <Stack sx={{ ...stack, width: "100%" }} direction={"row"} spacing={1}>
            <Box sx={{ width: "35px", height: "35px" }}>{ImageProfile()}</Box>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              size="small"
            />
            <SentimentSatisfiedAltIcon />
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
