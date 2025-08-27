import { Box, Container } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar.tsx'
import { Footer } from './Footer.tsx'

export function MainLayout() {

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100dvh' }}>
      <Navbar />
      <Container maxWidth="lg" sx={{ py: 3, flexGrow: 1 }}>
        <Outlet />
      </Container>
      <Footer />
    </Box>
  )
}


