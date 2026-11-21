
import { Link } from "react-router-dom";
import { User, Mail, Lock, Briefcase } from "lucide-react";

function Register() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10">

      <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-lg">

        <Link to="/" className="text-2xl font-bold text-blue-700">
          JobFinder.
        </Link>

        <h2 className="mt-8 text-3xl font-bold text-slate-800">
          Create Account
        </h2>

        <p className="mt-2 text-slate-500">
          Join us and discover new opportunities.
        </p>

        <form className="mt-8 space-y-5">

          <div>
            <label className="mb-2 block font-medium">Full Name</label>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <User size={20} className="text-slate-400" />
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block font-medium">Email Address</label>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <Mail size={20} className="text-slate-400" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block font-medium">Password</label>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <Lock size={20} className="text-slate-400" />
              <input
                type="password"
                placeholder="Create a password"
                className="w-full outline-none"
                minLength={8}
                required
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block font-medium">Account Type</label>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <Briefcase size={20} className="text-slate-400" />
              <select className="w-full bg-white outline-none">
                <option value="jobseeker">Job Seeker</option>
                <option value="recruiter">Recruiter</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-700 py-3 font-semibold text-white hover:bg-blue-800"
          >
            Create Account
          </button>

        </form>

        <p className="mt-6 text-center text-slate-600">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-blue-700">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Register;
