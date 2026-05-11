import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import { ThemeProvider } from './app/providers/ThemeContext'
import Contact from './app/routes/Contact'
import Error from './app/routes/Error'
import Home from './app/routes/Home'
import Projects from './app/routes/Projects'
import ProjectDetail from './features/projects/components/ProjectDetail/ProjectDetail'
import './styles/global.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
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
