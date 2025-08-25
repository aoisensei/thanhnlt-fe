import { createTheme } from '@mui/material/styles'

export const lightTheme = createTheme({
  cssVariables: true,
  colorSchemes: { light: true },
  palette: { mode: 'light' },
  typography: { fontFamily: 'Inter, Roboto, Helvetica, Arial, sans-serif' },
})

export const darkTheme = createTheme({
  cssVariables: true,
  colorSchemes: { dark: true },
  palette: { mode: 'dark' },
  typography: { fontFamily: 'Inter, Roboto, Helvetica, Arial, sans-serif' },
})


