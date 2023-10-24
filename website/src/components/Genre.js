import * as React from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Container, Typography } from "@mui/material";
import Images from "../layouts/Images";

export default function News() {

    const [value, setValue] = React.useState(listGenre);
  const [inputValue, setInputValue] = React.useState('');
  const [listGenre, setListGenre] = React.useState([]);
  const [selectedGenre, setSelectedGenre] = React.useState('');
  const [listBook, setListBook] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:8080/api/genre')
    .then(response => {
      const genres = response.data;
      setListGenre(genres);
    })
    .catch(error => {
      console.error(error) ;
    });
}, []);
    React.useEffect(() => {
        axios.get(`http://localhost:8080/api/genre/{id}/book`)
        .then(response => {
            const b = response.data;
            setListBook(b);
          })
          .catch(error => {
            console.error(error) ;
          });
    }, [])
    return (
        <Container maxWidth="sm">
            <Typography>Truyện theo thể loại</Typography>
            <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={listGenre}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Controllable" />}
      />
            <Images />
        </Container>
    )
}