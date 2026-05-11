import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import { ThemeProvider } from './app/providers/ThemeContext'
import './styles/global.css'

// Lazy loading components for performance
const Home = lazy(() => import('./app/routes/Home'))
const Projects = lazy(() => import('./app/routes/Projects'))
const Contact = lazy(() => import('./app/routes/Contact'))
const Error = lazy(() => import('./app/routes/Error'))
const ProjectDetail = lazy(
  () => import('./features/projects/components/ProjectDetail/ProjectDetail'),
)

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<div className="min-h-screen bg-(--bg-color)" />}>
        <App />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<div className="min-h-screen bg-(--bg-color)" />}>
        <Error />
      </Suspense>
    ),
    children: [
      { path: '/', element: <Home /> },
      { path: '/projects', element: <Projects /> },
      { path: '/projects/:repoName', element: <ProjectDetail /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
])

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
