import * as React from "react";
import {useNavigate} from "react-router-dom";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

export default function Image({ value }) {

  let navigate = useNavigate();
  const handleDetail = () => {
    return navigate(`/book/${value.id}`);
  };
  
  return (
    <ImageListItem key={value.id} onClick={handleDetail}>
      <img
        srcSet={`${value.coverImg}?w=248&fit=crop&auto=format&dpr=2 2x`}
        src={`${value.coverImg}?w=248&fit=crop&auto=format`}
        alt={value.nameBook}
        height="400px"
        width="200px"
      />
      <ImageListItemBar
        title={value.nameBook}
        actionIcon={
          <IconButton sx={{ color: "rgba(255, 255, 255, 0.54)" }}>
            <InfoIcon />
          </IconButton>
        }
      />
    </ImageListItem>
  );
}
