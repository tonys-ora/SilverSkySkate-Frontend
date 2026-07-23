import { memo, useMemo } from 'react'

import { Box, Link, Stack, useTheme } from '@mui/material'

import { useDeviceType } from '@/hooks'

const Logo = ({ fullWidth }: { fullWidth?: boolean }) => {
  const theme = useTheme()
  const { isTablet, isMobile } = useDeviceType()

  const logoProps = useMemo(() => {
    if (isMobile) {
      return {
        src: '/logo.png',
        width: '132px',
        height: '23.3px',
        alt: 'Company Logo'
      }
    }

    if (fullWidth || (fullWidth === undefined && !isTablet)) {
      return {
        src: '/logo.png',
        width: '170px',
        height: '30px',
        alt: 'Company Logo'
      }
    }

    return {
      src: '/logo-mobile.svg',
      width: '25px',
      height: '25px',
      alt: 'Mobile Company Logo'
    }
  }, [isTablet, theme.palette.mode, fullWidth])

  return (
    <Stack component={Link} href='/' aria-label='Home page'>
      <Box
        component='img'
        src={logoProps.src}
        alt={logoProps.alt}
        sx={{ width: logoProps.width, height: logoProps.height }}
        loading='eager'
        decoding='sync'
      />
    </Stack>
  )
}

export default memo(Logo)
