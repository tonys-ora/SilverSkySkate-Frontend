import { Box, drawerClasses, Drawer as MuiDrawer, Stack, styled } from '@mui/material'
import { useEffect, useState } from 'react'

import infoImage from '@/assets/images/iNFO.png'
import { useDeviceType } from '@/hooks'
import MenuContent from '@/layout/Main/Sidebar/MenuContent'

import Header from './Header'

const drawerWidth = 210

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: prop => prop !== 'fullWidth'
})<{ fullWidth?: boolean }>(({ theme, fullWidth }) => ({
  flexShrink: 0,
  boxSizing: 'border-box',
  color: theme.palette.background.paper,
  width: fullWidth ? drawerWidth : '68px',
  [`& .${drawerClasses.paper}`]: {
    width: fullWidth ? drawerWidth : '68px',
    borderRadius: '0px',
    boxShadow: '0px 0px 24px rgba(0, 0, 0, 0.06)'
  }
}))

export default function Sidebar() {
  const { isDesktop, isTablet } = useDeviceType()
  const [fullWidth, setFullWidth] = useState<boolean>(isDesktop)

  useEffect(() => {
    setFullWidth(isDesktop)
  }, [isDesktop])

  return (
    <Drawer
      anchor='left'
      variant={isTablet && fullWidth ? 'temporary' : 'permanent'}
      fullWidth={fullWidth}
      open={fullWidth}
      onClose={() => setFullWidth(false)}
      sx={{
        display: { xs: 'none', sm: 'block' },
        [`& .${drawerClasses.paper}`]: {
          backgroundColor: 'background.paper',
          overflow: 'visible'
        }
      }}
    >
      <Stack gap='16px' height='100%'>
        <Header
          fullWidth={fullWidth}
          toggleDrawer={() => {
            setFullWidth(prev => !prev)
          }}
        />
        <Box
          sx={{
            overflowX: 'auto',
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <MenuContent fullWidth={fullWidth} />
        </Box>
        {fullWidth && (
          <Stack padding={1}>
            <Box
              component='img'
              src={infoImage}
              sx={{
                padding: '16px',
                width: '100%',
                height: '191px'
              }}
            ></Box>
          </Stack>
        )}
      </Stack>
    </Drawer>
  )
}
