import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";
import { Link } from "react-router-dom";
import DescriptionIcon from "@mui/icons-material/Description";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <List>
      <ListItemButton onClick={handleOpen} sx={{ mt: 1 }}>
        <ListItemIcon sx={{ pl: 4 }}>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText secondary="User" />
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText
              secondary="User List"
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
              secondary="User Add"
              sx={{
                marginLeft: 10,
                paddingLeft: 0,
                listStyleType: "disc",
                display: "list-item",
                color: "gray",
              }}
            />
            <Link to={"/addusers"}>User add</Link>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText
              secondary="User Edit"
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
      <ListItemButton sx={{ mt: 1 }}>
        <ListItemIcon sx={{ pl: 4 }}>
          <DescriptionIcon />
        </ListItemIcon>
        <ListItemText secondary="Dashboard" />
      </ListItemButton>
    </List>
  );
}
