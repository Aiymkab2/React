import { Link, useSearchParams } from 'react-router-dom'
import { courses } from './data'
import './App.css'

function Courses() {
  const [searchParams, setSearchParams] = useSearchParams()
  const sortOrder = searchParams.get("sort") || "asc"

  const sortedCourses = [...courses].sort((a, b) => {
    if (sortOrder === "desc") {
      return b.title.localeCompare(a.title)
    }
    return a.title.localeCompare(b.title)
  })

  const toggleSort = () => {
    setSearchParams({
      sort: sortOrder === "asc" ? "desc" : "asc"
    })
  }

  return (
    <div className="courses-container">
      <div className="courses-header">
        <h2>Our Courses</h2>
        <button onClick={toggleSort} className="sort-button">
          Sort: {sortOrder === "asc" ? "▲ A to Z" : "▼ Z to A"}
        </button>
      </div>
      <p className="courses-subtitle">Click on any course to see details</p>
      
      <div className="courses-grid">
        {sortedCourses.map((course) => (
          <div key={course.id} className="course-card">
            <h3>{course.title}</h3>
            <p className="course-instructor"> {course.instructor}</p>
            <p className="course-level">
              Level: <span className={`level-tag ${course.level}`}>
                {course.level}
              </span>
            </p>
            <p className="course-description">{course.description.substring(0, 100)}...</p>
            <Link to={`/courses/${course.id}`} className="course-link">
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Courses