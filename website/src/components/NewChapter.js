import { Button, Container, TextField, Typography } from "@mui/material";
import axios from "axios";
import * as React from "react";

export default function NewChapter ({value}) {
    const [chapters, setChapters] = React.useState([]);
    const [chapterName, setChapterName] = React.useState("");
    const [chapterContent, setChapterContent] = React.useState("");

    const Post = (e) => {
      e.preventDefault();

      const process = async () => {
        try{
          let res = await axios.post(`http://localhost:8080/api/chapter/${value}`, {
            chapterName: chapterName,
            content : chapterContent
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


    return (
        <Container>
          <Typography>
              Thêm thông tin chương
          </Typography>
           
          <TextField variant="standard" value={chapterName} onChange={(e) => setChapterName(e.target.value)} label="Tên chương mới" />
          <TextField multiline rows="4" variant="standard" value={chapterContent} onChange={(e) => setChapterContent(e.target.value)} label="Nội dung chương" />
            <Button onClick={Post}>
                Lưu
            </Button>
        </Container>
    )
}
    