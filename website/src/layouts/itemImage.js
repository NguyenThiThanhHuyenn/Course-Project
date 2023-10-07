import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

export default function Image({ value, onImageClick }) {
  return (
    <ImageListItem key={value.id} onClick={onImageClick}>
      <img
        srcSet={`${value.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
        src={`${value.img}?w=248&fit=crop&auto=format`}
        alt={value.title}
        loading="lazy"
        height="200px"
        width="200px"
      />
      <ImageListItemBar
        title={value.title}
        subtitle={value.author}
        actionIcon={
          <IconButton
            sx={{ color: "rgba(255, 255, 255, 0.54)" }}
            aria-label={`info about ${value.title}`}
          >
            <InfoIcon />
          </IconButton>
        }
      />
    </ImageListItem>
  );
}
