import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Compiler from "./pages/Compiler";

export default function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Compiler />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}
