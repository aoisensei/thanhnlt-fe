import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout.tsx'
import { HomePage } from '../pages/Home.tsx'
import { ProfilePage } from '../pages/Profile.tsx'

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'profile', element: <ProfilePage /> },
    ],
  },
])


