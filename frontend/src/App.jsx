
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import JobSeekerDashboard from "./dashboard/JobSeekerDashboard";
import RecruiterDashboard from "./dashboard/RecruiterDashboard";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Job Seeker Protected Route */}
        <Route element={<ProtectedRoute allowedRole="jobseeker" />}>
          <Route
            path="/dashboard"
            element={<JobSeekerDashboard />}
          />
        </Route>

        {/* Recruiter Protected Route */}
        <Route element={<ProtectedRoute allowedRole="recruiter" />}>
          <Route
            path="/recruiter-dashboard"
            element={<RecruiterDashboard />}
          />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
