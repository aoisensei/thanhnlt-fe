import { Button, Card, CardActions, CardContent, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import { demoApi } from '../api/demoApi.ts'
import { Hero } from '../components/landing/Hero.tsx'
import { Features } from '../components/landing/Features.tsx'
import { About } from '../components/landing/About.tsx'
import { SocialLinks } from '../components/landing/SocialLinks.tsx'
import { Footer } from '../components/landing/Footer.tsx'

export function HomePage() {
  const [message, setMessage] = useState<string>('')

  const handleFetch = async () => {
    const res = await demoApi.getHello()
    setMessage(res.message)
  }

  return (
    <Stack spacing={2}>
      <Hero />
      <About />
      <Features />
      <SocialLinks />

      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5">Welcome</Typography>
          <Typography color="text.secondary">This is a base project with MUI + Tailwind + Router + Zustand.</Typography>
          {message && (
            <Typography sx={{ mt: 2 }} color="success.main">API says: {message}</Typography>
          )}
        </CardContent>
        <CardActions>
          <Button variant="contained" onClick={handleFetch}>Call Demo API</Button>
        </CardActions>
      </Card>
      <Footer />
    </Stack>
  )
}


