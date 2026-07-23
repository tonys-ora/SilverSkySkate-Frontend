import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button, Stack, Typography } from '@mui/material'

import { ROUTES } from '@/configs'

const NotFound: FC = () => {
  const navigate = useNavigate()

  return (
    <Stack
      sx={{
        minHeight: 'calc(100vh - 150px)',
        p: 3
      }}
      alignItems='center'
      justifyContent='center'
    >
      <Stack
        sx={{
          maxWidth: { md: 500 },
          width: '100%',
          my: 5
        }}
        alignItems='center'
        gap={1}
        textAlign='center'
      >
        <Typography component='h2' variant='h3' fontWeight='bold'>
          404. Not Found Page.
        </Typography>
        <Typography></Typography>
        <Button variant='contained' aria-label='Back to Home' onClick={() => navigate(ROUTES.HOME)}>
          Back to Home
        </Button>
      </Stack>
    </Stack>
  )
}

export default NotFound
