import Box from "@mui/material/Box";

import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

export default function Direction() {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        width: "100%",
        display: "flex",
        height: "4%",
        alignItems: "center",
        borderRadius: 1,
        mt: 2,
        mb: 2,
      }}
    >
      <List>
        <ListItem style={{ color: "gray" }}>
          <ListItemButton>
            <ListItemText primary="App" />
          </ListItemButton>
          <ListItemText primary=">" />
          <ListItemButton>
            <ListItemText primary="User" />
          </ListItemButton>
          <ListItemText primary=">" />
          <ListItemButton>
            <ListItemText primary="New" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}
