import {
  FormControl,
  FormLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  SelectProps,
  styled,
  Typography
} from '@mui/material'
import React, { useId } from 'react'

import { SelectOption } from '@/types/settings'

interface CustomSelectProps extends Omit<SelectProps, 'variant'> {
  label?: string
  options: SelectOption[]
  isRequired?: boolean
  // onChange: (e: SelectChangeEvent<string>) => void
}

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  width: '100%',
  '& .MuiOutlinedInput-root': {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    '& fieldset': {
      borderColor: theme.palette.primary.light
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.dark
    }
  }
}))

const CustomizedLabelSelect: React.FC<CustomSelectProps> = ({
  label,
  isRequired,
  options,
  ...restProps
}) => {
  const labelId = useId() + '-select'

  return (
    <StyledFormControl>
      {label && (
        <FormLabel htmlFor={labelId} sx={{ marginBottom: '8px' }}>
          <Typography component={'span'} color='secondary' variant='body2'>
            {label}
          </Typography>
          {isRequired && (
            <Typography component='span' color='error'>
              *
            </Typography>
          )}
        </FormLabel>
      )}
      <Select labelId={labelId} label={label} {...restProps}>
        {options.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </StyledFormControl>
  )
}

export default CustomizedLabelSelect
