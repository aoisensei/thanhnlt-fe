import { AppBar, Box, Container, IconButton, Toolbar } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { Outlet, Link as RouterLink } from 'react-router-dom'
import logoLight from '../assets/thanhnlt-high-resolution-logo-transparent.png'
import logoDark from '../assets/thanhnlt-high-resolution-logo-grayscale-transparent.png'
import { useThemeMode } from '../store/themeStore.ts'

export function MainLayout() {
  const { mode, toggle } = useThemeMode()

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100dvh' }}>
      <AppBar position="sticky" sx={{ top: 0, zIndex: (t) => t.zIndex.drawer + 1 }}>
        <Toolbar>
          <Box component={RouterLink} to="/" sx={{ color: 'inherit', textDecoration: 'none', flexGrow: 1, display: 'inline-flex', alignItems: 'center' }}>
            <Box
              component="img"
              src={mode === 'light' ? logoLight : logoDark}
              alt="ThanhNLT logo"
              sx={{ height: 28, display: 'block' }}
            />
          </Box>
          <IconButton color="inherit" onClick={toggle} aria-label="toggle theme">
            {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ py: 3, flexGrow: 1 }}>
        <Outlet />
      </Container>
    </Box>
  )
}


