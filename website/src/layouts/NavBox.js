import * as React from "react";
import axios from "axios";
import Stack from "@mui/material/Stack";
import { IconButton, TextField, Autocomplete, Container } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useNavigate } from "react-router-dom";

export default function DirectionStack() {

    const [chapters, setChapter] = React.useState([]);


    React.useEffect(() => {
        axios.get('http://localhost:8080/api/genre')
          .then(response => {
            setChapter(response.data);
          })
          .catch(error => {
            console.error('Error fetching genres:', error);
          });
      }, []);
  let navigate = useNavigate();

  const defaultProps = {
    options: chapters,
    getOptionLabel: (option) => option.title
  };
  return (
    <Container maxWidth="sm">
      <Stack direction="row" spacing="2">
        <IconButton
          type="button"
          color="primary"
          aria-label="home"
          onClick={(e) => {
            navigate("/");
          }}
        >
          <HomeIcon />
        </IconButton>

        <IconButton type="button" color="primary" aria-label="previous">
          <ArrowLeftIcon />
        </IconButton>

        <Autocomplete
          disableClearable
          options={chapters}
          fullWidth
          placeholder="Chương "
          aria-label="Chương"
          renderInput={(params) => <TextField {...params} />}
        />

        <IconButton type="button" color="primary" aria-label="next">
          <ArrowRightIcon />
        </IconButton>

      </Stack>
    </Container>
  );
}
