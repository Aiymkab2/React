import { Link } from 'react-router-dom'
import './App.css'

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to Student Portal</h1>
        <p>Your gateway to quality education and learning resources</p>
      </div>
      
      <div className="features">
        <div className="feature-card">
          <h3>Wide Range of Courses</h3>
          <p>Access our extensive catalog of programming and technology courses</p>
          <Link to="/courses" className="feature-link">Browse Courses →</Link>
        </div>
        
        <div className="feature-card">
          <h3>Expert Instructors</h3>
          <p>Learn from industry professionals and experienced educators</p>
          <Link to="/about" className="feature-link">Meet Our Team →</Link>
        </div>
        
        <div className="feature-card">
          <h3>Flexible Learning</h3>
          <p>Study at your own pace with our online learning platform</p>
          <Link to="/courses" className="feature-link">Start Learning →</Link>
        </div>
      </div>
    </div>
  )
}

export default Home