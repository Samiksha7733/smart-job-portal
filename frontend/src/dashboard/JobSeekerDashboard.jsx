
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  User,
  FileText,
  Briefcase,
  ClipboardList,
  Settings,
  LogOut,
  Upload,
  TrendingUp,
  Search
} from "lucide-react";

function JobSeekerDashboard() {
  const jobs = [
    {
      title: "Frontend Developer",
      company: "Tech Solutions",
      location: "Pune, India",
      salary: "4-6 LPA",
      type: "Full Time"
    },
    {
      title: "Python Developer",
      company: "Innovate Labs",
      location: "Mumbai, India",
      salary: "5-7 LPA",
      type: "Remote"
    },
    {
      title: "Data Analyst",
      company: "Digital Works",
      location: "Bangalore, India",
      salary: "4-5 LPA",
      type: "Full Time"
    }
  ];

  return (
    <div className="flex min-h-screen bg-slate-100">

      {/* Sidebar */}
      <aside className="hidden w-64 bg-slate-900 p-6 text-white md:block">
        <h2 className="mb-10 text-2xl font-bold text-blue-400">
          JobFinder.
        </h2>

        <nav className="space-y-6">
          <p className="flex items-center gap-3 text-blue-400">
            <LayoutDashboard /> Dashboard
          </p>

          <p className="flex items-center gap-3">
            <User /> My Profile
          </p>

          <p className="flex items-center gap-3">
            <FileText /> My Resume
          </p>

          <p className="flex items-center gap-3">
            <Briefcase /> Find Jobs
          </p>

          <p className="flex items-center gap-3">
            <ClipboardList /> Applications
          </p>

          <p className="flex items-center gap-3">
            <Settings /> Settings
          </p>
        </nav>

        <Link
          to="/login"
          className="mt-16 flex items-center gap-3 text-red-400"
        >
          <LogOut /> Logout
        </Link>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10">

        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">
              Welcome Back, Samiksha!
            </h1>
            <p className="mt-2 text-slate-500">
              Here's your career dashboard.
            </p>
          </div>

          <button className="rounded-lg bg-blue-700 px-5 py-3 text-white">
            <span className="flex items-center gap-2">
              <Search size={18} /> Find Jobs
            </span>
          </button>
        </div>

        {/* Statistics */}
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

          {[
            ["Profile Views", "128"],
            ["Applied Jobs", "12"],
            ["Saved Jobs", "8"],
            ["Resume Score", "85%"]
          ].map(([label, value]) => (
            <div key={label} className="rounded-xl bg-white p-6 shadow-sm">
              <p className="text-sm text-slate-500">{label}</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-800">
                {value}
              </h2>
            </div>
          ))}

        </div>

        {/* Resume Upload */}
        <section className="mt-8 rounded-xl bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <Upload className="text-blue-700" size={28} />
            <h2 className="text-xl font-bold">Upload Your Resume</h2>
          </div>

          <p className="my-4 text-slate-500">
            Upload your latest resume to receive AI-powered analysis.
          </p>

          <input
            type="file"
            accept=".pdf"
            className="block w-full rounded-lg border p-3"
          />
        </section>

        {/* Recommended Jobs */}
        <section className="mt-8">
          <h2 className="mb-5 text-2xl font-bold text-slate-800">
            Recommended Jobs
          </h2>

          <div className="grid gap-5 lg:grid-cols-3">
            {jobs.map((job) => (
              <div
                key={job.title}
                className="rounded-xl bg-white p-6 shadow-sm"
              >
                <Briefcase className="mb-4 text-blue-700" size={28} />

                <h3 className="text-lg font-bold">{job.title}</h3>

                <p className="mt-2 text-slate-500">{job.company}</p>
                <p className="mt-2 text-sm text-slate-500">
                  {job.location}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded bg-blue-100 px-3 py-1 text-sm text-blue-700">
                    {job.type}
                  </span>

                  <span className="rounded bg-green-100 px-3 py-1 text-sm text-green-700">
                    {job.salary}
                  </span>
                </div>

                <button className="mt-5 w-full rounded-lg bg-blue-700 py-2 text-white">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}

export default JobSeekerDashboard;
