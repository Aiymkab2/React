import { useParams, useLoaderData, Link } from 'react-router-dom'
import type {Course} from './data'
import './App.css'

function CourseDetail() {
  const { id } = useParams()
  const { course } = useLoaderData() as { course: Course }

  return (
    <div className="course-detail-container">
      <div className="detail-nav">
        <Link to="/courses" className="back-link">
          ← Back to Courses
        </Link>
      </div>

      <article className="course-detail">
        <header className="course-header">
          <h2>{course.title}</h2>
          <span className={`level-badge ${course.level}`}>
            {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
          </span>
        </header>

        <div className="course-info">
          <p><strong>Course ID:</strong> {id}</p>
          <p><strong>Instructor:</strong> {course.instructor}</p>
          <p><strong>Level:</strong> {course.level}</p>
        </div>

        <div className="course-description">
          <h3>Description</h3>
          <p>{course.description}</p>
        </div>

        <div className="course-actions">
          <Link to="/courses" className="back-link">
            ← Back to Courses
          </Link>
        </div>
      </article>
    </div>
  )
}

export default CourseDetail