import './App.css'

function About() {
  return (
    <div className="about-container">
      <h2>About Our University Program</h2>
      
      <div className="about-section">
        <h3>Our Mission</h3>
        <p>
          Welcome to the Student Portal of our prestigious university program. 
          We are dedicated to providing high-quality education in computer science 
          and software engineering. Our mission is to empower students with the 
          knowledge and skills needed to excel in the rapidly evolving tech industry.
        </p>
      </div>

      <div className="about-section">
        <h3>Why Choose Us?</h3>
        <ul className="about-list">
          <li>Industry-experienced instructors</li>
          <li>Hands-on project-based learning</li>
          <li>Flexible online schedule</li>
          <li>Career support and guidance</li>
          <li>Modern curriculum updated regularly</li>
        </ul>
      </div>

      <div className="about-section">
        <h3>Our Values</h3>
        <div className="values-grid">
          <div className="value-item">
            <h4>Excellence</h4>
            <p>Striving for the highest standards in education</p>
          </div>
          <div className="value-item">
            <h4>Innovation</h4>
            <p>Encouraging creative thinking and problem-solving</p>
          </div>
          <div className="value-item">
            <h4>Community</h4>
            <p>Fostering a supportive learning environment</p>
          </div>
          <div className="value-item">
            <h4>Diversity</h4>
            <p>Embracing different perspectives and backgrounds</p>
          </div>
        </div>
      </div>

      <div className="about-section">
        <h3>Contact Information</h3>
        <div className="contact-info">
          <p> 123 University Avenue, Tech City</p>
          <p> (555) 123-4567</p>
          <p> info@university.edu</p>
          <p> Mon-Fri: 9:00 AM - 6:00 PM</p>
        </div>
      </div>
    </div>
  )
}

export default About