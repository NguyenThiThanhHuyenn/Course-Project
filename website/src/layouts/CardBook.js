import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function Book({value}) {
  let navigate = useNavigate();
  const handleDetail = () => {
    return navigate(`/book/${value.id}`);
  };
  return (
    <Card sx={{ Width: 500 }} onClick={handleDetail}>
      <CardMedia
        sx={{ height: 200 }}
        image={`${value.coverImg}?w=248&fit=crop&auto=format`}
      />
      <CardContent>
        <Typography fontSize="0.8rem"
          >
          {value.nameBook}
        </Typography>
      </CardContent>
    </Card>
  );
}
