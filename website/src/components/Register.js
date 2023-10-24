import * as React from "react";
import axios from "axios";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Stack from "@mui/material/Stack";
import { Button, Typography, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";

export default function Register() {
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [repassword, setRePassword] = React.useState("");


  let navigate = useNavigate();

  const register = (evt) => {
    evt.preventDefault();

        const process = async () => {
          try{
            let res = await axios.post(`http://localhost:8080/api/user/register`, {
              userName: username,
              email: email,
              password: password,
              confirmPassword: repassword,
          });
          console.log(res.data);
          if(res.status===200) {
            navigate(`/login`);
          }
        }
            catch(ex){
                console.error( ex);
            };
        }
        process();
  };
  return (
    <Box sx={{ flexGrow: 1, marginTop: 8 }}>
      <Grid container spacing={2}>
        <Grid md={3} />
        <Grid md={6} xs={12}>
          <Stack spacing={2} marginTop="60px">
            <Typography align="center" variant="h4">
            Đăng ký
            </Typography>
            {/* {err === null?"":alert(err)} */}
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Email
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                label="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Tên đăng nhập
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                label="Tên đăng nhập"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
              Xác nhận Mật khẩu
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={"password"}
                name="repassword"
                value={repassword}
                onChange={(e) => setRePassword(e.target.value)}
                label="Xác nhận mật khẩu"
              />
            </FormControl>
            <Box />
            <Button variant="contained" onClick={register}>
              Đăng ký
            </Button>

            <Typography>
              Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
