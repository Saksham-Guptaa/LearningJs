import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
        <Route path="/resume" element={<div>Resume Page</div>} />
        <Route path="*" element={<div>No response Page</div>} />

      </Routes>
    </div>
  );
}

export default App;
