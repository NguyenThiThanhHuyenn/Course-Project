import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import {
  Box,
  Button,
  Container,
  FormControl,
  Input,
  InputLabel,
  Stack,
  InputAdornment,
  ImageList, ListItem,
  ListItemAvatar, Avatar,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Book from "../layouts/itemImage";
import { UserContext } from "../App";
import axios from "axios";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

export default function VerticalTabs() {
  const [user, ] = React.useContext(UserContext);
  const [value, setValue] = React.useState(0);
  const [newUsername, setUsername] = React.useState("");
  const [newEmail, setEmail] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [newRePassword, setRePassword] = React.useState("");
  const [listFavBooks, setListFavBooks] = React.useState([]);
  const [listBooks, setListBooks] = React.useState([]);
  const [listHistoryBooks, setListHistoryBooks] = React.useState([]);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {setShowPassword((show) => !show)};

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    axios.get(`http://localhost:8080/api/user/${user.id}/favorite-book`)
      .then(response => {
        const b = response.data;
        console.log(b); 
        setListFavBooks(b);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    axios.get(`http://localhost:8080/api/user/${user.id}/book`)
      .then(response => {
        const b = response.data;
        console.log(b);
        setListBooks(b);
      })
      .catch(error => {
        console.error('Error:', error);
      });
      axios.get(`http://localhost:8080/api/user/${user.id}/get-viewed-books`)
      .then(response => {
        const b = response.data;
        console.log(b);
        setListHistoryBooks(b);
      })
      .catch(error => {
        console.error('Error:', error);
      });
      
  }, [user.id]);

  const handleUpdate = (evt) => {
    evt.preventDefault();

        const process = async () => {
          try{
            let res = await axios.put(`http://localhost:8080/api/user/${user.id}`, {
              userName: newUsername,
              email: newEmail,
              password: newPassword,
              confirmPassword: newRePassword
          });
          console.log(res.data);
          if(res.status ===200) {
            alert("Cập nhật thành công")
          }
        }
            catch(ex){
                console.error( ex);
            };
        }
        process();
  };


  return (
    <Container>
    <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          margin: 6
        }}
      >
        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ width: 100, height: 100 }} />
          </ListItemAvatar>
          <Typography
            marginTop="24px"
            marginLeft="12px"
            variant="caption"
            fontSize="2rem"
            fontFamily="serif"
          >
            {user.userName}
          </Typography>
        </ListItem>
      </Box>
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        margin: 4
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="Danh sách truyện yêu thích" {...a11yProps(0)} />
        <Tab label="Truyện đã viết" {...a11yProps(1)} />
        <Tab label="Truyện đã đọc" {...a11yProps(2)} />
        <Tab label="Hồ sơ cá nhân" {...a11yProps(3)} />
      </Tabs>
      <Box
        sx={{
          boxShadow: 1,
          minWidth: 300,
          width: 600,
          height: 500,
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#101010" : "#fff",
          color: (theme) =>
            theme.palette.mode === "dark" ? "grey.300" : "grey.800",
          marginLeft: 2,
          borderRadius: 2
        }}
      >
        <TabPanel value={value} index={0}>
        <ImageList cols={6} rowHeight={164}>
        {listFavBooks !== null ? (
          listFavBooks.map((item) => (
            <Book value={item} key={item.id} />
          ))
        ) : (
          <Typography>Không có truyện ưa thích</Typography>
        )}
            </ImageList>
        </TabPanel>
        <TabPanel value={value} index={1}>
        <ImageList cols={6} rowHeight={164}>
        {listBooks !== null ? (
          listBooks.map((item) => (
            <Book value={item} key={item.id} />
          ))
        ) : (
          <Typography>Bạn chưa viết truyện nào</Typography>
        )}
            </ImageList>
        </TabPanel>
        <TabPanel value={value} index={2}>
        <ImageList cols={6} rowHeight={164}>
        {listHistoryBooks !== null ? (
          listHistoryBooks.map((item) => (
            <Book value={item} key={item.id} />
          ))
        ) : (
          <Typography>Bạn chưa đọc truyện nào</Typography>
        )}
            </ImageList>
        </TabPanel>
        <TabPanel value={value} index={3}>
        <Stack spacing={2}>
              <FormControl variant="standard">
                <InputLabel>{user.email}</InputLabel>
                <Input type="text" defaultValue={user.email}
                value={newEmail} onChange={(e) => setEmail(e.target.value)} />
              </FormControl>
              <FormControl variant="standard">
                <InputLabel>{user.userName}</InputLabel>
                <Input type="text"
                  value={newUsername} onChange={(e) => setUsername(e.target.value)}
                />
              </FormControl>
              <FormControl variant="standard">
                <InputLabel htmlFor="input-with-icon-adornment">
                Mật khẩu
                </InputLabel>
                <Input
                  type={showPassword ? "text" : "password"}
                  defaultValue={user.password}
                  value={newPassword} onChange={(e) => setNewPassword(e.target.value)}
                  endAdornment={
                    <InputAdornment
                      position="start"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl variant="standard">
                <InputLabel htmlFor="input-with-icon-adornment">
                Xác nhận mật khẩu
                </InputLabel>
                <Input
                  type={showPassword ? "text" : "password"}
                  defaultValue={user.password}
                  value={newRePassword} onChange={(e) => setRePassword(e.target.value)}
                  endAdornment={
                    <InputAdornment
                      position="start"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Stack spacing={3} direction="row">
                <Button variant="contained" onClick={handleUpdate}>Cập nhật</Button>
                <Button variant="outlined">Hủy</Button>
              </Stack>
            </Stack>
        </TabPanel>
      </Box>
    </Box>
    </Container>
  );
}
