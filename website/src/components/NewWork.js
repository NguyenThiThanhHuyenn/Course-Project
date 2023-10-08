import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  TextField,
  Typography,
  Autocomplete,
  CardActions
} from "@mui/material";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import data from "../common/film";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1
});

export default function NewsWork() {


  const create = () => {
    alert("success")
  };

  return (
    <Container>
      <Card sx={{ display: "flex", marginTop: "30px" }}>
        <Box
          component="span"
          sx={{
            display: "flex",
            flexDirection: "column",
            p: 2,
            border: "1px dashed grey"
          }}
        >
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
          >
            Upload file
            <VisuallyHiddenInput type="file" />
          </Button>
        </Box>
        <Box>
          <CardContent>
            <Typography variant="overline">Tieu de</Typography>
            <TextField fullWidth id="fullWidth" />
            <Divider />

            <Typography variant="overline">Mo ta</Typography>
            <TextField fullWidth id="fullWidth" multiline rows="4" />
            <Divider />
            <Typography variant="overline">The loai</Typography>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={data}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} />}
            />
          </CardContent>
          <CardActions>
            <Button variant="contained" size="large">
              Huy
            </Button>
            <Button variant="contained" size="large" onClick={create}>
              Tao
            </Button>
          </CardActions>
        </Box>
      </Card>
    </Container>
  );
}
