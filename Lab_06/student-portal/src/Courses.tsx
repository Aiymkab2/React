import { Link } from 'react-router-dom'
import './App.css'

interface Course {
  id: number;
  title: string;
  instructor: string;
  description: string;
}

function Courses() {
  const courses: Course[] = [
    {
      id: 1,
      title: "Introduction to React",
      instructor: "Dr. Jane Smith",
      description: "Learn the fundamentals of React, including components, state, props, and hooks."
    },
    {
      id: 2,
      title: "TypeScript Masterclass",
      instructor: "Prof. John Doe",
      description: "Master TypeScript from basics to advanced concepts. Learn about types, interfaces, and generics."
    },
    {
      id: 3,
      title: "Node.js Backend Development",
      instructor: "Dr. Sarah Johnson",
      description: "Build scalable backend applications with Node.js, Express, and MongoDB."
    },
    {
      id: 4,
      title: "Full-Stack Web Development",
      instructor: "Prof. Mike Wilson",
      description: "Comprehensive course covering frontend and backend development."
    },
    {
      id: 5,
      title: "Python for Beginners",
      instructor: "Dr. Emily Brown",
      description: "Learn Python programming from scratch. Perfect for beginners."
    }
  ]

  return (
    <div className="courses-container">
      <h2>Our Courses</h2>
      <p className="courses-subtitle">Explore our wide range of programming courses</p>
      
      <div className="courses-grid">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <h3>{course.title}</h3>
            <p className="course-instructor"> {course.instructor}</p>
            <p className="course-description">{course.description}</p>
            <Link to={`/courses/${course.id}`} className="course-link">
              Learn More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Courses