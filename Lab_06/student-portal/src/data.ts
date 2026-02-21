export interface Course {
  id: number;
  title: string;
  instructor: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Introduction to React",
    instructor: "Dr. Jane Smith",
    level: "beginner",
    description: "Learn the fundamentals of React, including components, state, props, and hooks. Build modern web applications with this powerful library."
  },
  {
    id: 2,
    title: "TypeScript Masterclass",
    instructor: "Prof. John Doe",
    level: "intermediate",
    description: "Master TypeScript from basics to advanced concepts. Learn about types, interfaces, generics, and how to use TypeScript with React."
  },
  {
    id: 3,
    title: "Node.js Backend Development",
    instructor: "Dr. Sarah Johnson",
    level: "intermediate",
    description: "Build scalable backend applications with Node.js, Express, and MongoDB. Learn RESTful API design and authentication."
  },
  {
    id: 4,
    title: "Full-Stack Web Development",
    instructor: "Prof. Mike Wilson",
    level: "advanced",
    description: "Comprehensive course covering frontend and backend development. Build a complete web application from scratch using React, Node.js, and PostgreSQL."
  },
  {
    id: 5,
    title: "Python for Beginners",
    instructor: "Dr. Emily Brown",
    level: "beginner",
    description: "Learn Python programming from scratch. Perfect for beginners with no prior programming experience."
  }
];

export function getCourseById(id: number): Course | undefined {
  return courses.find(course => course.id === id);
}