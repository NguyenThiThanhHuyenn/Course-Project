import { Box, IconButton, Tooltip } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CreateIcon from "@mui/icons-material/Create";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Book({ value, onImageClick }) {
  return (
    <Card
      sx={{ display: "flex", marginTop: "12px" }}
      key={value.id}
      onClick={onImageClick}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardMedia
          component="img"
          sx={{ width: 150, height: 180 }}
          image={`${value.img}?w=248&fit=crop&auto=format`}
          alt={value.title}
        />
      </Box>
      <Box>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {value.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {value.author}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Genres
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Tooltip title="Them chuong moi">
            <IconButton aria-label="new">
              <AddIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Sua">
            <IconButton aria-label="create">
              <CreateIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Delete">
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Box>
    </Card>
  );
}
