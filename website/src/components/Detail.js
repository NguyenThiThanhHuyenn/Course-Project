import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function Detail() {
  return (
    <Container maxWidth="sm">
      <Card sx={{ display: "flex" , marginTop: "80px"}}>
      <CardMedia
            component="img"
            sx={{ width: 180, height: 200}}
            image="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
            alt="Live from space album cover"
          />
        <Box sx={{ display: "flex", flexDirection: "column", margin:"12px", fontStyle:"sans-serif"  }}>
        <CardContent sx={{ flex: "1 0 auto"}}>
          <Typography component="div" variant="h4" fontWeight="bold">
            Name
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            component="div"
            fontWeight="bold"
          >
            Tác giả
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            component="div"
            fontWeight="bold"
          >
            Thể loại:
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="luot xem">
          <VisibilityIcon />
        </IconButton>
      </CardActions>
        </Box>
      </Card>
    </Container>
  );
}
