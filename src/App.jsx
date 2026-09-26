import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutPage from "./components/Aboutpage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}