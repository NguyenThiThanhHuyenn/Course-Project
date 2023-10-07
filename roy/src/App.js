import "./styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Register from "./components/Register";
import SignIn from "./components/SignIn";
import { Container } from "@mui/material";

export default function App() {
  return (
    <Container maxWidth="fixed">
      <BrowserRouter>
        <Header />

        <Container>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Container>

        <Footer />
      </BrowserRouter>
    </Container>
  );
}
