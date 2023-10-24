import * as React from "react";
import axios from "axios";
import cookie from "react-cookies";
import { UserContext } from "../App";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Stack from "@mui/material/Stack";
import { Box, Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";

export default function Login() {
  const [user, dispatch] = React.useContext(UserContext);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  let navigate = useNavigate();

  const login = (evt) => {
    evt.preventDefault();
    
    const process = async () => {
      try{
        let res = await axios.post(`http://localhost:8080/api/user/login`, {
          email: email,
          password: password,
      });
      
        let {data} = await axios.get(`http://localhost:8080/api/user/find-by-email/${email}`);
        cookie.save("user", data);
          dispatch({
            "type": "login",
            "payload": data
        });
      }
        catch(ex){
            console.error( ex);
        };
    }
    process();
  };

  if(user !== null) {
    return navigate(`/`)
  }
  

  return (
    <Box sx={{ flexGrow: 1, marginTop: 8 }}>
      <Grid container spacing={2}>
        <Grid md={3} xs={0} />
        <Grid md={6} xs={12}>
          <Stack spacing={2} marginTop="60px">
            <Typography align="center" variant="h4">
              Đăng nhập
            </Typography>
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Email
              </InputLabel>
              <OutlinedInput
                label="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Mật khẩu
              </InputLabel>
              <OutlinedInput
              
                type={"password"}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label="Mật khẩu"
              />
            </FormControl>
            <Button variant="contained" type="submit" onClick={login}>
            Đăng nhập
            </Button>

            <Typography>
            Chưa có tài khoản? <Link to="/register">Đăng ký</Link>
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
