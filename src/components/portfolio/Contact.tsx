import { Box, Button, Grid, Stack, TextField, Typography, useMediaQuery, useTheme as useMuiTheme } from '@mui/material'
import { motion } from 'framer-motion'
import { Send, Email, Phone, LocationOn } from '@mui/icons-material'
import { useState } from 'react'
import { useTheme } from '../../hooks/useTheme'

export function Contact() {
  const { colors } = useTheme()
  const muiTheme = useMuiTheme()
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'))
  const isTablet = useMediaQuery(muiTheme.breakpoints.down('md'))

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', message: '' })
  }

  const contactInfo = [
    {
      icon: <Email />,
      title: 'Email',
      value: 'thanh.nlt@example.com',
      description: 'Send me an email anytime',
    },
    {
      icon: <Phone />,
      title: 'Phone',
      value: '+84 123 456 789',
      description: 'Mon-Fri from 8am to 6pm',
    },
    {
      icon: <LocationOn />,
      title: 'Location',
      value: 'Ho Chi Minh City, Vietnam',
      description: 'Available for remote work',
    },
  ]

  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        py: { xs: 20, sm: 24, md: 28, lg: 32 },
        background: colors.contactGradient,
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
            radial-gradient(circle at 20% 80%, ${colors.accent} 0%, transparent 70%),
            radial-gradient(circle at 80% 40%, ${colors.accentSecondary} 0%, transparent 70%)
          `,
          zIndex: 0,
        }}
      />

      {/* Floating elements for modern feel */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          right: '15%',
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
            Get In Touch
          </Typography>
        </motion.div>

        <Grid container spacing={{ xs: 8, sm: 10, md: 12, lg: 12 }}>
          {/* Contact Form */}
          <Grid item xs={12} lg={7}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  p: { xs: 6, sm: 8, md: 10 },
                  background: colors.cardBg,
                  borderRadius: 8,
                  border: `2px solid ${colors.borderPrimary}`,
                  transition: 'all 0.3s ease',
                  boxShadow: colors.isDark 
                    ? '0 4px 20px rgba(0,0,0,0.3)' 
                    : '0 4px 20px rgba(99, 102, 241, 0.08)',
                  '&:hover': {
                    background: colors.cardBgHover,
                    boxShadow: colors.isDark 
                      ? '0 20px 40px rgba(0,0,0,0.4)' 
                      : '0 20px 40px rgba(99, 102, 241, 0.15)',
                    transform: 'translateY(-4px)',
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
                  Send me a message
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: colors.textSecondary,
                    mb: { xs: 5, sm: 6 },
                    lineHeight: 1.7,
                    fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
                  }}
                >
                  I'm always interested in hearing about new opportunities, interesting projects, 
                  or just want to say hello. Feel free to reach out!
                </Typography>

                <Box component="form" onSubmit={handleSubmit}>
                  <Stack spacing={{ xs: 4, sm: 5 }}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      size={isMobile ? 'medium' : 'medium'}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 6,
                          background: colors.cardBgSecondary,
                          '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: colors.accent,
                          },
                          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: colors.accent,
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: colors.textTertiary,
                        },
                        '& .MuiInputBase-input': {
                          color: colors.textPrimary,
                        },
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Your Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      size={isMobile ? 'medium' : 'medium'}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 6,
                          background: colors.cardBgSecondary,
                          '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: colors.accent,
                          },
                          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: colors.accent,
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: colors.textTertiary,
                        },
                        '& .MuiInputBase-input': {
                          color: colors.textPrimary,
                        },
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      multiline
                      rows={isMobile ? 4 : 5}
                      variant="outlined"
                      size={isMobile ? 'medium' : 'medium'}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 6,
                          background: colors.cardBgSecondary,
                          '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: colors.accent,
                          },
                          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: colors.accent,
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: colors.textTertiary,
                        },
                        '& .MuiInputBase-input': {
                          color: colors.textPrimary,
                        },
                      }}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      size={isMobile ? 'large' : 'large'}
                      startIcon={<Send />}
                      sx={{
                        background: colors.accentGradient,
                        color: '#ffffff',
                        '&:hover': { 
                          background: colors.accentGradientHover,
                          transform: 'translateY(-3px)',
                          boxShadow: `0 12px 30px ${colors.accent}50`,
                        },
                        py: { xs: 2, sm: 2.5 },
                        borderRadius: 6,
                        textTransform: 'none',
                        fontSize: { xs: '1.125rem', sm: '1.25rem' },
                        fontWeight: 600,
                        alignSelf: { xs: 'stretch', sm: 'flex-start' },
                        transition: 'all 0.3s ease',
                        boxShadow: `0 8px 25px ${colors.accent}30`,
                      }}
                    >
                      Send Message
                    </Button>
                  </Stack>
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} lg={5}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Stack spacing={{ xs: 5, sm: 6 }}>
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Box
                      sx={{
                        p: { xs: 5, sm: 6, md: 7 },
                        background: colors.cardBg,
                        borderRadius: 8,
                        border: `2px solid ${colors.borderPrimary}`,
                        transition: 'all 0.3s ease',
                        boxShadow: colors.isDark 
                          ? '0 4px 20px rgba(0,0,0,0.3)' 
                          : '0 4px 20px rgba(99, 102, 241, 0.08)',
                        '&:hover': {
                          background: colors.cardBgHover,
                          borderColor: colors.accent,
                          transform: 'translateX(8px)',
                          boxShadow: colors.isDark 
                            ? '0 20px 40px rgba(0,0,0,0.4)' 
                            : '0 20px 40px rgba(99, 102, 241, 0.15)',
                        },
                      }}
                    >
                      <Stack direction="row" spacing={{ xs: 4, sm: 5 }} alignItems="flex-start">
                        <Box
                          sx={{
                            color: colors.accent,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: { xs: 56, sm: 64 },
                            height: { xs: 56, sm: 64 },
                            background: colors.accentLight,
                            borderRadius: '50%',
                            flexShrink: 0,
                            transition: 'all 0.3s ease',
                            border: `2px solid ${colors.accent}30`,
                          }}
                        >
                          {info.icon}
                        </Box>
                        <Box sx={{ flex: 1 }}>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 700,
                              color: colors.textPrimary,
                              mb: { xs: 1, sm: 1.5 },
                              fontSize: { xs: '1.125rem', sm: '1.25rem', md: '1.375rem' },
                            }}
                          >
                            {info.title}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              color: colors.accent,
                              fontWeight: 600,
                              mb: { xs: 1, sm: 1.5 },
                              fontSize: { xs: '1rem', sm: '1.125rem' },
                            }}
                          >
                            {info.value}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: colors.textTertiary,
                              fontSize: { xs: '0.875rem', sm: '1rem' },
                              lineHeight: 1.5,
                            }}
                          >
                            {info.description}
                          </Typography>
                        </Box>
                      </Stack>
                    </Box>
                  </motion.div>
                ))}

                {/* Additional Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1 }}
                  viewport={{ once: true }}
                >
                  <Box
                    sx={{
                      p: { xs: 5, sm: 6, md: 7 },
                      background: colors.cardBgSecondary,
                      borderRadius: 8,
                      border: `2px solid ${colors.borderSecondary}`,
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                      boxShadow: colors.isDark 
                        ? '0 4px 20px rgba(0,0,0,0.3)' 
                        : '0 4px 20px rgba(99, 102, 241, 0.08)',
                      '&:hover': {
                        background: colors.cardBgTertiary,
                        borderColor: colors.accent,
                        boxShadow: colors.isDark 
                          ? '0 20px 40px rgba(0,0,0,0.4)' 
                          : '0 20px 40px rgba(99, 102, 241, 0.15)',
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: colors.textPrimary,
                        mb: { xs: 3, sm: 4 },
                        fontSize: { xs: '1.125rem', sm: '1.25rem', md: '1.375rem' },
                      }}
                    >
                      Let's work together!
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: colors.textSecondary,
                        lineHeight: 1.6,
                        fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' },
                      }}
                    >
                      I'm currently available for freelance work and full-time opportunities. 
                      If you have a project that needs some creative thinking, I'd love to hear about it.
                    </Typography>
                  </Box>
                </motion.div>
              </Stack>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
