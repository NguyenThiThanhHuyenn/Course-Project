import * as Yup from "yup";

export const registrationSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  username: Yup.string().min(4).max(20).required("Please enter your username"),
  password: Yup.string().min(6).required("Please enter your password"),
  repassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password"), null], "Password must match")
});
