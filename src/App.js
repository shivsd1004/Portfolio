import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import "./App.css";
import About from "./components/About";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Homepage />} />
        <Route path="/about" index element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
