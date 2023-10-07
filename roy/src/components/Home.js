import CarouselImg from "../layouts/CarouselImg";
import Images from "../layouts/Images";
import CarouselB from "../layouts/Carousel-better";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <Container>
      <CarouselImg />
      <CarouselB />
      <Images />
    </Container>
  );
}
