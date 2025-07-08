import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import TenderByLocation from "./components/TenderByLocation";
import Reports from "./components/Reports";
import MainLayout from "./components/MainLayout";
import PlainLayout from "./components/PlainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes with Header and Sidebar */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/TenderByLocation" element={<TenderByLocation />} />
        </Route>

        {/* Route without Header and Sidebar */}
        <Route element={<PlainLayout />}>
          <Route path="/Reports" element={<Reports />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;