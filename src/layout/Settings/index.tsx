import { MenuItem, Select, SelectChangeEvent, Stack, Tab, Tabs, Typography } from '@mui/material'
import { useCallback } from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'

import { settings } from '@/constants'
import { useDeviceType } from '@/hooks'

export default function index() {
  const { isMobile } = useDeviceType()
  const location = useLocation()
  const navigate = useNavigate()

  const handleChange = useCallback((event: SelectChangeEvent<string>) => {
    navigate(event.target.value)
  }, [])

  return (
    <Stack gap='24px' py={2} width='100%'>
      <Typography variant='h4'>Settings</Typography>

      {isMobile ? (
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={location.pathname}
          onChange={handleChange}
          sx={{ borderRadius: '12px', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)' }}
        >
          {settings.map(value => (
            <MenuItem key={value.title} value={value.link}>
              {value.title}
            </MenuItem>
          ))}
        </Select>
      ) : (
        <Tabs value={location.pathname} variant='scrollable' scrollButtons='auto'>
          {settings.map(value => (
            <Tab key={value.title} value={value.link} label={value.title} component={Link} to={value.link} />
          ))}
        </Tabs>
      )}
      <Outlet />
    </Stack>
  )
}
