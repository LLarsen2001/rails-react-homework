import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import Animals from "./Animals";
import PageWrapper from "./PageWrapper";
import Home from "./Home";
import Users from "./Users";

function App() {
  return (
    <Routes>
      <Route element={<PageWrapper />}>
        <Route index element={<Home />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/users" element={<Users />} />
      </Route>
    </Routes>
  );
}

export default App;
