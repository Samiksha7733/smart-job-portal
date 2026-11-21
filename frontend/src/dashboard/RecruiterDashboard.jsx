
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Briefcase,
  Users,
  PlusCircle,
  Settings,
  LogOut,
  MapPin,
  IndianRupee
} from "lucide-react";

function RecruiterDashboard() {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Frontend Developer",
      location: "Pune, India",
      salary: "4-6 LPA",
      applicants: 25
    },
    {
      id: 2,
      title: "Python Developer",
      location: "Mumbai, India",
      salary: "5-7 LPA",
      applicants: 18
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");

  function handlePostJob(e) {
    e.preventDefault();

    const newJob = {
      id: Date.now(),
      title,
      location,
      salary,
      applicants: 0
    };

    setJobs([...jobs, newJob]);

    setTitle("");
    setLocation("");
    setSalary("");
    setShowForm(false);
  }

  return (
    <div className="flex min-h-screen bg-slate-100">

      {/* Sidebar */}
      <aside className="hidden w-64 bg-slate-900 p-6 text-white md:block">
        <h2 className="mb-10 text-2xl font-bold text-blue-400">
          JobFinder.
        </h2>

        <nav className="space-y-7">
          <p className="flex items-center gap-3 text-blue-400">
            <LayoutDashboard /> Dashboard
          </p>

          <p className="flex items-center gap-3">
            <Briefcase /> My Jobs
          </p>

          <p className="flex items-center gap-3">
            <Users /> Applicants
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
              Recruiter Dashboard
            </h1>
            <p className="mt-2 text-slate-500">
              Manage your job postings and candidates.
            </p>
          </div>

          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 rounded-lg bg-blue-700 px-5 py-3 text-white"
          >
            <PlusCircle size={20} />
            Post a Job
          </button>
        </div>

        {/* Statistics */}
        <div className="grid gap-5 sm:grid-cols-3">

          {[
            ["Total Jobs", jobs.length],
            ["Total Applicants", jobs.reduce((sum, job) => sum + job.applicants, 0)],
            ["Active Jobs", jobs.length]
          ].map(([label, value]) => (
            <div key={label} className="rounded-xl bg-white p-6 shadow-sm">
              <p className="text-slate-500">{label}</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-800">
                {value}
              </h2>
            </div>
          ))}

        </div>

        {/* Post Job Form */}
        {showForm && (
          <form
            onSubmit={handlePostJob}
            className="mt-8 rounded-xl bg-white p-6 shadow-sm"
          >
            <h2 className="mb-5 text-xl font-bold">
              Create New Job
            </h2>

            <div className="grid gap-4 md:grid-cols-3">

              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Job Title"
                className="rounded-lg border p-3"
                required
              />

              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Job Location"
                className="rounded-lg border p-3"
                required
              />

              <input
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                placeholder="Salary (e.g. 4-6 LPA)"
                className="rounded-lg border p-3"
                required
              />

            </div>

            <button
              type="submit"
              className="mt-5 rounded-lg bg-green-600 px-6 py-3 text-white"
            >
              Publish Job
            </button>

          </form>
        )}

        {/* Job Listings */}
        <section className="mt-8">
          <h2 className="mb-5 text-2xl font-bold text-slate-800">
            Your Job Postings
          </h2>

          <div className="space-y-4">

            {jobs.map((job) => (
              <div
                key={job.id}
                className="rounded-xl bg-white p-6 shadow-sm"
              >

                <div className="flex flex-wrap items-center justify-between gap-4">

                  <div>
                    <h3 className="text-xl font-bold text-slate-800">
                      {job.title}
                    </h3>

                    <p className="mt-2 flex items-center gap-2 text-slate-500">
                      <MapPin size={16} />
                      {job.location}
                    </p>

                    <p className="mt-2 flex items-center gap-2 text-slate-500">
                      <IndianRupee size={16} />
                      {job.salary}
                    </p>

                    <p className="mt-2 flex items-center gap-2 text-blue-700">
                      <Users size={16} />
                      {job.applicants} Applicants
                    </p>
                  </div>

                  <span className="rounded-full bg-green-100 px-4 py-2 text-sm text-green-700">
                    Active
                  </span>

                </div>

              </div>
            ))}

          </div>
        </section>

      </main>
    </div>
  );
}

export default RecruiterDashboard;
