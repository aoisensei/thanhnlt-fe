import { Box, Container, Link, Stack, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

export function Footer() {
  return (
    <Box component="footer" sx={{ borderTop: 1, borderColor: 'divider', mt: 4, py: 2, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center" justifyContent="space-between">
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} designed by ThanhNLT.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Link component={RouterLink} to="/" underline="hover" color="inherit">Home</Link>
            <Link href="https://github.com/aoisensei" target="_blank" underline="hover" color="inherit">GitHub</Link>
            <Link href="mailto:thanhalba1109@gmail.com" underline="hover" color="inherit">Email</Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}


