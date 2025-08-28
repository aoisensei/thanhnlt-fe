import { Box, Grid, Stack, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { Person, Email, LocationOn, Cake } from '@mui/icons-material'
import { useTheme } from '../../hooks/useTheme'

export function About() {
  const { colors } = useTheme()

  const personalInfo = [
    { icon: <Person />, label: 'Name', value: 'Thanh NLT' },
    { icon: <Cake />, label: 'Age', value: '25 years' },
    { icon: <LocationOn />, label: 'Location', value: 'Ho Chi Minh City, Vietnam' },
    { icon: <Email />, label: 'Email', value: 'thanh.nlt@example.com' },
  ]

  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        py: { xs: 20, sm: 24, md: 28, lg: 32 },
        background: colors.aboutGradient,
        position: 'relative',
        overflow: 'hidden',
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
          opacity: colors.isDark ? 0.03 : 0.025,
          background: `
            radial-gradient(circle at 30% 30%, ${colors.accent} 0%, transparent 70%),
            radial-gradient(circle at 70% 70%, ${colors.accentSecondary} 0%, transparent 70%)
          `,
          zIndex: 0,
        }}
      />

      {/* Floating elements for modern feel */}
      <Box
        sx={{
          position: 'absolute',
          top: '15%',
          right: '20%',
          width: 120,
          height: 120,
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${colors.accent}15, ${colors.accentSecondary}15)`,
          filter: 'blur(25px)',
          zIndex: 0,
        }}
      />

      {/* Content Container - Full-width aware */}
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
              fontWeight: 800,
              color: colors.textPrimary,
              textAlign: 'center',
              mb: { xs: 8, sm: 10, md: 12 },
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -16,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 80,
                height: 4,
                background: colors.accentGradient,
                borderRadius: 2,
              },
            }}
          >
            About Me
          </Typography>
        </motion.div>

        <Grid container spacing={{ xs: 6, sm: 8, md: 10, lg: 12 }}>
          {/* About Text */}
          <Grid item xs={12} lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  p: { xs: 6, sm: 8, md: 10 },
                  height: '100%',
                  background: colors.cardBg,
                  borderRadius: 8,
                  border: `2px solid ${colors.borderPrimary}`,
                  transition: 'all 0.3s ease',
                  boxShadow: colors.isDark 
                    ? '0 4px 20px rgba(0,0,0,0.3)' 
                    : '0 4px 20px rgba(99, 102, 241, 0.08)',
                  '&:hover': {
                    background: colors.cardBgHover,
                    transform: 'translateY(-4px)',
                    boxShadow: colors.isDark 
                      ? '0 20px 40px rgba(0,0,0,0.4)' 
                      : '0 20px 40px rgba(99, 102, 241, 0.15)',
                  },
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
                    lineHeight: 1.8,
                    color: colors.textSecondary,
                    mb: { xs: 4, sm: 5 },
                    textAlign: { xs: 'left', sm: 'left' },
                  }}
                >
                  I'm a passionate Full-Stack Developer with over 3 years of experience in building 
                  modern web applications. I love turning complex problems into simple, beautiful, 
                  and intuitive solutions.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
                    lineHeight: 1.8,
                    color: colors.textSecondary,
                    mb: { xs: 4, sm: 5 },
                  }}
                >
                  When I'm not coding, you can find me exploring new technologies, contributing to 
                  open-source projects, or sharing knowledge with the developer community.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
                    lineHeight: 1.8,
                    color: colors.textSecondary,
                  }}
                >
                  I believe in writing clean, maintainable code and creating user experiences that 
                  make a difference.
                </Typography>
              </Box>
            </motion.div>
          </Grid>

          {/* Personal Info */}
          <Grid item xs={12} lg={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  p: { xs: 6, sm: 8, md: 10 },
                  height: '100%',
                  background: colors.cardBg,
                  borderRadius: 8,
                  border: `2px solid ${colors.borderPrimary}`,
                  transition: 'all 0.3s ease',
                  boxShadow: colors.isDark 
                    ? '0 4px 20px rgba(0,0,0,0.3)' 
                    : '0 4px 20px rgba(99, 102, 241, 0.08)',
                  '&:hover': {
                    background: colors.cardBgHover,
                    transform: 'translateY(-4px)',
                    boxShadow: colors.isDark 
                      ? '0 20px 40px rgba(0,0,0,0.4)' 
                      : '0 20px 40px rgba(99, 102, 241, 0.15)',
                  },
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.25rem' },
                    fontWeight: 700,
                    color: colors.textPrimary,
                    mb: { xs: 6, sm: 8 },
                    textAlign: { xs: 'center', lg: 'left' },
                  }}
                >
                  Personal Information
                </Typography>
                <Stack spacing={{ xs: 4, sm: 5 }}>
                  {personalInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Stack
                        direction="row"
                        spacing={{ xs: 4, sm: 5 }}
                        alignItems="center"
                        sx={{
                          p: { xs: 4, sm: 5 },
                          background: colors.cardBgSecondary,
                          borderRadius: 6,
                          border: `1px solid ${colors.borderSecondary}`,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            background: colors.cardBgTertiary,
                            borderColor: colors.accent,
                            transform: 'translateX(8px)',
                          },
                        }}
                      >
                        <Box
                          sx={{
                            color: colors.accent,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: { xs: 50, sm: 56 },
                            height: { xs: 50, sm: 56 },
                            background: colors.accentLight,
                            borderRadius: '50%',
                            transition: 'all 0.3s ease',
                            border: `2px solid ${colors.accent}30`,
                          }}
                        >
                          {info.icon}
                        </Box>
                        <Box sx={{ flex: 1 }}>
                          <Typography
                            variant="body2"
                            sx={{
                              color: colors.textTertiary,
                              fontSize: { xs: '0.875rem', sm: '1rem' },
                              fontWeight: 600,
                              textTransform: 'uppercase',
                              letterSpacing: '0.5px',
                              mb: 1,
                            }}
                          >
                            {info.label}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              color: colors.textPrimary,
                              fontWeight: 600,
                              fontSize: { xs: '1rem', sm: '1.125rem' },
                            }}
                          >
                            {info.value}
                          </Typography>
                        </Box>
                      </Stack>
                    </motion.div>
                  ))}
                </Stack>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
