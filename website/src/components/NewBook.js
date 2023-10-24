import {
  Box,
  Divider,
  TextField,
  Typography,
  Select,
  Stack, InputLabel, Chip, MenuItem
} from "@mui/material";
import  React, { useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import { UserContext } from "../App";

export default function NewsWork() {
  const [user,] = useContext(UserContext)
  const [bookName, setBookName] = useState("");
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [imageCover, setImgCover] = useState("");
  const [describeInfo, setDescribeInfo] = useState("");
  const [availableGenres, setAvailableGenres] = useState([]);
  const [newBook, setNewBook] = React.useState({});

  
  useEffect(() => {
    axios.get('http://localhost:8080/api/genre')
      .then(response => {
        const genres = response.data;
        console.log(genres);
        setAvailableGenres(genres);
      })
      .catch(error => {
        console.error('Error fetching genres:', error);
      });
  }, []);

  const handleCreate = (evt) => {

    const process = async () => {
      try{
        let res = await axios.post(`http://localhost:8080/api/book/${user.id}/post-book`, {
          nameBook: bookName,
          describe: describeInfo,
          listGenre: selectedGenres,
      });
      console.log(res.data);
      if(res.status===200) {
        alert("Tạo thành công");
        setNewBook(res.data);
        postImage();
      }
    }
        catch(ex){
            console.error( ex);
        };
    }
    process();
  }

  const postImage = () => {

    const process = async () => {
      try{
        let res = await axios.post(`http://localhost:8080/api/book/${newBook.id}/post-cover-image`, {
          file: imageCover
      });
      if(res.status===200) {
        console.log(res.data);
      }
    }
        catch(ex){
            console.error( ex);
        };
    }
    process();
  }


  const handleImage = (e) => {
    const img = e.target.files[0];
    img.preview = URL.createObjectURL(img);
    setImgCover(img)
  }

  return (
    <>
      <Typography marginTop="24px" variant="h4" fontFamily="serif">
        Thông tin truyện mới
      </Typography>
      <input 
        type="file"
        accept="image/*"
        onChange={handleImage}
      />
      {imageCover && (
        <img src={imageCover.preview} alt="" width="80%" />
      )}
      <Box padding="1rem">
        <Typography variant="overline">Tên truyện</Typography>
        <TextField
          fullWidth
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
        />
        <Divider />
        <Typography variant="overline">Mô tả</Typography>
        <TextField
          fullWidth
          multiline
          rows="4"
          value={describeInfo}
          onChange={(e) => setDescribeInfo(e.target.value)}
        />
        <Divider />
        <Typography variant="overline">Thể loại</Typography>
        <InputLabel>Thể loại sách</InputLabel>
        <Select
          multiple
          value={selectedGenres}
          onChange={(e) => setSelectedGenres(e.target.value)}
          renderValue={(selected) => (
            <div>
              {selected.map((value) => {
                const genre = availableGenres.find((g) => g.nameOfGenre === value);
                if (genre) {
                  return <Chip key={genre.id} label={genre.nameOfGenre} />;
                }
                return null;
              })}
            </div>
          )}
        >
          {availableGenres.map((genre) => (
            <MenuItem key={genre.id} value={genre.nameOfGenre}>
              {genre.nameOfGenre}
            </MenuItem>
          ))}
        </Select>
        <Stack direction="row" spacing={4} margin="2rem">
          <Button variant="outlined" size="large">
            Hủy
          </Button>
          <Button
            variant="contained"
            size="large"
            onClick={handleCreate}
          >
            Tạo
          </Button>
        </Stack>
      </Box>
    </>
  );
}
