import { Box, Stack, alpha } from '@mui/material'
import { Suspense } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { useDeviceType } from '@/hooks'
import Header from '@/layout/Main/Header'
import AppNavbar from '@/layout/Main/Header/AppNavbar'
import Sidebar from '@/layout/Main/Sidebar'

const Layout = () => {
  const { isMobile } = useDeviceType()
  // const isLoggedIn = useIsLoggedIn()
  const navigate = useNavigate()

  // if (!isLoggedIn) navigate('/login')

  return (
    <Box sx={{ display: 'flex', width: '100vw' }}>
      <Sidebar />
      {isMobile && <AppNavbar />}
      {/* Main content */}
      <Stack
        component='main'
        sx={theme => ({
          flexGrow: 1,
          backgroundColor: alpha(theme.palette.background.default, 1),
          width: '100%',
          alignItems: 'center',
          overflow: 'auto',
          marginTop: { xs: '68px', sm: '0px' }
        })}
      >
        <Stack sx={{ maxWidth: '1230px', width: '100%', px: { xs: '20px', sm: '32px' } }}>
          <Header />
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Layout
