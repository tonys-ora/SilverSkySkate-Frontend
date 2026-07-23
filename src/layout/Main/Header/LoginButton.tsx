import { memo } from 'react'

import Button from '@mui/material/Button'

// Sub-components
export const LoginButton = memo(({ onClick }: { onClick: () => void }) => (
  <Button variant='contained' color='warning' size='small' onClick={onClick} aria-label='Login' sx={{ gap: 1 }}>
    Login
  </Button>
))
LoginButton.displayName = 'LoginButton'
