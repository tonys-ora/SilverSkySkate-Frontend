import {
  Box,
  Button,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Stack,
  Typography
} from '@mui/material'
import { useState } from 'react'

import AppIcon from '@/components/Core/AppIcon'
import { walletOptions } from '@/constants'
import { useDeviceType } from '@/hooks'

export default function IconSelect() {
  const { isMobile } = useDeviceType()
  const [selectedValue, setSelectedValue] = useState<string>('0')

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedValue(event.target.value)
  }

  return (
    <Stack
      component={Paper}
      direction='row'
      sx={{
        borderRadius: '12px',
        boxShadow: '0px 1px 4px rgba(12, 12, 13, 0.05)',
        border: `1px solid`,
        borderColor: 'divider',
        backgroundColor: isMobile ? 'background.default' : 'background.paper',
        width: isMobile ? '100%' : '300px'
      }}
    >
      <Select
        labelId='icon-select-label'
        id='icon-select'
        value={selectedValue}
        label='Account Action'
        onChange={handleChange}
        sx={{
          borderRadius: '12px',
          backgroundColor: 'transparent',
          border: 'none',
          flex: 1
        }}
        renderValue={value => {
          const selectedOption = walletOptions.find(opt => opt.value === value)
          if (!selectedOption) return value

          return (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              {selectedOption.icon && <AppIcon name={selectedOption.icon} />}
              <span>{selectedOption.label}</span>
            </Box>
          )
        }}
      >
        {walletOptions.map(option => {
          return (
            <MenuItem
              key={option.value}
              value={option.value}
              sx={{
                py: 1.5,
                '&.Mui-selected': { backgroundColor: '#e3f2fd' },
                '&:hover': { backgroundColor: '#f5f5f5' }
              }}
            >
              <ListItemIcon sx={{ minWidth: '36px', color: '#555' }}>
                {option.icon && <AppIcon name={option.icon} />}
              </ListItemIcon>
              <ListItemText primary={option.label} />
            </MenuItem>
          )
        })}
      </Select>
      <Button
        variant='contained'
        startIcon={<AppIcon name='add' size={16} />}
        sx={{ borderRadius: '12px', padding: '12px' }}
      >
        <Typography variant='subtitle2'>Deposit</Typography>
      </Button>
    </Stack>
  )
}
