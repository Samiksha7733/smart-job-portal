
import { Link } from "react-router-dom";
import { Briefcase, Mail, Lock } from "lucide-react";

function Login() {
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

        <form className="mt-8 space-y-5">

          <div>
            <label className="mb-2 block font-medium">
              Email Address
            </label>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <Mail className="text-slate-400" size={20} />
              <input
                type="email"
                placeholder="Enter your email"
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
                placeholder="Enter your password"
                className="w-full outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Login As
            </label>
            <select className="w-full rounded-lg border p-3">
              <option value="jobseeker">Job Seeker</option>
              <option value="recruiter">Recruiter</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-700 py-3 font-semibold text-white hover:bg-blue-800"
          >
            Login
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
