# Lab 6.2: Route Parameters & Dynamic Pages

## Student Name: [Ваше имя]
## Date: [Дата]

## Overview
This project extends the Student Portal from Lab 6.1 with dynamic routing, 
course details pages, and query parameter sorting.

## New Features

### 1. Dynamic Routes with useParams
- Added `/courses/:id` route for individual course pages
- Used `useParams` hook to access the course ID from URL
- Example: `/courses/1` displays course with ID 1

### 2. Data Loading with loader
- Implemented `loader` function in route configuration
- Data loads before component renders using `useLoaderData`
- Added error handling for invalid course IDs

### 3. Query Parameters with useSearchParams
- Added sorting functionality to Courses page
- URL updates: `/courses?sort=asc` or `/courses?sort=desc`
- Used `useSearchParams` hook to read and update query parameters

## Key Differences: useParams vs useSearchParams

| Hook | Purpose | Example URL | When to Use |
|------|---------|-------------|-------------|
| `useParams` | Access dynamic segments in path | `/courses/:id` → `/courses/1` | For required parameters that identify a specific resource |
| `useSearchParams` | Access query string parameters | `?sort=asc` → `/courses?sort=asc` | For optional parameters like filters, sorting, pagination |

## URL Parameters vs Query Parameters

### URL Parameters (`/courses/:id`)
- Used for **required** information
- Part of the resource identification
- Example: `/users/123` (get user with ID 123)
- More SEO-friendly

### Query Parameters (`?sort=asc`)
- Used for **optional** information
- For filtering, sorting, pagination
- Example: `/products?category=books&sort=price`
- Order doesn't matter, can be optional

## Testing Instructions

1. **Dynamic Routes**: Click on any course card to see its details
2. **Invalid IDs**: Try `/courses/999` to see error handling
3. **Sorting**: Click "Sort" button to toggle between A→Z and Z→A
4. **URL Updates**: Observe how the URL changes with sorting

## Git Commits for Lab 6.2
- feat: add data.ts with course interface and mock data
- feat: add CourseDetail component with useParams and useLoaderData
- feat: add dynamic route /courses/:id with loader and errorElement
- feat: add sorting with useSearchParams and links to course details
- style: add styles for course detail page and sorting
- docs: add README for Lab 6.2