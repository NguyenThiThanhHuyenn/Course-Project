import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import { Container } from "@mui/material";
import Detail from "./components/Detail";
import WorkSpace from "./components/WorkSpace";
import NewWork from "./components/NewWork";

export default function App() {
  return (
    <Container maxWidth="xl">
      <BrowserRouter>
        <Header />

        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/workspace" element={<WorkSpace />} />
            <Route path="/workspace/news" element={<NewWork />} />
          </Routes>
        </Container>

        <Footer />
      </BrowserRouter>
    </Container>
  );
}
