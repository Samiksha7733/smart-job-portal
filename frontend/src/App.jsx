import RecruiterDashboard from "./dashboard/RecruiterDashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import JobSeekerDashboard from "./dashboard/JobSeekerDashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<JobSeekerDashboard />} />
        <Route path="/recruiter-dashboard" element={<RecruiterDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

