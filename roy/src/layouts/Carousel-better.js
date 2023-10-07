import React from "react";
import Carousel from "better-react-carousel";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import data from "../common/data";

export default function Gallery() {
  return (
    <>
      <h2>News</h2>
      <Carousel cols={4} rows={2} gap={10}>
        {data.map((item) => (
          <Carousel.Item>
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                subtitle={item.author}
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${item.title}`}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}
