import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import {
  LightbulbOutlined as Lightbulb,
  ArchiveOutlined as Archive,
  DeleteOutlined as Delete,
  NotificationsOutlined as Notification,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const NavList = () => {
  const navList = [
    { id: 1, name: "Заметки", icon: <Lightbulb />, route: "/" },
    { id: 2, name: "Архив", icon: <Archive />, route: "/archive" },
    { id: 3, name: "Корзина", icon: <Delete />, route: "/delete" },
  ];

  return (
    <List>
      {navList.map((list) => (
        <ListItem button key={list.id}>
          <Link
            to={`${list.route}`}
            style={{
              textDecoration: "none",
              display: "flex",
              color: "inherit",
              marginLeft: "8px",
            }}
          >
            <ListItemIcon sx={{ alignItems: "center", color: "#fff" }}>
              {list.icon}
            </ListItemIcon>
            <ListItemText
              primary={list.name}
              sx={{
                color: "#fff",
                ml: "15px",
              }}
            />
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default NavList;
