import { Link } from 'react-router-dom'
import './App.css'

function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h2>404</h2>
        <h3>Page Not Found</h3>
        <p>
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="not-found-links">
          <p>Here are some helpful links:</p>
          <ul>
            <li><Link to="/">🏠 Return to Homepage</Link></li>
            <li><Link to="/courses">📚 Browse Our Courses</Link></li>
            <li><Link to="/about">ℹ️ Learn About Us</Link></li>
          </ul>
        </div>

        <button 
          onClick={() => window.history.back()}
          className="back-button"
        >
          ← Go Back
        </button>
      </div>
    </div>
  )
}

export default NotFound