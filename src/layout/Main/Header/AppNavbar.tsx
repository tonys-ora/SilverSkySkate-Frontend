import { AppBar, Avatar, IconButton, Stack, styled, tabsClasses } from '@mui/material'
import MuiToolbar from '@mui/material/Toolbar'
import * as React from 'react'

import avatarUrl from '@/assets/images/avatar.png'
import AppIcon from '@/components/Core/AppIcon'
import Logo from '@/components/Core/Logo'

import NavSideBarMobile from '../Sidebar/NavSideBarMobile'
import ProfileDropdown from './ProfileDropdown'

const Toolbar = styled(MuiToolbar)({
  width: '100%',
  padding: '12px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
  gap: '12px',
  flexShrink: 0,
  [`& ${tabsClasses.flexContainer}`]: {
    gap: '8px',
    p: '8px',
    pb: 0
  }
})

export default function AppNavbar() {
  const [navOpen, setNavOpen] = React.useState(false)
  const [profileOpen, setProfileOpen] = React.useState(false)

  const navToggleDrawer = (newOpen: boolean) => () => {
    setNavOpen(newOpen)
  }
  const profileToggleDrawer = (newOpen: boolean) => () => {
    setProfileOpen(newOpen)
  }

  return (
    <AppBar
      position='fixed'
      sx={{
        display: { xs: 'auto', sm: 'none' },
        boxShadow: 0,
        bgcolor: 'background.default',
        backgroundImage: 'none',
        border: 'none',
        top: 'var(--template-frame-height, 0px)'
      }}
    >
      <Toolbar variant='regular' sx={{ padding: '16px 20px' }}>
        <NavSideBarMobile open={navOpen} toggleDrawer={navToggleDrawer} />
        <ProfileDropdown open={profileOpen} toggleDrawer={profileToggleDrawer} />
        <Stack direction='row' justifyContent='space-between' width={'100%'}>
          <Stack direction='row' gap='8px' alignItems='center'>
            <IconButton
              size='large'
              color='inherit'
              aria-label='open drawer'
              sx={{ boxShadow: 'none', padding: 0 }}
              onClick={navToggleDrawer(true)}
            >
              <AppIcon name='menu2' size={16} />
            </IconButton>
            <Logo />
          </Stack>

          <Stack direction='row' gap='8px'>
            <IconButton size='small'>
              <AppIcon name='casino' size={16}></AppIcon>
            </IconButton>
            <IconButton size='small'>
              <AppIcon name='sports' size={16}></AppIcon>
            </IconButton>
            <IconButton size='small' onClick={profileToggleDrawer(true)}>
              <Avatar alt='user' src={avatarUrl} sx={{ width: '30px', height: '30px' }} />
            </IconButton>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}
