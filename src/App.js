/** @format */

import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
<link href="https://api.fontshare.com/v2/css?f[]=clash-grotesk@400,600,300,500&display=swap" rel="stylesheet"></link>

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
}

export default App;
