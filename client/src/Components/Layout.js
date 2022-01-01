import { Link, Outlet } from "react-router-dom"

const Layout = () => {
  const renderLinks = () => {
      return (
        <div>
            <div>
              <Link to="/Protected">Profile</Link>
            </div>
            <div>
                <Link to="/">Home</Link>
          </div>
          <div>
              <Link to="/Public">Public</Link>
          </div>
        </div>
      )
    }
  return (
    <div>
      {renderLinks()}
      <Outlet />
    </div>
  )
};

export default Layout;

const styles = {
  navbar: {
    display: "flex",
    border: "solid",
    padding: "1%",
    justfiyContent: "center"
  },
  pageContainer: {
    display: "flex",
    maxWidth: '70vw',
    margin:'auto',
    border: '1px solid red',
    padding: "5%",
    margin: '5%'
  }
}