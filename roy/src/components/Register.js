/* eslint-disable max-len,no-script-url,jsx-a11y/anchor-is-valid,react/no-unescaped-entities */
import React from "react";
import Color from "color";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Hidden from "@material-ui/core/Hidden";

const Register = () => (
  <Grid className={"DL01-root"} container>
    <Hidden smUp>
      <div className={"DL01-mobileCover"}>
        <div className={"DL01-cover"} />
      </div>
    </Hidden>
    <Hidden only={"xs"}>
      <Grid
        container
        alignItems={"center"}
        item
        sm={6}
        md={7}
        className={"DL01-GridItem -banner"}
      >
        <div className={"DL01-cover"} />
      </Grid>
    </Hidden>
    <Grid
      container
      justify={"center"}
      alignItems={"center"}
      direction={"column"}
      item
      xs={12}
      sm={6}
      md={5}
      className={"DL01-GridItem -form"}
    >
      <form className={"DL01-form"}>
        <img
          alt={"logo"}
          className={"DL01-logo"}
          src={
            "https://cdn.dribbble.com/users/1519999/screenshots/14132027/media/57f7821d3d4275e459e86f853ba40de4.png"
          }
        />
        <TextField
          fullWidth
          label={"Email"}
          margin={"normal"}
          variant="filled"
        />
        <TextField
          fullWidth
          label={"Tên đăng nhập"}
          margin={"normal"}
          variant="filled"
        />
        <TextField
          fullWidth
          label={"Mật khẩu"}
          margin={"normal"}
          variant="filled"
        />
        <FormControl margin={"normal"} fullWidth>
          <Button fullWidth variant={"contained"} color={"primary"}>
            Đăng ký
          </Button>
        </FormControl>
        <Typography className={"DL01-signUp"}>
          Đã có tài khoản? <Link>Đăng nhập</Link>
        </Typography>
      </form>
    </Grid>
  </Grid>
);

Register.getTheme = ({ palette, breakpoints }) => {
  const gradient = `linear-gradient(49deg, ${Color(palette.primary.main)
    .darken(0.7)
    .toString()} 0%, ${Color(palette.primary.main)
    .rotate(30)
    .lighten(0.5)
    .saturate(0.7)
    .fade(0.7)
    .toString()} 100%)`;
  const cover =
    "https://cdn.dribbble.com/users/1519999/screenshots/14132027/media/57f7821d3d4275e459e86f853ba40de4.png";
  return {
    MuiGrid: {
      container: {
        "&.DL01-root": {
          minHeight: 700,
          [breakpoints.only("xs")]: {
            position: "relative",
            minHeight: 566
          },
          "& .DL01-mobileCover": {
            position: "absolute",
            zIndex: 0,
            height: 120,
            top: 0,
            width: "100%",
            background: `url(${cover})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          },
          "& .DL01-cover": {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: gradient,
            opacity: 0.7
          }
        }
      },
      item: {
        "&.DL01-GridItem.-banner": {
          textAlign: "left",
          background: `url(${cover})`,
          backgroundSize: "cover",
          position: "relative",
          "& *": {
            color: palette.common.white
          },
          "& .DL01-content": {
            position: "relative",
            zIndex: 1,
            paddingLeft: 40
          },
          "& .DL01-brand": {
            fontWeight: 900,
            letterSpacing: 1
          },
          "& .DL01-description": {
            color: "rgba(255, 255, 255, 0.45)",
            maxWidth: 240,
            fontWeight: 200
          }
        },
        "&.DL01-GridItem.-form": {
          textAlign: "center",
          [breakpoints.only("xs")]: {
            background: "#f5f5f5"
          },
          "& .DL01-form": {
            width: 343,
            [breakpoints.only("xs")]: {
              marginTop: 36,
              background: "#ffffff",
              padding: "20px 20px 32px",
              boxShadow: "0 2px 10px 0 rgba(0,0,0,0.12)",
              borderRadius: 4,
              zIndex: 1
            }
          },
          "& .DL01-logo": {
            width: 100,
            height: 100,
            objectFit: "cover",
            [breakpoints.only("xs")]: {
              width: 60,
              height: 60
            }
          },
          "& .DL01-signUp": {
            marginTop: 16
          }
        }
      }
    },
    MuiFilledInput: {
      root: {
        backgroundColor: "#f3f3f3",
        "&$focused": {
          backgroundColor: "#f0f0f0"
        }
      }
    },
    MuiButton: {
      root: {
        paddingLeft: 16,
        paddingRight: 16,
        background: gradient
      },
      label: {
        color: "#fff",
        textTransform: "none",
        fontSize: 15,
        fontWeight: 700
      },
      contained: {
        minHeight: 30,
        boxShadow: "none",
        "&$focusVisible": {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        "&$disabled": {
          boxShadow: "none"
        }
      }
    }
  };
};

export default Register;
