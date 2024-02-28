import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./pages/home-page";
import Footer from "./components/footer";

export default function App() {
  return (
    <div>

      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div >
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav className="sticky top-0 bg-sky-950 flex flex-row h-20 p-3 text-white" >
        <div className="p-4 bg-slate-500 w-1/2">
          <Link to="/">Company Logo</Link>
        </div>
          <div className="flex justify-end w-full">
        <div className="p-4 hover:border-b-4">
          <Link to="/">Home</Link>
        </div>
        <div className="p-4 hover:border-b-4">
          <Link to="/about">About Us</Link>
        </div>
        <div className="p-4 hover:border-b-4">
          <Link to="/dashboard">Events and News</Link>
        </div>
        <div className="p-4 hover:border-b-4">
          <Link to="/nothing-here">Contact Us</Link>
        </div>
        <div className="p-4 hover:border-b-4">
          <Link to="/nothing-here">Login</Link>
        </div>
        </div>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />

        <Footer/>
    </div>
  );
}



function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}