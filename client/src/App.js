import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import Animals from "./Animals";
import PageWrapper from "./PageWrapper";
import Home from "./Home";

function App() {
  return (
    <Routes>
      <Route element={<PageWrapper />}>
        <Route index element={<Home />} />
        <Route path="/animals" element={<Animals />} />
      </Route>
    </Routes>
  );
}

export default App;
