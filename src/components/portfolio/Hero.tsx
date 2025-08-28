import { Box, Button, Stack, Typography, useMediaQuery, useTheme as useMuiTheme } from '@mui/material'
import { motion } from 'framer-motion'
import { Download, Mail } from '@mui/icons-material'
import { useTheme } from '../../hooks/useTheme'

export function Hero() {
  const { colors } = useTheme()
  const muiTheme = useMuiTheme()
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'))
  const isTablet = useMediaQuery(muiTheme.breakpoints.down('md'))

  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        // Layered gradient + subtle dots pattern
        backgroundImage: `
          radial-gradient(circle at 20px 20px, ${colors.isDark ? 'rgba(99, 102, 241, 0.12)' : 'rgba(139, 92, 246, 0.10)'} 2px, transparent 2px),
          ${colors.heroGradient}
        `,
        backgroundSize: '40px 40px, 100% 100%',
        backgroundPosition: '0 0, center',
        py: { xs: 16, sm: 20, md: 24, lg: 32 },
        position: 'relative',
        overflow: 'hidden',
        // Gentle animated pattern
        animation: 'movePattern 24s linear infinite',
        '@keyframes movePattern': {
          '0%': { backgroundPosition: '0 0, center' },
          '100%': { backgroundPosition: '40px 40px, center' },
        },
      }}
    >
      {/* Modern SaaS-style background decorations */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: colors.isDark ? 0.08 : 0.06,
          background: `
            radial-gradient(circle at 20% 80%, ${colors.accent} 0%, transparent 60%),
            radial-gradient(circle at 80% 20%, ${colors.accentSecondary} 0%, transparent 60%)
          `,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Floating geometric shapes for modern SaaS feel */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '15%',
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${colors.accent}20, ${colors.accentSecondary}20)`,
          filter: 'blur(40px)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          left: '10%',
          width: 150,
          height: 150,
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${colors.accentSecondary}20, ${colors.accent}20)`,
          filter: 'blur(30px)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Content Container - Centered but full-width aware */}
      <Box
        sx={{
          width: '100%',
          maxWidth: '1400px',
          mx: 'auto',
          px: { xs: 4, sm: 6, md: 8, lg: 12 },
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Stack
          direction={{ xs: 'column', lg: 'row' }}
          spacing={{ xs: 8, sm: 10, md: 12, lg: 16 }}
          alignItems="center"
          justifyContent="space-between"
          sx={{ minHeight: { xs: '70vh', md: 'auto' } }}
        >
          {/* Avatar with modern styling */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Box
              sx={{
                width: { xs: 180, sm: 220, md: 280, lg: 320 },
                height: { xs: 180, sm: 220, md: 280, lg: 320 },
                borderRadius: '50%',
                overflow: 'hidden',
                border: `6px solid ${colors.accentLight}`,
                boxShadow: `0 25px 50px ${colors.isDark ? 'rgba(0,0,0,0.5)' : 'rgba(99, 102, 241, 0.15)'}`,
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: '50%',
                  background: `linear-gradient(45deg, ${colors.accent}20, ${colors.accentSecondary}20)`,
                  zIndex: 1,
                },
              }}
            >
              <img
                src="/src/assets/thanhnlt-high-resolution-logo.png"
                alt="Avatar"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  position: 'relative',
                  zIndex: 0,
                }}
              />
            </Box>
          </motion.div>

          {/* Content with modern SaaS typography */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            style={{ 
              flex: 1, 
              textAlign: isMobile ? 'center' : isTablet ? 'center' : 'left',
              maxWidth: isMobile ? '100%' : '700px',
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem', lg: '5rem' },
                fontWeight: 800,
                color: colors.textPrimary,
                mb: { xs: 2, sm: 3 },
                textAlign: { xs: 'center', lg: 'left' },
                lineHeight: 1.1,
                textShadow: colors.isDark ? '0 2px 4px rgba(0,0,0,0.3)' : 'none',
                background: colors.accentGradient,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Thanh NLT
            </Typography>
            
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem', lg: '2rem' },
                color: colors.textSecondary,
                mb: { xs: 3, sm: 4, md: 5 },
                fontWeight: 500,
                textAlign: { xs: 'center', lg: 'left' },
                lineHeight: 1.3,
              }}
            >
              Full-Stack Developer & UI/UX Enthusiast
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
                color: colors.textSecondary,
                mb: { xs: 4, sm: 5, md: 6 },
                maxWidth: '600px',
                textAlign: { xs: 'center', lg: 'left' },
                mx: { xs: 'auto', lg: 0 },
                lineHeight: 1.7,
                opacity: 0.9,
              }}
            >
              Passionate about creating beautiful, functional, and user-friendly web applications.
              Specialized in modern web technologies and cloud solutions.
            </Typography>

            {/* Modern CTA Buttons with gradient */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 3, sm: 4 }}
              justifyContent={{ xs: 'center', lg: 'flex-start' }}
              sx={{ 
                flexWrap: 'wrap',
                gap: { xs: 3, sm: 4 },
              }}
            >
              <Button
                variant="contained"
                size={isMobile ? 'large' : 'large'}
                startIcon={<Download />}
                sx={{
                  background: colors.accentGradient,
                  color: '#ffffff',
                  '&:hover': { 
                    background: colors.accentGradientHover,
                    transform: 'translateY(-3px)',
                    boxShadow: `0 12px 30px ${colors.accent}50`,
                  },
                  px: { xs: 4, sm: 6 },
                  py: { xs: 1.5, sm: 2 },
                  borderRadius: 4,
                  textTransform: 'none',
                  fontSize: { xs: '1.1rem', sm: '1.25rem' },
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  minWidth: { xs: '160px', sm: '180px' },
                  boxShadow: `0 8px 25px ${colors.accent}30`,
                }}
              >
                Download CV
              </Button>
              
              <Button
                variant="outlined"
                size={isMobile ? 'large' : 'large'}
                startIcon={<Mail />}
                sx={{
                  borderColor: colors.accent,
                  color: colors.accent,
                  borderWidth: 2,
                  '&:hover': {
                    borderColor: colors.accentHover,
                    background: `${colors.accent}10`,
                    transform: 'translateY(-3px)',
                    boxShadow: `0 12px 30px ${colors.accent}30`,
                  },
                  px: { xs: 4, sm: 6 },
                  py: { xs: 1.5, sm: 2 },
                  borderRadius: 4,
                  textTransform: 'none',
                  fontSize: { xs: '1.1rem', sm: '1.25rem' },
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  minWidth: { xs: '160px', sm: '180px' },
                }}
              >
                Contact Me
              </Button>
            </Stack>
          </motion.div>
        </Stack>
      </Box>
    </Box>
  )
}
