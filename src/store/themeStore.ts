import { create } from 'zustand'

type ThemeMode = 'light' | 'dark'

type ThemeState = {
  mode: ThemeMode
  toggle: () => void
  setMode: (mode: ThemeMode) => void
}

const getInitialMode = (): ThemeMode => {
  const persisted = localStorage.getItem('themeMode') as ThemeMode | null
  if (persisted === 'light' || persisted === 'dark') return persisted
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  return prefersDark ? 'dark' : 'light'
}

export const useThemeMode = create<ThemeState>((set, get) => ({
  mode: getInitialMode(),
  toggle: () => {
    const next = get().mode === 'light' ? 'dark' : 'light'
    localStorage.setItem('themeMode', next)
    set({ mode: next })
  },
  setMode: (mode) => {
    localStorage.setItem('themeMode', mode)
    set({ mode })
  },
}))


