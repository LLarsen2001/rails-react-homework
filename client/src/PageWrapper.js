import { Link, Outlet } from "react-router-dom";

const PageWrapper = () => {
  return (
    <div className="app-container">
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/animals">Animals</Link>
      </div>
      <div className="app-body">
        <Outlet />
      </div>
    </div>
  );
};

export default PageWrapper;
