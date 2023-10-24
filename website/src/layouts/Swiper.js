import React from "react";
import axios from "axios";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "./itemImage";
import { Container } from "@mui/material";
import _ from "lodash";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../css/swiper.css";


// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const MySwiper = () => {

  const [tempList, setTempList] = React.useState([]);

  React.useEffect(() => {
    const LoadBook = async () => {
      try {
        let res = await axios.get('http://localhost:8080/api/book/approved-book-list');
        if(res.data !== null) {
          setTempList(res.data);
        }
      } catch (error) {
        console.error( error);
      }
    }
    LoadBook();
  }, []);

  return (
    <Container sx={{ height: 400, marginTop: 10 }}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {tempList.map((item) => (
          <SwiperSlide>
            <Image value={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
export default MySwiper;