
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "jobseeker",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Store authentication details
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      setMessage("Login successful!");

      // Redirect according to account type
      if (data.user.role === "recruiter") {
        navigate("/recruiter-dashboard");
      } else {
        navigate("/dashboard");
      }

    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">

        <Link to="/" className="text-2xl font-bold text-blue-700">
          JobFinder.
        </Link>

        <h2 className="mt-8 text-3xl font-bold text-slate-800">
          Welcome Back!
        </h2>

        <p className="mt-2 text-slate-500">
          Login to continue your career journey.
        </p>

        {message && (
          <p className="mt-4 rounded-lg bg-blue-50 p-3 text-sm text-blue-700">
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">

          <div>
            <label className="mb-2 block font-medium">
              Email Address
            </label>

            <div className="flex items-center gap-3 rounded-lg border p-3">
              <Mail className="text-slate-400" size={20} />

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Password
            </label>

            <div className="flex items-center gap-3 rounded-lg border p-3">
              <Lock className="text-slate-400" size={20} />

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="w-full outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Login As
            </label>

            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full rounded-lg border p-3"
            >
              <option value="jobseeker">Job Seeker</option>
              <option value="recruiter">Recruiter</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-blue-700 py-3 font-semibold text-white hover:bg-blue-800 disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        <p className="mt-6 text-center text-slate-600">
          Don't have an account?{" "}
          <Link to="/register" className="font-semibold text-blue-700">
            Register
          </Link>
        </p>

        <Link to="/" className="mt-5 block text-center text-sm text-slate-500">
          Back to Home
        </Link>

      </div>
    </div>
  );
}

export default Login;
