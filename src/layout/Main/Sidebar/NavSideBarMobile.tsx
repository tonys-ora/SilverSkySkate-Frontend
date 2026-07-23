import { Drawer, drawerClasses, IconButton, Stack } from '@mui/material'

import AppIcon from '@/components/Core/AppIcon'
import Logo from '@/components/Core/Logo'

import MenuContent from './MenuContent'

interface SidebarMobileProps {
  open: boolean | undefined
  toggleDrawer: (newOpen: boolean) => () => void
}

export default function NavSideBarMobile({ open, toggleDrawer }: SidebarMobileProps) {
  return (
    <Drawer
      anchor='left'
      open={open}
      onClose={toggleDrawer(false)}
      sx={{
        zIndex: theme => theme.zIndex.drawer + 1,
        [`& .${drawerClasses.paper}`]: {
          backgroundImage: 'none',
          backgroundColor: 'background.paper',
          borderRadius: 0
        }
      }}
    >
      <Stack
        sx={{
          width: '100vw',
          height: '100%'
        }}
      >
        <Stack direction='row' sx={{ padding: '16px 20px', gap: 1 }} alignItems='center'>
          <IconButton
            size='small'
            color='inherit'
            sx={{ padding: 0, height: '16px', width: '16px' }}
            onClick={toggleDrawer(false)}
          >
            <AppIcon name='close' size={16} />
          </IconButton>
          <Logo />
        </Stack>
        <Stack sx={{ flexGrow: 1 }}>
          <MenuContent fullWidth={true} />
        </Stack>
      </Stack>
    </Drawer>
  )
}
