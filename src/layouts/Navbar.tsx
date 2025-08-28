import { AppBar, Box, IconButton, Toolbar, Button } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { Link as RouterLink } from 'react-router-dom'
import logo from '../assets/thanhnlt-high-resolution-logo.png'
import { useThemeMode } from '../store/themeStore.ts'
import { useTheme } from '@mui/material/styles'

export function Navbar() {
    const { mode, toggle } = useThemeMode()
    const theme = useTheme()
    const isLight = theme.palette.mode === 'light'

    return (
        <AppBar position="fixed" sx={{ top: 0, zIndex: (t) => t.zIndex.drawer + 1, bgcolor: 'background.paper', borderBottom: 1, borderColor: 'divider', boxShadow: 'none' }}>
            <Box sx={{
                width: '100%',
                maxWidth: '1400px',
                mx: 'auto',
                px: { xs: 2, sm: 3, md: 4, lg: 6 }
            }}>
                <Toolbar sx={{ height: 69, px: 0 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                        <Box
                            component={RouterLink}
                            to="/"
                            sx={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                textDecoration: 'none',
                                color: 'inherit',
                            }}
                        >
                            <Box
                                component="img"
                                src={logo}
                                alt="ThanhNLT logo"
                                sx={{ height: 40, display: 'block', cursor: 'pointer' }}
                            />
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                        <Button
                            component={RouterLink}
                            to="/"
                            color={isLight ? 'inherit' : 'inherit'}
                            sx={{
                                color: isLight ? 'text.primary' : 'inherit',
                                textTransform: 'none',
                                fontWeight: 600,
                                fontSize: '1.1rem',
                                px: 3,
                                py: 1,
                                borderRadius: 1,
                                '&:hover': { bgcolor: 'action.hover' },
                            }}
                        >
                            Home
                        </Button>

                        <Button
                            component={RouterLink}
                            to="/work"
                            color={isLight ? 'inherit' : 'inherit'}
                            sx={{
                                color: isLight ? 'text.primary' : 'inherit',
                                textTransform: 'none',
                                fontWeight: 600,
                                fontSize: '1.1rem',
                                px: 3,
                                py: 1,
                                borderRadius: 1,
                                '&:hover': { bgcolor: 'action.hover' },
                            }}
                        >
                            Work
                        </Button>

                        <Button
                            component={RouterLink}
                            to="/contact"
                            color={isLight ? 'inherit' : 'inherit'}
                            sx={{
                                color: isLight ? 'text.primary' : 'inherit',
                                textTransform: 'none',
                                fontWeight: 600,
                                fontSize: '1.1rem',
                                px: 3,
                                py: 1,
                                borderRadius: 1,
                                '&:hover': { bgcolor: 'action.hover' },
                            }}
                        >
                            Contact
                        </Button>

                        <IconButton
                            color={isLight ? 'default' : 'inherit'}
                            onClick={toggle}
                            aria-label="toggle theme"
                            sx={{ ml: 2, '&:hover': { bgcolor: 'action.hover' }, color: isLight ? 'text.primary' : 'inherit' }}
                        >
                            {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
                        </IconButton>
                    </Box>
                </Toolbar>
            </Box>
        </AppBar>
    )
}
