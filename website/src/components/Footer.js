import { Typography, Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "100%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      }}
    >
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        position="static"
      >
        {"Copyright © "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Box>
  );
}
