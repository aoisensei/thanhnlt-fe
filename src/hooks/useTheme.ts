import { useThemeMode } from '../store/themeStore'

export const useTheme = () => {
  const { mode } = useThemeMode()
  
  const isDark = mode === 'dark'
  
  return {
    mode,
    isDark,
    colors: {
      // Modern SaaS Color Palette
      bgPrimary: isDark ? '#0f172a' : '#FFFFFF',
      bgSecondary: isDark ? '#1e293b' : '#F8F4FC',
      bgTertiary: isDark ? '#334155' : '#F0E8F8',
      bgQuaternary: isDark ? '#475569' : '#E8E0F0',
      
      // Text colors - Modern contrast
      textPrimary: isDark ? '#f1f5f9' : '#1A1A1A',
      textSecondary: isDark ? '#cbd5e1' : '#6C6C6C',
      textTertiary: isDark ? '#94a3b8' : '#8A8A8A',
      
      // Accent colors - Modern purple/blue palette
      accent: '#6366f1', // Modern indigo
      accentHover: '#4f46e5',
      accentLight: isDark ? '#1e1b4b' : '#EEF2FF',
      accentSecondary: '#8b5cf6', // Purple
      accentSecondaryHover: '#7c3aed',
      
      // Card colors - Đậm màu hơn cho light mode
      cardBg: isDark ? '#1e293b' : '#FFFFFF',
      cardBgHover: isDark ? '#334155' : '#F8F4FC',
      cardBgSecondary: isDark ? '#334155' : '#F8F4FC',
      cardBgTertiary: isDark ? '#475569' : '#F0E8F8',
      
      // Border colors - Đậm màu hơn cho light mode
      borderPrimary: isDark ? '#334155' : '#E2E8F0',
      borderSecondary: isDark ? '#475569' : '#CBD5E1',
      borderAccent: isDark ? '#6366f1' : '#6366f1',
      
      // Glassmorphism colors - Đậm màu hơn cho light mode
      glassBg: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.8)',
      glassBgHover: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.9)',
      glassBgSecondary: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(255, 255, 255, 0.6)',
      glassBorder: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(99, 102, 241, 0.15)',
      glassBorderHover: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(99, 102, 241, 0.25)',
      
      // Gradient backgrounds for full-width sections
      heroGradient: isDark 
        ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
        : 'linear-gradient(135deg, #FFFFFF 0%, #F8F4FC 50%, #F0E8F8 100%)',
      
      aboutGradient: isDark
        ? 'linear-gradient(135deg, #1e293b 0%, #334155 100%)'
        : 'linear-gradient(135deg, #F8F4FC 0%, #F0E8F8 100%)',
      
      skillsGradient: isDark
        ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
        : 'linear-gradient(135deg, #FFFFFF 0%, #F8F4FC 100%)',
      
      projectsGradient: isDark
        ? 'linear-gradient(135deg, #1e293b 0%, #334155 100%)'
        : 'linear-gradient(135deg, #F8F4FC 0%, #F0E8F8 100%)',
      
      contactGradient: isDark
        ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
        : 'linear-gradient(135deg, #FFFFFF 0%, #F8F4FC 100%)',
      
      // Subtle accent gradients for visual depth
      accentGradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
      accentGradientHover: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
      
      // Theme state
      isDark,
    },
    
    // CSS Reset and Box-sizing
    globalStyles: {
      '*': {
        boxSizing: 'border-box',
      },
      'html, body': {
        overflowX: 'hidden',
        maxWidth: '100%',
        margin: 0,
        padding: 0,
      },
      'body': {
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      },
    }
  }
}
