import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";

import Home from "./pages/Home";

import { useEffect, useState } from "react";
import CustomCursor from "./components/CustomCursor";
import RainbowTrailCursor from "./components/RainbowTrailCursor";

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "system"
  );

  

  return (
    <div className="px-4 lg:px-8 xl:px-32 dark:text-white">
      <CustomCursor />
      <RainbowTrailCursor />
      <Routes>
        <Route path="/" element={<Home />} />
     
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
