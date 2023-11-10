import { BrowserRouter, Route, Routes } from "react-router-dom";
// import axios from "axios";
// import _ from "lodash";
import cookie from "react-cookies";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import { Container } from "@mui/material";
import Detail from "./components/Detail";
import WorkSpace from "./components/WorkSpace";
import NewWork from "./components/NewBook";
import Profile from "./components/Profile";
import PendingBook from "./components/Pending";
import Reading from "./layouts/Chapter";
import Update from "./components/Update";
import NewChapter from "./components/NewChapter";
import React, { createContext, useReducer } from "react";
import UserReducer from "./reducer/UserReducer";

export const UserContext = createContext();

export default function App() {
  const [user, dispatch] = useReducer(UserReducer, cookie.load("user") || null);

  return (
    <UserContext.Provider value={[user, dispatch]}>
    <Container maxWidth="xl">

      <BrowserRouter>
        <Header />

        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path='/book/:bookID' element={<Detail />} />
            <Route path='/book/:bookID/update' element={<Update />} />
            <Route path='/:bookID/chapter/:chapterID' element={<Reading />} />
            <Route path="/workspace" element={<WorkSpace />} />
            <Route path="/new" element={<NewWork />} />
            <Route path="/:bookID/new-chapter" element={<NewChapter />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/pending" element={<PendingBook />} />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </Container>
    </UserContext.Provider>
  );
}
