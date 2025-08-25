import { AppBar, Box, Container, IconButton, Toolbar, Typography } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { Outlet, Link as RouterLink } from 'react-router-dom'
import { useThemeMode } from '../store/themeStore.ts'

export function MainLayout() {
  const { mode, toggle } = useThemeMode()

  return (
    <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography component={RouterLink} to="/" color="inherit" sx={{ textDecoration: 'none', flexGrow: 1 }}>
            Frontend Base
          </Typography>
          <IconButton color="inherit" onClick={toggle} aria-label="toggle theme">
            {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container sx={{ py: 3, flexGrow: 1 }}>
        <Outlet />
      </Container>
    </Box>
  )
}


