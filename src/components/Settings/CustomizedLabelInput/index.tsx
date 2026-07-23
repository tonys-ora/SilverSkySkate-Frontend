import { FormControl, FormLabel, styled, TextField, TextFieldProps, Typography } from '@mui/material'
import { useId } from 'react'

interface CustomInputProps extends Omit<TextFieldProps, 'variant'> {
  label?: string
  isRequired?: boolean
}

const StyledTextField = styled(TextField, {
  shouldForwardProp: prop => prop !== 'isRequired' && prop !== 'label'
})<CustomInputProps>(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: theme.palette.background.default,
    padding: '14px 16px',
    width: '100%',

    '&:hover fieldset': {
      borderColor: '#1976d2' // Hover border color
    },
    '&.Mui-focused fieldset': {
      borderColor: '#1976d2' // Focused border color
    }
  },
  '& .MuiInputLabel-root': {
    fontSize: '14px',
    lineHeight: '20px',
    color: theme.palette.text.primary, // Custom label color
    '&.Mui-focused': {
      color: '#1976d2' // Label color when focused
    }
  }
}))

const CustomizedLabelInput: React.FC<CustomInputProps> = ({ label, isRequired, ...props }) => {
  const id = useId()

  return (
    <FormControl fullWidth variant='standard'>
      <FormLabel htmlFor={`${id}-input`} sx={{ marginBottom: '8px' }}>
        <Typography component={'span'} color='secondary' variant='body2'>
          {label}
        </Typography>
        {isRequired && (
          <Typography component='span' color='error'>
            *
          </Typography>
        )}
      </FormLabel>
      <StyledTextField id={`${id}-input`} fullWidth required={isRequired} {...props} />
    </FormControl>
  )
}

export default CustomizedLabelInput
