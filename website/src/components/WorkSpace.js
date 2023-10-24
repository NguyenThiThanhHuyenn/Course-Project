import * as React from "react";
import axios from "axios";
import Book from "../layouts/Book";
import { Container, List, Typography, Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

function Workspace() {

  const [user, ] = React.useContext(UserContext)
  const [listBook, setListBook] = React.useState([]);
  let navigate = useNavigate();
  React.useEffect(() => {
    axios.get(`http://localhost:8080/api/user/${user.id}/book`)
      .then(response => {
        const data = response.data;
        setListBook(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [user.id]);

  
  return (
    <Container>
      <Box flex >
        <Typography
          variant="h4"
          fontFamily="serif"
          fontWeight="bold"
          marginTop="16px"
        >
          Truyện đã đăng
        </Typography>
        <Button
          sx={{marginLeft: 3}}
          variant="contained"
          startIcon={<AddIcon />}
          onClick={(e) => navigate("/new")}
        >
          Thêm truyện mới
        </Button>
      </Box>
      <List>
        {listBook.map((item) => (
          <Book value={item} />
        ))}
      </List>
    </Container>
  );
}
export default Workspace;
