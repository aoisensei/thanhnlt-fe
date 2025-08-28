import { Box, Grid, Typography, useMediaQuery, useTheme as useMuiTheme } from '@mui/material'
import { motion } from 'framer-motion'
import {
  Code,
  Storage,
  Cloud,
  GitHub,
  Api,
  Security,
  Speed,
  Brush,
  Build,
} from '@mui/icons-material'
import DockerLogo from '../../assets/docker-svgrepo-com.svg'
import ReactLogo from '../../assets/react.svg'
import { useTheme } from '../../hooks/useTheme'

export function Skills() {
  const { colors } = useTheme()
  const muiTheme = useMuiTheme()
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'))
  const isTablet = useMediaQuery(muiTheme.breakpoints.down('md'))

  const skills = [
    { name: 'React', icon: <img src={ReactLogo} alt="React" width={40} />, category: 'Frontend', color: '#61dafb' },
    { name: 'TypeScript', icon: <Code />, category: 'Language', color: '#3178c6' },
    { name: 'Node.js', icon: <Code />, category: 'Backend', color: '#339933' },
    { name: '.NET', icon: <Build />, category: 'Backend', color: '#512bd4' },
    { name: 'SQL', icon: <Storage />, category: 'Database', color: '#336791' },
    { name: 'MongoDB', icon: <Storage />, category: 'Database', color: '#47a248' },
    { name: 'AWS', icon: <Cloud />, category: 'Cloud', color: '#ff9900' },
    { name: 'Azure', icon: <Cloud />, category: 'Cloud', color: '#0089d6' },
    { name: 'Git', icon: <GitHub />, category: 'Version Control', color: '#f05032' },
    { name: 'Docker', icon: <img src={DockerLogo} alt="Docker" width={40} />, category: 'DevOps', color: '#2496ed' },
    { name: 'REST API', icon: <Api />, category: 'Backend', color: '#ff6b6b' },
    { name: 'GraphQL', icon: <Api />, category: 'Backend', color: '#e535ab' },
    { name: 'Security', icon: <Security />, category: 'Security', color: '#ff6b35' },
    { name: 'Performance', icon: <Speed />, category: 'Optimization', color: '#4ecdc4' },
    { name: 'UI/UX', icon: <Brush />, category: 'Design', color: '#a8e6cf' },
    { name: 'Testing', icon: <Build />, category: 'Quality', color: '#ff8b94' },
  ]

  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        py: { xs: 20, sm: 24, md: 28, lg: 32 },
        background: colors.skillsGradient,
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
          opacity: colors.isDark ? 0.02 : 0.015,
          background: `
            radial-gradient(circle at 70% 70%, ${colors.accent} 0%, transparent 70%),
            radial-gradient(circle at 20% 80%, ${colors.accentSecondary} 0%, transparent 70%)
          `,
          zIndex: 0,
        }}
      />

      {/* Floating elements for modern feel */}
      <Box
        sx={{
          position: 'absolute',
          top: '25%',
          left: '15%',
          width: 100,
          height: 100,
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${colors.accent}15, ${colors.accentSecondary}15)`,
          filter: 'blur(20px)',
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
            Skills & Technologies
          </Typography>
        </motion.div>

        {/* Skills Grid */}
        <Grid container spacing={{ xs: 3, sm: 4, md: 5, lg: 6 }}>
          {skills.map((skill, index) => (
            <Grid item xs={6} sm={4} md={3} lg={3} key={skill.name}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Box
                  sx={{
                    p: { xs: 4, sm: 5, md: 6 },
                    height: '100%',
                    textAlign: 'center',
                    background: colors.cardBg,
                    borderRadius: 8,
                    border: `2px solid ${colors.borderPrimary}`,
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    boxShadow: colors.isDark 
                      ? '0 4px 20px rgba(0,0,0,0.3)' 
                      : '0 4px 20px rgba(99, 102, 241, 0.08)',
                    '&:hover': {
                      borderColor: skill.color,
                      background: colors.cardBgHover,
                      boxShadow: colors.isDark 
                        ? '0 20px 40px rgba(0,0,0,0.4)' 
                        : '0 20px 40px rgba(99, 102, 241, 0.15)',
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: { xs: 60, sm: 70, md: 80 },
                      height: { xs: 60, sm: 70, md: 80 },
                      mx: 'auto',
                      mb: { xs: 3, sm: 4 },
                      borderRadius: '50%',
                      background: `${skill.color}15`,
                      color: skill.color,
                      fontSize: { xs: '1.75rem', sm: '2rem' },
                      transition: 'all 0.3s ease',
                      border: `2px solid ${skill.color}30`,
                    }}
                  >
                    {skill.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: colors.textPrimary,
                      mb: { xs: 1.5, sm: 2 },
                      fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
                      lineHeight: 1.2,
                    }}
                  >
                    {skill.name}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: colors.textTertiary,
                      fontSize: { xs: '0.75rem', sm: '0.875rem' },
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      lineHeight: 1.2,
                    }}
                  >
                    {skill.category}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              mt: { xs: 12, sm: 16, md: 16 },
              p: { xs: 6, sm: 8, md: 10 },
              background: colors.cardBg,
              borderRadius: 8,
              border: `2px solid ${colors.borderPrimary}`,
              textAlign: 'center',
              transition: 'all 0.3s ease',
              boxShadow: colors.isDark 
                ? '0 4px 20px rgba(0,0,0,0.3)' 
                : '0 4px 20px rgba(99, 102, 241, 0.08)',
              '&:hover': {
                background: colors.cardBgHover,
                boxShadow: colors.isDark 
                  ? '0 20px 40px rgba(0,0,0,0.4)' 
                  : '0 20px 40px rgba(99, 102, 241, 0.15)',
              },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: colors.textPrimary,
                mb: { xs: 4, sm: 5 },
                fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
              }}
            >
              Technical Expertise
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: colors.textSecondary,
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.7,
                fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
              }}
            >
              I specialize in modern web development technologies with a focus on creating scalable, 
              maintainable applications. My expertise spans from frontend frameworks to cloud infrastructure, 
              ensuring end-to-end solutions that deliver exceptional user experiences.
            </Typography>
          </Box>
        </motion.div>
      </Box>
    </Box>
  )
}
