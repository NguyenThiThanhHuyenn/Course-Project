import {
    Box,
    Divider,
    TextField,
    Typography,
    Select,
    Snackbar,
    Stack, InputLabel, Chip, MenuItem
  } from "@mui/material";
  import  React, { useEffect, useState } from "react";
  import Button from "@mui/material/Button";
  import { useUploadFile } from "dex-react-file-upload";
  import axios from "axios";
  
  export default function NewsWork() {
      const [bookName, setBookName] = useState(""); // Tên sách
    const [selectedGenres, setSelectedGenres] = useState([]); // Thể loại sách được chọn
    // const [coverImage, setCoverImage] = useState(""); // Link ảnh bìa sách
    const [describeInfo, setDescribeInfo] = useState(""); // Thông tin mô tả sách
    const [availableGenres, setAvailableGenres] = useState([]); // Danh sách thể loại có sẵn
    const [open, setOpen] = React.useState(false);
  
    const handleClose = (event, reason) => {
      if (reason === "clickaway") {
        return;
      }
  
      setOpen(false);
    };
    const { handleChange, fileData, handleOnDrop } = useUploadFile({
      handleError(props) {
        console.log(props);
      },
      multiple: false,
      maxfileSize: 1500 //in kb,
    });
    
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
      evt.preventDefault();
  
      const process = async () => {
        try{
          let res = await axios.post(`http://localhost:8080/api/user/register`, {
            nameBook: bookName,
            describe: describeInfo,
            listChapter: selectedGenres,
        });
        console.log(res.data);
        if(res.status===200) {
          alert("tao thanh cong")
        }
      }
          catch(ex){
              console.error( ex);
          };
      }
      process();
    }
  
    return (
      <>
        <Typography marginTop="24px" variant="h4" fontFamily="serif">
          Thông tin truyện mới
        </Typography>
  
        <div
          style={{
            marginTop: "2rem",
            border: "1px dashed black",
            padding: "30px"
          }}
          data-type="file4"
          onDrop={handleOnDrop}
          onDragOver={(event) => event.preventDefault()}
        >
          {fileData?.file4 ? (
            <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
              {fileData?.file4?.map((item, idx) => (
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 10 }}
                  key={idx}
                >
                  <img src={item?.blob} width={200} height={200} alt={item.name} />
                  
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          ) : (
            <p
              style={{ padding: "10rem", textAlign: "center" }}
              data-type="file4"
            >
              <input name="file4" type="file" onChange={handleChange} />
              Kéo thả ảnh vào đây
            </p>
          )}
          {fileData?.file4 && (
            <p style={{ padding: "4rem", textAlign: "center" }} data-type="file4">
              <input name="file4" type="file" onChange={handleChange} />
              Kéo thả ảnh vào đây
            </p>
          )}
        </div>
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
              onClick={(e) => handleCreate}
            >
              Cập nhật
            </Button>
          </Stack>
        </Box>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          message="Success"
          variant="success"
        />
      </>
    );
  }
  