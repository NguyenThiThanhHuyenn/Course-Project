import * as React from "react";
import {
  Box,
  Button,
  TextField,
  AppBar,
  Drawer,
  Tooltip,
  Card,
  CardMedia,
  CardContent
} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import ItemMenu from "../layouts/itemMenu";
import axios from "axios";
import { UserContext } from "../App";

export default function Header() {
  let navigate = useNavigate();
  const [user, dispatch] = React.useContext(UserContext);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [drawerSearch, setDrawerSearch] = React.useState(false);
  const [kw, setKw] = React.useState("");
  const [listBook, setListBooks] = React.useState([]);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };
  const toggleSearch = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerSearch(open);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      navigate(`/search?q=${kw}`);
    }
  };
  React.useEffect(() => {
    axios.get(`http://localhost:8080/api/book/approved-book-list`)
      .then(response => {
        setListBooks(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  })

  const logout = () => {
    dispatch({
      "type": "logout"
  })
  navigate("/")
  }

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography
            variant="caption"
            fontFamily="serif"
            fontSize="2rem"
            marginLeft="12px"
            onClick={(e) => navigate("/")}
          >
            Roy
          </Typography>
          {user !== null ? (
            <div style={{ marginLeft: "auto" }}>
            <Typography>{user.userName}</Typography>
            <Button color="inherit" onClick={logout}>
                Đăng xuất
              </Button></div>
          ) : (
            <div style={{ marginLeft: "auto" }}>
              <Tooltip title="Search">
                <IconButton onClick={toggleSearch(true)}>
                  <SearchIcon />
                </IconButton>
              </Tooltip>
              <Button color="inherit" onClick={(e) => navigate("/register")}>
                Đăng Ký
              </Button>
              <Button color="inherit" onClick={(e) => navigate("/login")}>
                Đăng Nhập
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 240, marginTop: 4 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <ItemMenu />
        </Box>
      </Drawer>

      <Drawer anchor="top" open={drawerSearch} onClose={toggleSearch(false)}>
        <Box maxWidth="sm">
          <TextField
            placeholder="Nhập từ khóa..."
            sx={{ flex: "1 0 auto" }}
            fullWidth
            value={kw}
            onChange={(e) => setKw(e.target.value)}
            onKeyPress={handleKeyPress}
            height="30px"
          />

          <Box>
            {listBook
              .filter((item) => {
                return kw.toLowerCase() === ""
                  ? ""
                  : item.title.toLowerCase().includes(kw.toLowerCase()) ||
                      item.author.toLowerCase().includes(kw.toLowerCase());
              })
              .map((item) => (
                <Card
                  sx={{ display: "flex", marginTop: "12px" }}
                  key={item.id}
                  onClick={(e) => navigate(`/book/${item.id}`)}
                >
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardMedia
                      component="img"
                      sx={{ width: 150, height: 180 }}
                      image={`${item.coverImg}`}
                      alt={item.nameBook}
                    />
                  </Box>
                  <Box>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography component="div" variant="h5">
                        {item.nameBook}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                      >
                        {item.user.userName}
                      </Typography>
                    </CardContent>
                  </Box>
                </Card>
              ))}
          </Box>
        </Box>
      </Drawer>
    </div>
  );
}
