import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/Aboutpage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Aboutpage />} />
    </Routes>
  );
}