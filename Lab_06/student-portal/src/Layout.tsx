import { Link, Outlet } from 'react-router-dom'
import './App.css' 

function Layout() {
  return (
    <div className="app">
      <header>
        <nav className="navbar">
          <div className="nav-brand">
            <Link to="/">🎓 Student Portal</Link>
          </div>
          <ul className="nav-menu">
            <li>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li>
              <Link to="/courses" className="nav-link">Courses</Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">About</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        <p>© 2026 Student Portal. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Layout