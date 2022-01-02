import { Link, Outlet } from "react-router-dom"
import Footer from "./Pages/Footer";

const Layout = () => {
  const renderLinks = () => {
      return (
        <div>
            <div>
              <Link to="/Portfolio">Portfolio</Link>
            </div>
            <div>
                <Link to="/">Home</Link>
          </div>
          <div>
              <Link to="/About">About</Link>
          </div>
        </div>
      )
    }
  return (
    <div>
        <div id="navBar">
          {renderLinks()}
        </div>
        <div id="body">
          <Outlet />
        </div>
        <div>
          <Footer />
        </div>
    </div>
  )
};

export default Layout;