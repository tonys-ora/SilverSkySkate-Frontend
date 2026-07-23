import { IconButton, Stack } from '@mui/material'

import AppIcon from '@/components/Core/AppIcon'

import ColorModeIcon from './ColorModeIcon'
import { ThemeTabs } from './ThemeTabs'
import UserProfile from './UserProfile'
import Wallet from './Wallet'

export default function Header() {
  return (
    <Stack
      direction='row'
      sx={{
        display: { xs: 'none', sm: 'flex' },
        alignItems: { xs: 'flex-start', md: 'center' },
        justifyContent: 'space-between',
        py: '20px',
        width: '100%'
      }}
      spacing={2}
    >
      <ThemeTabs />
      <Stack flexGrow={1} />

      <Wallet />
      <Stack direction='row' sx={{ gap: 0.5, margin: 0 }}>
        <ColorModeIcon />
        <IconButton>
          <AppIcon name='search' />
        </IconButton>
        <IconButton>
          <AppIcon name='notification' />{' '}
        </IconButton>
        <IconButton>
          <AppIcon name='message' />
        </IconButton>
        <Stack direction='row' alignItems='center'>
          <UserProfile />
          <AppIcon name='menu' />
        </Stack>
      </Stack>
    </Stack>
  )
}
