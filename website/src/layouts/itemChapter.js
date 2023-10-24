import { ListItem, Typography, ListItemText, Divider } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Chapter({ chapter, bookId }) {
  let navigate = useNavigate();
  return (
    <>
      <ListItem
        alignItems="flex-start"
        key={chapter.id}
        onClick={(e) => navigate(`${bookId}/chapter/${chapter.id}`)}
      >
        <Typography variant="caption" margin="16px">
          Chương 
        </Typography>
        <ListItemText
          marginLeft="16px"
          primary={chapter}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
}
