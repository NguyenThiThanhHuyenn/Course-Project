import React from "react";
import Carousel from "better-react-carousel";
import Book from "../layouts/CardBook";
import { Container } from "@mui/material";

export default function Gallery({value}) {
  
  return (
    <Container maxWidth="fixed">
      <Carousel cols={4} rows={1} gap={10}>
          <Carousel.Item key={value.id}>
            <Book value={value} />
          </Carousel.Item>
      </Carousel>
    </Container>
  );
}
