import { Stack, Box } from "@mui/material";
import { ViewImage, ButtonsBar, DataUser, DescriptionUser } from "./facade";
import { MainBox, Center } from "./styles";

export default function Description() {
  return (
    <Box sx={{ ...MainBox }}>
      <Stack direction={"row"} spacing={11} sx={{ ...Center }}>
        {ViewImage()}
        <Box>
          {ButtonsBar()}
          {DataUser()}
          {DescriptionUser()}
        </Box>
      </Stack>
    </Box>
  );
}
