import * as React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Container, IconButton, Tooltip } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Visibility from "@mui/icons-material/Visibility";
import List from "@mui/material/List";
import _ from "lodash";
import Chapter from "../layouts/itemChapter";

export default function Detail() {

  const { bookID } = useParams();

  const [book, setBook] = React.useState({});
  const [chapters, setChapter] = React.useState([]);


  React.useEffect(() => {
    const LoadBook = ( ) => {
      axios.get(`http://localhost:8080/api/book/${bookID}`)
      .then(response => {
        console.log(response.data)
        setBook(response.data);
      })
      .catch(error => {
        console.error('Error', error);
      });
    }
    const LoadChapter = () => {
      axios.get(`http://localhost:8080/api/book/${bookID}/chapter`)
      .then(response => {
        const b = response.data;
        setChapter(b);
      })
      .catch(error => {
        console.error('Error', error);
      });
    }
   LoadBook();
   LoadChapter();
  }, [bookID]);

  // const addComment = () => {
  //   const process = async () => {
  //     let 
  //   }
  // }
  return (
    <Container maxWidth="sm">
      <Card sx={{ display: "flex", marginTop: "100px" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardMedia
            component="img"
            sx={{ width: 150, height: 200 }}
            image={`${book.coverImg}?w=248&fit=crop&auto=format`}
            alt=""
          />
        </Box>
        <Box>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {book.nameBook}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {book.userName}
            </Typography>
            {/* <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {book.listGenre.map((item) => (
                <Typography key={item.id} marginRight={4}>{item.nameOfGenre}</Typography>
              ))}
            </Typography> */}
          </CardContent>
          <CardActions disableSpacing>
          <Tooltip title="Thêm vào truyện yêu thích">
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            </Tooltip>
            <Tooltip title="Số lượt xem">
            <IconButton aria-label="seen">
              <Visibility />
              <Typography variant="subtitle1">{book.viewCount}</Typography>
            </IconButton>
            </Tooltip>
          </CardActions>
        </Box>
      </Card>

      <Box maxWidth="lg" marginTop="18px">
        <Typography variant="caption" fontSize="1rem" fontWeight="bold">
          Mô tả
        </Typography>
        <Typography>
          {book.describe}
        </Typography>
      </Box>

      <Container maxWidth="lg">
        <List
          sx={{
            width: "100%",
            height: "400px",
            bgcolor: "background.paper",
            overflow: "auto",
            marginTop: "24px"
          }}
          subheader="Danh sách chương"
        >
        {chapters !== null ? <>
          {chapters.map((item) => (
            <Chapter value={[item, bookID]} />
          ))}
        </> : <Typography>Truyện chưa có chương nào</Typography>}
        </List>
      </Container>
    </Container>
  );
}
