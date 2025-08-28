import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar.tsx'
import { Footer } from './Footer.tsx'

export function MainLayout() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100dvh' }}>
      <Navbar />
      <Box sx={{ flexGrow: 1, pt: '69px' }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  )
}