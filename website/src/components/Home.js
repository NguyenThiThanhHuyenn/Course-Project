/* eslint-disable no-lone-blocks */
import * as React from "react";
import Images from "../layouts/Images";
// import CarouselB from "../layouts/Carousel-better";
import { Container, Typography} from "@mui/material";
import Carousel from "../layouts/Swiper";
// import Audiobook from "../pages/AudioBook";

export default function Home() {
  
  return (
    <Container maxWidth="lg" sx={{ marginTop: 3 }}>
      <Carousel />

      <Typography margin={3}>
        Tất cả truyện
      </Typography>
      <Images type="all"/>
      
      <Typography margin={3}>
        Truyện
      </Typography>
      <Images type="book" />

      <Typography margin={3}>
        Audio book
      </Typography>
      <Images type="audio"/>

    </Container>
  );
}
