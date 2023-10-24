import { Container, Typography } from "@mui/material";
import Images from "../layouts/Images";

export default function News() {

    return (
        <Container maxWidth="sm">
            <Typography>Danh sách truyện mới</Typography>
            <Images />
        </Container>
    )
}