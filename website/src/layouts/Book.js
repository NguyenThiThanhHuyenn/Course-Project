import { Box, IconButton, Tooltip } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CreateIcon from "@mui/icons-material/Create";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router";

export default function Book({ value}) {

  let navigate = useNavigate();

  return (
    <Card
      sx={{ display: "flex", marginTop: "12px" }}
      key={value.id}
      // onClick={onImageClick}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardMedia
          component="img"
          sx={{ width: 150, height: 180 }}
          image={`${value.coverImg}?w=248&fit=crop&auto=format`}
          alt={value.nameBook}
        />
      </Box>
      <Box>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {value.nameBook}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {value.user.userName}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {value.listGenre.map((i) => (
              <Typography marginRight={2}>{i.nameOfGenre}</Typography>
            ))}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <Typography color="white" component="button" bgcolor="red">
            Đã duyệt
          </Typography>
          <Tooltip title="Thêm chương mới">
            <IconButton aria-label="new" onClick={(e) => navigate(`${value}/new`)}>
              <AddIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Sửa thông tin truyện">
            <IconButton aria-label="create">
              <CreateIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Xóa truyện">
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Box>
    </Card>
  );
}
