import { useEffect, useRef, useState } from "react";
import "./App.css";

import ContactUs from "./pages/ContactUs";
import { Outlet, Route, Router, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Register from "./pages/Register";
import ErrorPage from "./pages/ErrorPage";
import Test from "./pages/Test";
import Layout from "./Layout";

function App() {
  return (
    // <>
    // <div id="detail">
    //     <Outlet />
    //   </div>

    // <MainPage/>
    // </>
    <>
      {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes> */}

      <Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<MainPage />} />
    <Route path="/contact" element={<ContactUs />} />
    <Route path="register" element={<Register />} />
  </Route>
  <Route path="*" element={<ErrorPage />} />
</Routes>

    </>
  );
}

export default App;
// 903AFF
// D434FE
