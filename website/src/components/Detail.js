import * as React from "react";
import { Container, IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import Visibility from "@mui/icons-material/Visibility";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import chapter from "../common/chapter";

export default function Detail() {
  return (
    <Container maxWidth="sm">
      <Card sx={{ display: "flex", marginTop: "100px" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardMedia
            component="img"
            sx={{ width: 150, height: 200 }}
            image="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
            alt="Live from space album cover"
          />
        </Box>
        <Box>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              Name book
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Author
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
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton aria-label="seen">
              <Visibility />
            </IconButton>
          </CardActions>
        </Box>
      </Card>

      <Container maxWidth="lg">
        <List
          sx={{
            width: "100%",
            height: "400px",
            bgcolor: "background.paper",
            overflow: "auto",
            marginTop: "24px"
          }}
          subheader="Danh sach chuong"
        >
          {chapter.map((item) => (
            <>
              <ListItem alignItems="flex-start" key={item.id}>
                <Typography variant="caption" margin="16px">
                  Chuong: {item.id}
                </Typography>
                <ListItemText
                  marginLeft="16px"
                  primary={item.name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        time
                      </Typography>
                      {" — "}
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        seen
                      </Typography>
                      {" — "}
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        comments
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
          ))}
        </List>
      </Container>
    </Container>
  );
}
