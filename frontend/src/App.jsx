import {
  Search,
  MapPin,
  Briefcase,
  ArrowRight,
  Code,
  Palette,
  BarChart3,
  Database,
  Sparkles,
  Users
} from "lucide-react";

const jobs = [
  {
    title: "Frontend Developer",
    company: "Tech Solutions",
    location: "Pune, India",
    type: "Full Time",
    salary: "4–6 LPA",
    icon: Code,
  },
  {
    title: "Python Developer",
    company: "Innovate Labs",
    location: "Mumbai, India",
    type: "Remote",
    salary: "5–8 LPA",
    icon: Database,
  },
  {
    title: "Data Analyst",
    company: "Digital Works",
    location: "Bangalore, India",
    type: "Full Time",
    salary: "4–7 LPA",
    icon: BarChart3,
  },
];

const categories = [
  { name: "Technology", icon: Code },
  { name: "Design", icon: Palette },
  { name: "Data Science", icon: BarChart3 },
  { name: "Marketing", icon: Users },
];

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">

      {/* Navbar */}
      <nav className="flex items-center justify-between bg-white px-6 py-5 shadow-sm md:px-16">
        <h1 className="text-2xl font-bold text-blue-700">
          Job<span className="text-slate-800">Finder.</span>
        </h1>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#" className="font-medium text-blue-700">Home</a>
          <a href="#jobs" className="hover:text-blue-700">Find Jobs</a>
          <a href="#categories" className="hover:text-blue-700">Categories</a>
          <a href="#ai" className="hover:text-blue-700">AI Resume Analyzer</a>
        </div>

        <div className="flex gap-3">
          <button className="hidden rounded-lg px-4 py-2 font-semibold text-blue-700 sm:block">
            Login
          </button>
          <button className="rounded-lg bg-blue-700 px-5 py-2 font-semibold text-white hover:bg-blue-800">
            Register
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-950 to-blue-700 px-6 py-20 text-center text-white md:py-28">

        <div className="mx-auto max-w-3xl">
          <span className="rounded-full bg-white/15 px-4 py-2 text-sm">
            Your career journey starts here
          </span>

          <h2 className="mt-8 text-4xl font-extrabold md:text-6xl">
            Find Your Dream Job With
            <span className="text-cyan-300"> AI Power</span>
          </h2>

          <p className="mt-6 text-lg text-blue-100">
            Discover opportunities, analyze your resume
            and find jobs that match your skills.
          </p>

          <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-3 rounded-xl bg-white p-3 shadow-xl sm:flex-row">

            <div className="flex flex-1 items-center gap-3 px-3">
              <Search className="text-blue-600" />
              <input
                type="text"
                placeholder="Job title or keyword"
                className="w-full text-slate-800 outline-none"
              />
            </div>

            <div className="flex flex-1 items-center gap-3 px-3">
              <MapPin className="text-blue-600" />
              <input
                type="text"
                placeholder="Location"
                className="w-full text-slate-800 outline-none"
              />
            </div>

            <button className="rounded-lg bg-blue-700 px-7 py-3 font-semibold text-white hover:bg-blue-800">
              Search Jobs
            </button>
          </div>

          <p className="mt-5 text-sm text-blue-100">
            Popular: React Developer, Python Developer, Data Analyst
          </p>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="px-6 py-16 md:px-16">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold">Explore Job Categories</h2>
          <p className="mt-3 text-slate-500">
            Find opportunities in your favorite field.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.name}
                className="rounded-xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <Icon size={32} className="text-blue-700" />
                <h3 className="mt-5 text-lg font-bold">
                  {category.name}
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  Explore available opportunities
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Jobs */}
      <section id="jobs" className="bg-white px-6 py-16 md:px-16">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold">Featured Jobs</h2>
            <p className="mt-2 text-slate-500">
              Discover opportunities selected for you.
            </p>
          </div>

          <a href="#jobs" className="hidden items-center gap-2 font-semibold text-blue-700 sm:flex">
            View all <ArrowRight size={18} />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {jobs.map((job) => {
            const Icon = job.icon;

            return (
              <div
                key={job.title}
                className="rounded-xl border border-slate-200 p-6 transition hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="rounded-lg bg-blue-50 p-3">
                    <Icon size={28} className="text-blue-700" />
                  </div>
                  <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                    Hiring
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  {job.title}
                </h3>

                <p className="mt-2 text-slate-500">
                  {job.company}
                </p>

                <div className="mt-5 space-y-3 text-sm text-slate-600">
                  <p className="flex items-center gap-2">
                    <MapPin size={16} /> {job.location}
                  </p>
                  <p className="flex items-center gap-2">
                    <Briefcase size={16} /> {job.type}
                  </p>
                  <p className="font-semibold text-blue-700">
                    {job.salary}
                  </p>
                </div>

                <button className="mt-6 w-full rounded-lg border border-blue-700 py-3 font-semibold text-blue-700 transition hover:bg-blue-700 hover:text-white">
                  View Details
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* AI Resume Analyzer */}
      <section id="ai" className="px-6 py-20 md:px-16">
        <div className="mx-auto max-w-5xl rounded-2xl bg-gradient-to-r from-indigo-950 to-blue-800 p-10 text-center text-white md:p-16">

          <Sparkles size={42} className="mx-auto text-cyan-300" />

          <h2 className="mt-6 text-3xl font-bold md:text-4xl">
            Boost Your Career With AI
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-blue-100">
            Upload your resume, discover your skills,
            identify missing qualifications and find
            jobs that match your profile.
          </p>

          <button className="mt-8 rounded-lg bg-white px-8 py-3 font-bold text-blue-800 hover:bg-blue-50">
            Analyze My Resume
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 px-6 py-8 text-center text-slate-300">
        <h2 className="text-xl font-bold text-white">JobFinder.</h2>
        <p className="mt-3 text-sm">
          Find your dream job with the power of AI.
        </p>
        <p className="mt-5 text-xs text-slate-500">
          © 2026 JobFinder. All rights reserved.
        </p>
      </footer>

    </div>
  );
}

export default App;
