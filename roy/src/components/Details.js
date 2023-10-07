import { Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function Detail() {
  return (
    <Container maxWidth="sm">
      <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
            alt="Live from space album cover"
          />
        </Box>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Mac Miller
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
