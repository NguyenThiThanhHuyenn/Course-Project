import React, { useState } from "react";
import { Container, Typography, Button, FormControlLabel, Radio, RadioGroup, FormControl } from "@mui/material";
import BookForm from "../layouts/BookForm";
import AudioForm from "../layouts/AudioForm";

export default function CreateBook() {
  const [bookType, setBookType] = useState("book"); // State để theo dõi loại sách (book hoặc audio)
  const [showForm, setShowForm] = useState(false); // State để kiểm soát việc hiển thị form

  // Xử lý sự kiện khi người dùng thay đổi loại sách
  const handleBookTypeChange = (event) => {
    setBookType(event.target.value);
  };

  // Xử lý sự kiện khi người dùng xác nhận lựa chọn
  const handleConfirm = () => {
    setShowForm(true); // Hiển thị form khi bấm nút "Xác nhận"
  };
  
  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Chọn loại sách bạn muốn đăng:
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="bookType"
          name="bookType"
          value={bookType}
          onChange={handleBookTypeChange}
        >
          <FormControlLabel value="book" control={<Radio />} label="Sách thường" />
          <FormControlLabel value="audio" control={<Radio />} label="Audiobook" />
        </RadioGroup>
      </FormControl>
      <Button onClick={handleConfirm}>Xác nhận</Button>

      {/* Hiển thị form tương ứng dựa trên giá trị của bookType và showForm */}
      {showForm && (
        <div>
          {bookType === "book" && <BookForm />}
          {bookType === "audio" && <AudioForm />}
        </div>
      )}
    </Container>
  );
}
