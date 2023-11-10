import { ListItem, Typography, ListItemText, Divider } from "@mui/material";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Chapter({ book, chapter }) {

  // const [chapter, setChapter] = React.useState()
  
  let navigate = useNavigate();
  // React.useEffect(() => {
  //   axios.get(`http://localhost:8080/api/chapter/${chapter.id}/of/${book.id}`)
  //     .then(response => {
  //       setChapter(response.data)
  //     })
  //     .catch(error => {
  //       console.error('Error fetching genres:', error);
  //     });
  // }, []);

  return (
    <>
      <ListItem
        alignItems="flex-start"
        key={chapter.id}
        onClick={(e) => navigate(`${book.id}/chapter/${chapter.id}`)}
      >
        <Typography variant="caption" margin="16px">
          Chương 
        </Typography>
        <ListItemText
          marginLeft="16px"
          primary= {chapter.chapterName}
          
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
}
