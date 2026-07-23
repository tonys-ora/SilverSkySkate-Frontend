import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Avatar, Button, Drawer, drawerClasses, IconButton, Paper, Stack, Typography } from '@mui/material'
import { useState } from 'react'

import avatarUrl from '@/assets/images/avatar.png'
import AppIcon from '@/components/Core/AppIcon'
import Logo from '@/components/Core/Logo'
import { useUser } from '@/hooks/useUser'
import Wallet from '@/layout/Main/Header/Wallet'

import ProfileMenuContent from './ProfileMenuContent'
import SearchBar from './SearchBar'

interface SidebarMobileProps {
  open: boolean | undefined
  toggleDrawer: (newOpen: boolean) => () => void
}

export default function ProfileDropdown({ open, toggleDrawer }: SidebarMobileProps) {
  const [show, setShow] = useState<boolean>(false)
  const user = useUser()

  return (
    <Drawer
      anchor='top'
      open={open}
      onClose={toggleDrawer(false)}
      sx={{
        width: 'auto',
        zIndex: theme => theme.zIndex.drawer + 1,
        [`& .${drawerClasses.paper}`]: {
          backgroundImage: 'none',
          backgroundColor: 'background.paper',
          borderRadius: 0
        }
      }}
    >
      <Stack minHeight='100vh'>
        <Stack direction='row' sx={{ px: 2.5, py: 2 }} justifyContent='space-between' alignItems='center'>
          <Logo />
          <IconButton size='small' onClick={toggleDrawer(false)}>
            <AppIcon name='close' />
          </IconButton>
        </Stack>

        <Stack sx={{ px: 2.5, py: 2, gap: 2 }}>
          <Wallet />
          <SearchBar />
          <Button component={Paper} variant='outlined' color='secondary'>
            <AppIcon name='notification' />
            <Typography>Notifications</Typography>
          </Button>
          <Button component={Paper} variant='outlined' color='secondary'>
            <AppIcon name='message' />
            <Typography>Messages</Typography>
          </Button>
          <Stack
            sx={{ flexDirection: 'row', gap: '8px', alignItems: 'center', cursor: 'pointer' }}
            onClick={() => setShow(prev => !prev)}
          >
            <IconButton id='user-profile' size='medium'>
              <Avatar alt='user' src={avatarUrl} sx={{ width: '36px', height: '36px' }} />
            </IconButton>
            <Stack flexGrow={1}>
              <Typography sx={{ fontSize: '16px', fontWeight: 500, lineHeight: '24px' }} color='default'>
                {user?.username}
              </Typography>
              <Typography sx={{ fontSize: '10px', fontWeight: 400, lineHeight: '16px' }} color='secondary'>
                {user?.email}
              </Typography>
            </Stack>
            {show ? <ExpandMoreIcon fontSize='small' /> : <ExpandLessIcon fontSize='small' />}
          </Stack>
          {show && <ProfileMenuContent handleClose={toggleDrawer(false)} />}
        </Stack>
      </Stack>
    </Drawer>
  )
}
