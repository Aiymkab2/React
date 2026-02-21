import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom'
import './index.css'
import './App.css'
import Layout from './Layout'
import Home from './Home'
import Courses from './Courses'
import About from './About'
import NotFound from './NotFound'
import CourseDetail from './CourseDetail' 
import { getCourseById } from './data'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "courses", element: <Courses /> },
      { path: "about", element: <About /> },
      { 
        path: "courses/:id",
        element: <CourseDetail />,
        errorElement: (
          <div style={{ 
            color: 'red', 
            padding: '2rem', 
            textAlign: 'center',
            background: 'white',
            borderRadius: '8px'
          }}>
            <h2>Course Not Found</h2>
            <p>The course you're looking for doesn't exist.</p>
            <Link to="/courses" style={{ color: '#3498db' }}>Back to Courses</Link>
          </div>
        ),
        loader: async ({ params }) => {
          const course = getCourseById(Number(params.id))
          if (!course) {
            throw new Error("Course not found")
          }
          return { course }
        },
      },
      { path: "*", element: <NotFound /> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)