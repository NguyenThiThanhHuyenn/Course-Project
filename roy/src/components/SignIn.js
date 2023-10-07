import * as React from "react";
import { useFormik } from "formik";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Button, Typography } from "@mui/material";

import registrationSchema from "../common/RegistrationSchema";

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: registrationSchema,
    onSubmit: (values, action) => {
      alert(
        "Form is valid now!. You can make a call to API inside onSubmit function"
      );
    }
  });

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="stretch"
      spacing={2}
      margin={12}
      maxWidth={500}
    >
      <Typography align="center" variant="h4">
        Sign In
      </Typography>
      <FormControl variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          label="Email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.email && formik.touched.email ? (
          <small className="text-danger mt-1">{formik.errors.email}</small>
        ) : null}
      </FormControl>
      <FormControl variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
        {formik.errors.password && formik.touched.password && (
          <small className="text-danger mt-1">{formik.errors.password}</small>
        )}
      </FormControl>
      <FormControlLabel
        required
        control={<Switch />}
        label="Remember password"
      />
      <Button variant="contained" onClick={formik.handleSubmit}>
        Sign In
      </Button>
    </Stack>
  );
}
