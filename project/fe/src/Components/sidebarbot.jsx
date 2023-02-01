import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import { Typography } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import WindowOutlinedIcon from "@mui/icons-material/WindowOutlined";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import Description from "@mui/icons-material/Description";
import BarChartIcon from "@mui/icons-material/BarChart";
import ViewComfyRoundedIcon from "@mui/icons-material/ViewComfyRounded";
import MapIcon from "@mui/icons-material/Map";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
export default function SidebarBottom() {
  return (
    <List>
      <Typography color="gray" sx={{ pl: 6, pt: 2, fontSize: 16 }}>
        TEMPLATE
      </Typography>
      <ListItemButton sx={{ mt: 1 }}>
        <ListItemIcon sx={{ pl: 4 }}>
          <AppsIcon />
        </ListItemIcon>
        <ListItemText secondary="Core" />
      </ListItemButton>
      <ListItemButton sx={{ mt: 1 }}>
        <ListItemIcon sx={{ pl: 4 }}>
          <WindowOutlinedIcon />
        </ListItemIcon>
        <ListItemText secondary="Tables" />
      </ListItemButton>
      <ListItemButton sx={{ mt: 1 }}>
        <ListItemIcon sx={{ pl: 4 }}>
          <LibraryAddCheckIcon />
        </ListItemIcon>
        <ListItemText secondary="UI Elements" />
      </ListItemButton>
      <ListItemButton sx={{ mt: 1 }}>
        <ListItemIcon sx={{ pl: 4 }}>
          <Description />
        </ListItemIcon>
        <ListItemText secondary="Forms" />
      </ListItemButton>
      <ListItemButton sx={{ mt: 1 }}>
        <ListItemIcon sx={{ pl: 4 }}>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText secondary="Charts" />
      </ListItemButton>
      <ListItemButton sx={{ mt: 1 }}>
        <ListItemIcon sx={{ pl: 4 }}>
          <ViewComfyRoundedIcon />
        </ListItemIcon>
        <ListItemText secondary="Grid" />
      </ListItemButton>
      <ListItemButton sx={{ mt: 1 }}>
        <ListItemIcon sx={{ pl: 4 }}>
          <MapIcon />
        </ListItemIcon>
        <ListItemText secondary="Maps" />
      </ListItemButton>
      <ListItemButton sx={{ mt: 1 }}>
        <ListItemIcon sx={{ pl: 4 }}>
          <StarBorderPurple500OutlinedIcon />
        </ListItemIcon>
        <ListItemText secondary="Extra" />
      </ListItemButton>
    </List>
  );
}
