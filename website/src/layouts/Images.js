import * as React from "react";
import axios from "axios";
import ImageList from "@mui/material/ImageList";
import { Container } from "@mui/material";
import Book from "./CardBook";
import _ from "lodash";

const Images = ({type}) => {
  const [tempList, setTempList] = React.useState([]);
  const [list, setList] = React.useState([]);

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
  }, [tempList]);
  React.useEffect( () => {
    function setType() {
      if(type === "all") {
        setList(tempList);
      } else if(type==="audio") {
        setList( tempList.filter(i => _.some(i.listGenre, ['id',13])));
      } else {
        setList( tempList.filter(i => !_.some(i.listGenre, ['id',13])));
      }
    };
    setType();
  }, [tempList, type])
  
  // const random = _.sampleSize(listBook, 6); => trả về danh sách có 6 phần tử được lựa chọn ngẫu nhiên trong listBook
  return (
    <Container maxWidth="fixed">
      <ImageList cols={6} rowHeight={164}>
        {list.map((item) => (
          <Book key={item.id} value={item} />
        ))}
      </ImageList>
    </Container>
  );
}
export default Images;