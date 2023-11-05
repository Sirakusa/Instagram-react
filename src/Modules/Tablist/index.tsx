import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Stack } from "@mui/material";

import { MainBox } from "./styles";
import { ViewImage } from "./facade";
import { useState } from "react";

export default function TabsList() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ ...MainBox }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
      <Stack direction={"row"} spacing={2} sx={{ m: 1 }}>
        {" "}
        {ViewImage()}
        {ViewImage()}
        {ViewImage()}
      </Stack>
      <Stack direction={"row"} spacing={2} sx={{ m: 1 }}>
        {" "}
        {ViewImage()}
        {ViewImage()}
        {ViewImage()}
      </Stack>
    </Box>
  );
}
