import { Link, Outlet } from "react-router-dom";

const PageWrapper = () => {
  return (
    <div className="app-container">
      <div className="navbar">
        <Link className="navi" to="/">
          Home
        </Link>
        <Link className="navi" to="/animals">
          Animals
        </Link>
        <Link className="navi" to="/users">
          Users
        </Link>
      </div>
      <div className="app-body">
        <Outlet />
      </div>
    </div>
  );
};

export default PageWrapper;
