import { AppBar, Box, IconButton, Toolbar, Button, Menu, MenuItem, ListItemIcon, ListItemText, Fade, useMediaQuery } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import WorkOutlineRoundedIcon from '@mui/icons-material/WorkOutlineRounded'
import ContactMailRoundedIcon from '@mui/icons-material/ContactMailRounded'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import { Link as RouterLink } from 'react-router-dom'
import logo from '../assets/thanhnlt-high-resolution-logo.png'
import { useThemeMode } from '../store/themeStore.ts'
import { useTheme } from '@mui/material/styles'
import { useState } from 'react'

export function Navbar() {
    const { mode, toggle } = useThemeMode()
    const theme = useTheme()
    const isLight = theme.palette.mode === 'light'
    const isSmall = useMediaQuery(theme.breakpoints.down('md'))
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const menuOpen = Boolean(anchorEl)

    const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleCloseMenu = () => {
        setAnchorEl(null)
    }

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
                        {/* Desktop Menu - Show individual buttons */}
                        {!isSmall && (
                            <>
                                <Button
                                    component={RouterLink}
                                    to="/"
                                    color={isLight ? 'inherit' : 'inherit'}
                                    startIcon={<HomeRoundedIcon />}
                                    sx={{
                                        color: isLight ? 'text.primary' : 'inherit',
                                        textTransform: 'none',
                                        fontWeight: 600,
                                        fontSize: '1rem',
                                        px: 2,
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
                                    startIcon={<WorkOutlineRoundedIcon />}
                                    sx={{
                                        color: isLight ? 'text.primary' : 'inherit',
                                        textTransform: 'none',
                                        fontWeight: 600,
                                        fontSize: '1rem',
                                        px: 2,
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
                                    startIcon={<ContactMailRoundedIcon />}
                                    sx={{
                                        color: isLight ? 'text.primary' : 'inherit',
                                        textTransform: 'none',
                                        fontWeight: 600,
                                        fontSize: '1rem',
                                        px: 2,
                                        py: 1,
                                        borderRadius: 1,
                                        '&:hover': { bgcolor: 'action.hover' },
                                    }}
                                >
                                    Contact
                                </Button>
                            </>
                        )}

                        {/* Theme Toggle Button - Always visible */}
                        <IconButton
                            color={isLight ? 'default' : 'inherit'}
                            aria-label="toggle theme"
                            onClick={toggle}
                            sx={{ 
                                '&:hover': { bgcolor: 'action.hover' }, 
                                color: isLight ? 'text.primary' : 'inherit',
                                ml: isSmall ? 0 : 1
                            }}
                        >
                            {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
                        </IconButton>

                        {/* Mobile Menu Button */}
                        {isSmall && (
                            <IconButton
                                color={isLight ? 'default' : 'inherit'}
                                aria-label="open menu"
                                onClick={handleOpenMenu}
                                sx={{ '&:hover': { bgcolor: 'action.hover' }, color: isLight ? 'text.primary' : 'inherit' }}
                            >
                                <MenuRoundedIcon />
                            </IconButton>
                        )}

                        {/* Mobile Menu Dropdown */}
                        {isSmall && (
                            <Menu
                                anchorEl={anchorEl}
                                open={menuOpen}
                                onClose={handleCloseMenu}
                                TransitionComponent={Fade}
                                TransitionProps={{ timeout: 180 }}
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                                PaperProps={{ sx: { mt: 1, minWidth: 180, borderRadius: 1.5 } }}
                            >
                                <MenuItem component={RouterLink} to="/" onClick={handleCloseMenu}>
                                    <ListItemIcon>
                                        <HomeRoundedIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText primary="Home" />
                                </MenuItem>
                                <MenuItem component={RouterLink} to="/work" onClick={handleCloseMenu}>
                                    <ListItemIcon>
                                        <WorkOutlineRoundedIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText primary="Work" />
                                </MenuItem>
                                <MenuItem component={RouterLink} to="/contact" onClick={handleCloseMenu}>
                                    <ListItemIcon>
                                        <ContactMailRoundedIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText primary="Contact" />
                                </MenuItem>
                            </Menu>
                        )}
                    </Box>
                </Toolbar>
            </Box>
        </AppBar>
    )
}
