import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { IconButton, Stack } from '@mui/material'

import { useDeviceType } from '@/hooks'

import Logo from '@/components/Core/Logo'

interface HeaderProps {
  fullWidth?: boolean
  toggleDrawer?: () => void
}

export default function Header({ fullWidth, toggleDrawer }: HeaderProps) {
  const { isTablet } = useDeviceType()

  return (
    <Stack
      sx={{
        gap: '11px',
        justifyContent: { xs: 'flex-start', sm: 'flex-start' },
        flexDirection: 'row',
        minHeight: '80px',
        alignItems: 'center',
        paddingLeft: { sm: '16px' }
      }}
    >
      <Logo fullWidth={fullWidth} />
      <IconButton sx={{ padding: 0.5, width: '28px', height: '28px' }} onClick={toggleDrawer}>
        {fullWidth ? <KeyboardArrowLeftIcon fontSize='small' /> : <KeyboardArrowRightIcon fontSize='small' />}
      </IconButton>
    </Stack>
  )
}
