import * as React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import Sidebar from "./Sidebar";
import SidebarBottom from "./sidebarbot";
import { Divider } from "@mui/material";

export default function Side() {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 300, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton sx={{ mt: 1 }}>
        <ListItemIcon sx={{ pl: 4 }}>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText secondary="Profile" />
      </ListItemButton>
      <ListItemButton sx={{ mt: 1 }}>
        <ListItemIcon sx={{ pl: 4 }}>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText secondary="Dashboard" />
      </ListItemButton>
      <ListItemButton onClick={handleClick} sx={{ mt: 1 }}>
        <ListItemIcon sx={{ pl: 4 }}>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText secondary="E-commerce" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText
              secondary="Product Manage"
              sx={{
                marginLeft: 10,
                paddingLeft: 0,
                listStyleType: "disc",
                display: "list-item",
                color: "gray",
              }}
            />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText
              secondary="Product Grid"
              sx={{
                marginLeft: 10,
                paddingLeft: 0,
                listStyleType: "disc",
                display: "list-item",
                color: "gray",
              }}
            />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText
              secondary="Product Page"
              sx={{
                marginLeft: 10,
                paddingLeft: 0,
                listStyleType: "disc",
                display: "list-item",
                color: "gray",
              }}
            />
          </ListItemButton>
        </List>
      </Collapse>
      <Sidebar />
      <Divider />
      <SidebarBottom />
    </List>
  );
}
