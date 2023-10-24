import { List, ListItem, ListItemText, Divider, Typography } from "@mui/material";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../App";

export default function MenuItem() {
  const [user, ] = useContext(UserContext)
  let navigate = useNavigate();


  return (
    <>
      <List>
        <ListItem component={Link} to="/" onClick={(e) => navigate("/")}>
          <ListItemText primary="Trang Chủ" />
        </ListItem>
        <ListItem  component={Link} to="/" onClick={(e) => navigate("/")}>
          <ListItemText primary="Audio book" />
        </ListItem>
        {user === null && <>
        <ListItem
          component={Link}
          to="/login"
          onClick={(e) => navigate("/login")}
        >
          <ListItemText primary="Đăng nhập" />
        </ListItem>
        <ListItem

          component={Link}
          to="/register"
          onClick={(e) => navigate("/register")}
        >
          <ListItemText primary="Đăng ký" />
        </ListItem> </>}
        {user !== null ? <>
        <ListItem

          component={Link}
          to="/new"
          onClick={(e) => navigate("/new")}
        >
          <ListItemText primary="Viết" />
        </ListItem>
        </> : <Typography variant="caption">Hãy đăng nhập để viết truyện nhé</Typography>}
        {user !== null && <>
        <Divider>Cá nhân</Divider >
        <ListItem
          component={Link}
          to="/workspace"
          onClick={(e) => navigate("/workspace")}
        >
          <ListItemText primary="Truyện đã đăng" />
        </ListItem>
        <ListItem
          component={Link}
          to="/profile"
          onClick={(e) => navigate("/profile")}
        >
          <ListItemText primary="Trang cá nhân" />
        </ListItem></>}
        {(user !== null && user.role ==="ROLE_ADMIN") ? <> <Divider>Administator</Divider >
        <ListItem
          component={Link}
          to="/pending"
          onClick={(e) => navigate("/pending")}
        >
          <ListItemText primary="Duyệt truyện" />
        </ListItem></>:null
        }
      </List>
    </>
  );
}
