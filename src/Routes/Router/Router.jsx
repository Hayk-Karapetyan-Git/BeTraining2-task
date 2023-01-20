import React from "react";
import { Home, AboutUs, Training, Teachers, Contact } from "../index";
import { Routes, Route } from "react-router-dom";

const Router = React.memo(() => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="training" element={<Training />} />
        <Route path="teachers" element={<Teachers />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
})

export default Router;
