import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Stack, Typography, useMediaQuery, useTheme as useMuiTheme } from '@mui/material'
import { motion } from 'framer-motion'
import { GitHub, Launch, Code, Storage, Cloud } from '@mui/icons-material'
import { useTheme } from '../../hooks/useTheme'
import reactLogo from '../../assets/react.svg'

export function Projects() {
  const { colors } = useTheme()
  const muiTheme = useMuiTheme()
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'))

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, product management, payment integration, and admin dashboard.',
      image: reactLogo,
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/example/ecommerce',
      live: 'https://ecommerce-demo.com',
      category: 'Full-Stack',
      icon: <Code />,
    },
    {
      id: 2,
      title: 'Cloud Management Dashboard',
      description: 'A comprehensive cloud infrastructure management tool supporting AWS, Azure, and Google Cloud. Provides monitoring, cost analysis, and resource optimization.',
      image: reactLogo,
      technologies: ['React', 'TypeScript', 'AWS SDK', 'Azure API'],
      github: 'https://github.com/example/cloud-dashboard',
      live: 'https://cloud-dashboard-demo.com',
      category: 'Cloud',
      icon: <Cloud />,
    },
    {
      id: 3,
      title: 'Data Analytics Platform',
      description: 'Real-time data visualization and analytics platform with interactive charts, data processing pipelines, and customizable dashboards for business intelligence.',
      image: reactLogo,
      technologies: ['React', 'D3.js', 'Python', 'PostgreSQL'],
      github: 'https://github.com/example/analytics',
      live: 'https://analytics-demo.com',
      category: 'Data',
      icon: <Storage />,
    },
    {
      id: 4,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.',
      image: reactLogo,
      technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
      github: 'https://github.com/example/task-manager',
      live: 'https://task-manager-demo.com',
      category: 'Productivity',
      icon: <Code />,
    },
  ]

  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        py: { xs: 20, sm: 24, md: 28, lg: 32 },
        background: colors.projectsGradient,
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
            radial-gradient(circle at 80% 20%, ${colors.accent} 0%, transparent 70%),
            radial-gradient(circle at 20% 60%, ${colors.accentSecondary} 0%, transparent 70%)
          `,
          zIndex: 0,
        }}
      />

      {/* Floating elements for modern feel */}
      <Box
        sx={{
          position: 'absolute',
          top: '30%',
          right: '25%',
          width: 150,
          height: 150,
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${colors.accent}15, ${colors.accentSecondary}15)`,
          filter: 'blur(30px)',
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
            Featured Projects
          </Typography>
        </motion.div>

        {/* Projects Grid */}
        <Grid container spacing={{ xs: 6, sm: 8, md: 8, lg: 10 }}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -15 }}
              >
                <Card
                  elevation={0}
                  sx={{
                    height: '100%',
                    background: colors.cardBg,
                    border: `2px solid ${colors.borderPrimary}`,
                    borderRadius: 8,
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    boxShadow: colors.isDark 
                      ? '0 4px 20px rgba(0,0,0,0.3)' 
                      : '0 4px 20px rgba(99, 102, 241, 0.08)',
                    '&:hover': {
                      boxShadow: colors.isDark 
                        ? '0 25px 50px rgba(0,0,0,0.4)' 
                        : '0 25px 50px rgba(99, 102, 241, 0.15)',
                      borderColor: colors.accent,
                      transform: 'translateY(-15px)',
                    },
                  }}
                >
                  {/* Project Image */}
                  <CardMedia
                    component="img"
                    height={isMobile ? 180 : 220}
                    image={project.image}
                    alt={project.title}
                    sx={{
                      background: colors.cardBgSecondary,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                    }}
                  />

                  {/* Project Content */}
                  <CardContent sx={{ p: { xs: 4, sm: 5, md: 6 } }}>
                    <Stack direction="row" alignItems="center" spacing={2} mb={3}>
                      <Box
                        sx={{
                          color: colors.accent,
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        {project.icon}
                      </Box>
                      <Typography
                        variant="caption"
                        sx={{
                          color: colors.textTertiary,
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          fontSize: { xs: '0.75rem', sm: '0.875rem' },
                        }}
                      >
                        {project.category}
                      </Typography>
                    </Stack>

                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        color: colors.textPrimary,
                        mb: { xs: 2.5, sm: 3 },
                        fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
                        lineHeight: 1.3,
                      }}
                    >
                      {project.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: colors.textSecondary,
                        lineHeight: 1.7,
                        mb: { xs: 3, sm: 4 },
                        fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' },
                        opacity: 0.9,
                      }}
                    >
                      {project.description}
                    </Typography>

                    {/* Technologies */}
                    <Box sx={{ mb: { xs: 3, sm: 4 } }}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: colors.textTertiary,
                          fontWeight: 600,
                          mb: 2,
                          fontSize: { xs: '0.875rem', sm: '1rem' },
                        }}
                      >
                        Technologies used:
                      </Typography>
                      <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
                        {project.technologies.map((tech) => (
                          <Box
                            key={tech}
                            sx={{
                              px: { xs: 2, sm: 2.5 },
                              py: { xs: 0.5, sm: 0.75 },
                              background: colors.accentLight,
                              color: colors.accent,
                              borderRadius: 6,
                              fontSize: { xs: '0.75rem', sm: '0.875rem' },
                              fontWeight: 600,
                              border: `1px solid ${colors.accent}30`,
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                background: colors.accent,
                                color: '#ffffff',
                                transform: 'scale(1.05)',
                              },
                            }}
                          >
                            {tech}
                          </Box>
                        ))}
                      </Stack>
                    </Box>
                  </CardContent>

                  {/* Project Actions */}
                  <CardActions sx={{ p: { xs: 4, sm: 5 }, pt: 0 }}>
                    <Stack 
                      direction={{ xs: 'column', sm: 'row' }} 
                      spacing={{ xs: 2, sm: 2.5 }} 
                      sx={{ width: '100%' }}
                    >
                      <Button
                        variant="outlined"
                        size={isMobile ? 'large' : 'large'}
                        startIcon={<GitHub />}
                        href={project.github}
                        target="_blank"
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
                          flex: 1,
                          textTransform: 'none',
                          fontSize: { xs: '0.875rem', sm: '1rem' },
                          fontWeight: 600,
                          py: { xs: 1.5, sm: 2 },
                          borderRadius: 6,
                        }}
                      >
                        View Code
                      </Button>
                      <Button
                        variant="contained"
                        size={isMobile ? 'large' : 'large'}
                        startIcon={<Launch />}
                        href={project.live}
                        target="_blank"
                        sx={{
                          background: colors.accentGradient,
                          color: '#ffffff',
                          '&:hover': { 
                            background: colors.accentGradientHover,
                            transform: 'translateY(-3px)',
                            boxShadow: `0 12px 30px ${colors.accent}50`,
                          },
                          flex: 1,
                          textTransform: 'none',
                          fontSize: { xs: '0.875rem', sm: '1rem' },
                          fontWeight: 600,
                          py: { xs: 1.5, sm: 2 },
                          borderRadius: 6,
                        }}
                      >
                        Live Demo
                      </Button>
                    </Stack>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              mt: { xs: 12, sm: 16, md: 16 },
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: colors.textPrimary,
                mb: { xs: 3, sm: 4 },
                fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' },
              }}
            >
              Want to see more?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: colors.textSecondary,
                mb: { xs: 4, sm: 5 },
                maxWidth: '700px',
                mx: 'auto',
                fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
                lineHeight: 1.7,
              }}
            >
              Check out my GitHub profile for more projects and contributions to open-source software.
            </Typography>
            <Button
              variant="contained"
              size={isMobile ? 'large' : 'large'}
              startIcon={<GitHub />}
              href="https://github.com/example"
              target="_blank"
              sx={{
                background: colors.accentGradient,
                color: '#ffffff',
                '&:hover': { 
                  background: colors.accentGradientHover,
                  transform: 'translateY(-3px)',
                  boxShadow: `0 12px 30px ${colors.accent}50`,
                },
                px: { xs: 5, sm: 6 },
                py: { xs: 2, sm: 2.5 },
                borderRadius: 6,
                textTransform: 'none',
                fontSize: { xs: '1.125rem', sm: '1.25rem' },
                fontWeight: 600,
                transition: 'all 0.3s ease',
              }}
            >
              View All Projects
            </Button>
          </Box>
        </motion.div>
      </Box>
    </Box>
  )
}
