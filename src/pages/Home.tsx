import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import { useState } from 'react'
import { demoApi } from '../api/demoApi.ts'

export function HomePage() {
  const [message, setMessage] = useState<string>('')

  const handleFetch = async () => {
    const res = await demoApi.getHello()
    setMessage(res.message)
  }

  return (
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
  )
}


