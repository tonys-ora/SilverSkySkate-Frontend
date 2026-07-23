import { NavLink } from 'react-router-dom'

import {
  buttonBaseClasses,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  styled,
  typographyClasses
} from '@mui/material'

import AppIcon from '@/components/Core/AppIcon'
import { navigation } from '@/constants'
import { colors } from '@/theme'

const StyledListItem = styled(ListItem)(({ theme }) => ({
  display: 'block',
  [`& svg`]: {
    width: '20px',
    height: '20px',
    color: 'greyDark'
  },
  [`& .${typographyClasses.root}`]: {
    fontWeight: 400,
    color: 'greyDark'
  },
  [`& .${buttonBaseClasses.root}`]: {
    display: 'flex',
    gap: '12px',
    padding: '12px 24px',
    border: 'solid 1px transparent',
    borderLeft: 'none',
    borderRadius: theme.shape.borderRadius,
    borderBottomLeftRadius: '0px',
    borderTopLeftRadius: '0px',
    '&.active': {
      transition: 'all .5s ease',
      border: `solid 1px ${theme.palette.mode === 'dark' ? colors.prime : colors.schnitzel}`,
      borderLeft: 'none',
      background: theme.palette.mode === 'dark' ? colors.gradientSidebarDark : colors.gradientSidebarLight,
      [`& .${typographyClasses.root}`]: {
        fontWeight: 500,
        color: theme.palette.mode === 'dark' ? colors.prime : colors.schnitzel
      },
      [`& svg`]: {
        color: theme.palette.mode === 'dark' ? colors.prime : colors.schnitzel
      }
    },
    '&:hover': {
      transition: 'all 1s',
      background: theme.palette.mode === 'dark' ? colors.gradientSidebarDark : colors.gradientSidebarLight,
      [`& .${typographyClasses.root}`]: {
        fontWeight: 500,
        color: theme.palette.mode === 'dark' ? colors.prime : colors.schnitzel
      },
      [`& svg`]: {
        color: theme.palette.mode === 'dark' ? colors.prime : colors.schnitzel
      }
    }
  }
}))

export default function MenuContent({ fullWidth }: { fullWidth: boolean }) {
  // const { isTablet } = useDeviceType()

  return (
    <Stack component='nav' justifyContent='space-between'>
      <List dense sx={{ padding: '0 16px 0 0', gap: '4px' }}>
        {navigation.map(item => (
          <StyledListItem disablePadding key={item.link}>
            <ListItemButton component={NavLink} to={item.link}>
              <ListItemIcon sx={{}}>
                <AppIcon name={item.icon} />
              </ListItemIcon>
              {fullWidth && <ListItemText primary={item.text} />}
            </ListItemButton>
          </StyledListItem>
        ))}
      </List>
    </Stack>
  )
}
