import * as React from "react";
import Book from "../layouts/Book";
import data from "../common/data";
import { Container, List, Typography, Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

function Workspace() {
  let navigate = useNavigate();

  const addNewWork = () => {
    navigate("/workspace/new");
  };
  return (
    <Container>
      <Box flex>
        <Typography
          variant="h4"
          fontFamily="serif"
          fontWeight="bold"
          marginTop="16px"
        >
          Truyen da dang
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={addNewWork}
        >
          Truyen moi
        </Button>
      </Box>
      <List>
        {data.map((item) => (
          <Book value={item} />
        ))}
      </List>
    </Container>
  );
}
export default Workspace;
