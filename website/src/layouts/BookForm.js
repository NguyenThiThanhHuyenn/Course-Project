import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Typography, Button, FormControl, Select, MenuItem, InputLabel, Chip, TextField, Box, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AddIcon from '@mui/icons-material/Add';


const useStyles = makeStyles(() => ({
  coverImagePreview: {
    maxHeight: "200px",
    maxWidth: "200px",
    marginBottom: "10px",
  },
  

}));

export default function BookForm() {
  const classes = useStyles();

  const [bookName, setBookName] = useState(""); // Tên sách
  const [selectedGenres, setSelectedGenres] = useState([]); // Thể loại sách được chọn
  const [coverImage, setCoverImage] = useState(""); // Link ảnh bìa sách
  const [describeInfo, setDescribeInfo] = useState(""); // Thông tin mô tả sách
  const [availableGenres, setAvailableGenres] = useState([]); // Danh sách thể loại có sẵn
  const placeholderImageUrl = "https://rgb.vn/wp-content/uploads/2016/09/r1.png";
  const [chapters, setChapters] = useState([]);
  const [newChapterTitle, setNewChapterTitle] = useState("");
  const [newChapterContent, setNewChapterContent] = useState("");
  const [isAddingChapter, setIsAddingChapter] = useState(false); // Trạng thái để kiểm tra việc thêm chương mới

  // Xử lý sự kiện khi người dùng ấn nút "Thêm chương"
  const handleAddChapter = () => {
    setIsAddingChapter(true); // Đặt trạng thái để cho biết đang thêm chương mới
  };

  // Xử lý sự kiện khi người dùng ấn nút "Lưu"
  const handleSaveChapter = () => {
    if (newChapterTitle && newChapterContent) {
      const newChapter = {
        title: newChapterTitle,
        content: newChapterContent,
      };

      setChapters([...chapters, newChapter]);
      setNewChapterTitle("");
      setNewChapterContent("");
      setIsAddingChapter(false); // Đặt trạng thái để cho biết không còn thêm chương mới nữa
    }
  };

  // Xử lý sự kiện khi người dùng thay đổi tên sách
  const handleBookNameChange = (event) => {
    setBookName(event.target.value);
  };

  // Xử lý sự kiện khi người dùng thay đổi thể loại sách
  const handleGenreChange = (event) => {
    setSelectedGenres(event.target.value);
  };

  // Xử lý sự kiện khi người dùng thay đổi link ảnh bìa sách
  const handleCoverImageChange = (event) => {
    const file = event.target.files[0];
  
    if (file) {
      if (file.type.startsWith("image/")) {
        // Kiểm tra xem tệp là một hình ảnh hợp lệ (kiểm tra kiểu MIME)
        const reader = new FileReader();
        reader.onload = () => {
          setCoverImage(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        // Hiển thị thông báo lỗi nếu tệp không hợp lệ
        console.error("Invalid image file selected");
      }
    } else {
      // Xử lý khi không có tệp nào được chọn (có thể bỏ qua hoặc hiển thị thông báo)
      console.log("No file selected");
    }
  };
  

  // Xử lý sự kiện khi người dùng thay đổi thông tin mô tả sách
  const handleDescribeInfoChange = (event) => {
    setDescribeInfo(event.target.value);
  };

  // Xử lý sự kiện khi người dùng xác nhận đăng sách
  const handleConfirm = () => {
    // Thực hiện xử lý lưu thông tin sách vào cơ sở dữ liệu
    // Ví dụ: gửi dữ liệu lên API hoặc cơ sở dữ liệu

    // Sau khi lưu xong, bạn có thể chuyển đến trang khác, ví dụ: trang danh sách sách
    // navigate("/book-list");
  };

  useEffect(() => {
    axios.get('http://localhost:8080/api/genre')
      .then(response => {
        // Xử lý dữ liệu response ở đây
        const genres = response.data;
        console.log(genres); // Log danh sách thể loại ra console
        setAvailableGenres(genres);
      })
      .catch(error => {
        console.error('Error fetching genres:', error);
      });
  }, []);

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Đăng sách
      </Typography>
      <TextField label="Tên sách" fullWidth value={bookName} onChange={handleBookNameChange} />

      <FormControl fullWidth >
        <InputLabel>Thể loại sách</InputLabel>
        <Select
          multiple
          value={selectedGenres}
          onChange={handleGenreChange}
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
      </FormControl>

      {/* Trường để người dùng chọn tệp hình ảnh từ máy tính */}
      <input
        type="file"
        accept="image/*" // Chỉ cho phép chọn các tệp hình ảnh
        onChange={handleCoverImageChange}
      />

      {/* Hiển thị tên tệp đã chọn (nếu có) */}
      {coverImage && (
        <Typography variant="body2">
          Tệp đã chọn: {coverImage.name}
        </Typography>
      )}

      {/* Hiển thị trước ảnh bìa sách */}
      <img 
          src={coverImage || placeholderImageUrl} 
          alt="Mô tả ảnh bìa sách" 
          className={classes.coverImagePreview} 
      />


      <TextField label="Thông tin mô tả" fullWidth multiline rows={4} value={describeInfo} onChange={handleDescribeInfoChange} />

      {isAddingChapter ? ( // Nếu đang thêm chương mới, hiển thị các trường nhập liệu và nút "Lưu"
        <>
          <TextField
            label="Tiêu đề chương mới"
            fullWidth
            value={newChapterTitle}
            onChange={(e) => setNewChapterTitle(e.target.value)}
          />

          <TextField
            label="Nội dung chương mới"
            fullWidth
            multiline
            rows={4}
            value={newChapterContent}
            onChange={(e) => setNewChapterContent(e.target.value)}
          />

          <Button
            variant="contained"
            color="primary"
            onClick={handleSaveChapter}
          >
            Lưu
          </Button>
        </>
      ) : (
        <Box display="flex" alignItems="center">
  <Typography variant="h5" >
    Thêm chương
  </Typography>

  <IconButton onClick={handleAddChapter}>
    <AddIcon
      fontSize="large"
      color="primary"
    />
  </IconButton>
</Box>
      )}



      {chapters.map((chapter, index) => (
        <div key={index}>
          <Typography variant="h6">{chapter.title}</Typography>
          {/* Hiển thị tên chương */}
        </div>
      ))}

      {/* Nút Xác nhận */}
      <Box mt={2}>
        <Button variant="contained" color="primary" onClick={handleConfirm}>
          Đăng
        </Button>
      </Box>
    </Container>
  );
}
