import * as React from "react";
import axios from "axios";
import {
  Container,
  TextField,
  Typography,
  Box,
  Paper,
  IconButton,
  Stack
} from "@mui/material";
import NavBox from "./NavBox";
import SendIcon from "@mui/icons-material/Send";
import Comment from "./Comment";
import { useParams } from "react-router-dom";
import { UserContext } from "../App";

export default function Reading() {

  const regex = /\r?\n/;

  const { bookId, chapterId } = useParams();

  const [ chapter, setChapter] = React.useState();
  const [listComments, setListComments] = React.useState([]);
  const [newComment, setNewComment] = React.useState("");
  const [user,] = React.useContext(UserContext);

  React.useEffect(() => {
    axios.get(`http://localhost:8080/api/chapter/${chapterId}/of/${bookId}`)
      .then(response => {
        console.log(response.data);
        setChapter(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
      axios.get(`http://localhost:8080/api/chapter/${chapterId}/comments`)
      .then(response => {
        setListComments(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    
  }, [chapterId, bookId]);

  const addComment = (e) => {
    e.preventDefault();

    const process = async () => {
      try{
        let res = await axios.post(`http://localhost:8080/api/comment/${user.id}/comment/${chapterId}`, {
          commentText: newComment
      });
      console.log(res.data);
      
    }
        catch(ex){
            console.error( ex);
        };
    }
    process();
  }
  
  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography textAlign="center" fontSize="2rem">
        {chapter.chapterName}
      </Typography>
      <Container maxWidth="lg">
        {chapter.content.split(regex).map((i) => (
          <p>{i}</p>
        ))}
      </Container>
      <Paper
        component="form"
        sx={{
          p: "2px 8px",
          display: "flex",
          alignItems: "center",
          marginTop: 3,
          marginBottom: 6,
          borderRadius: 3
        }}
      >
        <TextField
          placeholder="Viết bình luận tại đây..."
          fullWidth
          variant="standard"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <IconButton onClick={addComment}>
          <SendIcon />
        </IconButton>
      </Paper>
      <Box position={"sticky"}>
        <Stack background="white" spacing={2}>
          {listComments.map((item) => (
            <Comment value={item} />
          ))}
        </Stack>
      </Box>
    </Container>
  );
}
