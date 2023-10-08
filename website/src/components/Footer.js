import { Typography, Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        marginTop: "auto", // Đặt margin-top là "auto" để đẩy footer xuống dưới cùng của trang
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
