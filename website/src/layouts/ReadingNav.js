import * as React from "react";
import Stack from "@mui/material/Stack";
import { IconButton, TextField, Autocomplete, Container } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import film from "../common/film";
import { useNavigate } from "react-router-dom";

export default function ReadingNav() {
  let navigate = useNavigate();
  const defaultProps = {
    options: film,
    getOptionLabel: (option) => option.title
  };
  return (
    <Container>
      <Stack direction="row" maxWidth="300px" background="white">
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
          {...defaultProps}
          id="disable-clearable"
          disableClearable
          fullWidth
          renderInput={(params) => (
            <TextField
              {...params}
              label="Chương 1: Nghịch lý Zeno"
              variant="standard"
            />
          )}
        />
        <IconButton type="button" color="primary" aria-label="next">
          <ArrowRightIcon />
        </IconButton>
      </Stack>
    </Container>
  );
}
