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
      <RouterProvider router={appRouter} />
    </ThemeProvider>
  )
}


