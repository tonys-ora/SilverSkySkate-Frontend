import { Avatar, Divider, IconButton, Menu, Stack, Typography } from '@mui/material'
import * as React from 'react'

import avatarUrl from '@/assets/images/avatar.png'
import { useUser } from '@/hooks/useUser'

import ProfileMenuContent from './ProfileMenuContent'

export default function UserProfile() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const user = useUser()
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton id='user-profile' onClick={handleClick}>
        <Avatar alt='user' src={avatarUrl} sx={{ width: '36px', height: '36px' }} />
      </IconButton>
      <Menu
        id='profile-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        sx={{
          '.MuiMenu-list': {
            padding: 0
          },
          '.MuiMenu-paper': {
            width: '320px',
            borderRadius: '16px'
          }
        }}
      >
        <Stack sx={{ padding: '16px', flexDirection: 'row', gap: '8px' }}>
          <IconButton id='user-profile'>
            <Avatar alt='user' src={avatarUrl} sx={{ width: '36px', height: '36px' }} />
          </IconButton>
          <Stack>
            <Typography sx={{ fontSize: '16px', fontWeight: 500, lineHeight: '24px' }} color='default'>
              {user?.username}
            </Typography>
            <Typography sx={{ fontSize: '10px', fontWeight: 400, lineHeight: '16px' }} color='secondary'>
              {user?.email}
            </Typography>
          </Stack>
        </Stack>
        <Divider />
        <ProfileMenuContent handleClose={handleClose} />
      </Menu>
    </>
  )
}
