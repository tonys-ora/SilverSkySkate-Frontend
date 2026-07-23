import { Box, Grid2 as Grid, Stack, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import AppIcon from '@/components/Core/AppIcon'
import { PROFILE_ITEMS } from '@/constants'
import { colors } from '@/theme'
import { useLogout } from '@/hooks'

interface ProfileMenuItemsProps {
  handleClose: () => void
}

export default function ProfileMenuContent({ handleClose }: ProfileMenuItemsProps) {
  const logout = useLogout()
  const navigate = useNavigate()

  const handleNavigate = (link: string) => {
    handleClose()
    if (link === '/logout') {
      logout()
    }
    else navigate(link)
  }

  return (
    <Grid container>
      {PROFILE_ITEMS.map(item => (
        <Grid
          key={item.text}
          size={4}
          onClick={() => handleNavigate(item.link)}
          component={Box}
          sx={theme => ({
            borderTopWidth: 0,
            borderLeftWidth: 0,
            padding: '16px',
            cursor: 'pointer',
            textDecorationLine: 'none',
            border: `1px solid `,
            borderColor: 'divider',
            '&:hover': {
              backgroundColor: 'greyLight',
              '& .MuiTypography-root': {
                color: `${colors.prime} !important`
              },
              '& .app-icon': {
                color: `${colors.prime} !important`
              },
              ...theme.applyStyles('dark', {
                backgroundColor: 'bgDark'
              })
            },
            ...theme.applyStyles('dark', {
              border: `1px solid ${colors.borderDark}`
            })
          })}
        >
          <Stack>
            <AppIcon name={item.icon} size={16} color={item.icon === 'logout' ? 'red' : 'grey'} />
            <Typography
              variant='caption'
              color={item.icon === 'logout' ? colors.red : ''}
              sx={{ textAlign: 'center', mt: 1 }}
            >
              {item.text}
            </Typography>
          </Stack>
        </Grid>
      ))}
    </Grid>
  )
}
