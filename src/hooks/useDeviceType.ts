import { useMediaQuery, useTheme } from '@mui/material'

export const useDeviceType = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')) // Below 600px
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md')) // 600px - 900px
  const isDesktop = useMediaQuery(theme.breakpoints.up('md')) // Above 900px
  const isLarge = useMediaQuery(theme.breakpoints.up('lg')) // Above 1200px

  return { isMobile, isTablet, isDesktop, isLarge }
}
