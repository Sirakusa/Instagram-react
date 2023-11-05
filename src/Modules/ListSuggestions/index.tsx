import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";
import { box } from "./styles";
import { viewSuggestions, user } from "./facade";

export default function ImageAvatars() {
  return (
    <Box sx={{ ...box }}>
      <Stack spacing={2}>
        {user("Jose666", "/static/images/avatar/1.jpg")}
        {viewSuggestions()}
        {user("Jose666", "/static/images/avatar/1.jpg")}
        {user("Medgarin", "/static/images/avatar/2.jpg")}
        {user("marlonzzz", "/static/images/avatar/3.jpg")}
        {user("Jose666", "/static/images/avatar/1.jpg")}
        {user("Medgarin", "/static/images/avatar/2.jpg")}
      </Stack>
    </Box>
  );
}
