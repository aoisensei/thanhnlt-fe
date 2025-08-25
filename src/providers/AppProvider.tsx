import { CssBaseline, GlobalStyles } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { RouterProvider } from 'react-router-dom'
import { useThemeMode } from '../store/themeStore.ts'
import { appRouter } from '../routes/index.tsx'
import { lightTheme, darkTheme } from '../config/theme.ts'

export function AppProvider() {
  const { mode } = useThemeMode()

  return (
    <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
      <CssBaseline />
      <GlobalStyles styles={{ ':root': { colorScheme: mode } }} />
      <div style={{
        background: 'linear-gradient(180deg, rgba(99,102,241,0.06) 0%, rgba(59,130,246,0.06) 30%, rgba(236,72,153,0.06) 100%)',
        minHeight: '100dvh'
      }}>
        <RouterProvider router={appRouter} />
      </div>
    </ThemeProvider>
  )
}


