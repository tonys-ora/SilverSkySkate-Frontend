import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { RegisterUserReq } from '@/types'

// Define validation schema
const schema = yup.object().shape({
  username: yup
    .string()
    .required('form.username-required')
    .matches(/^[a-zA-Z0-9._-]{3,20}$/, 'form.username-invalid'),
  email: yup.string().required('form.email-required').email('form.email-invalid'),
  password: yup
    .string()
    .required('form.password-required')
    .min(8, 'form.password-least')
    .matches(/[A-Z]/, 'form.password-uppercase')
    .matches(/[0-9]/, 'form.password-number')
    .matches(/[!@#$%^&*]/, 'form.password-special'),
  confirmPassword: yup
    .string()
    .required('form.confirmPassword-required')
    .oneOf([yup.ref('password')], 'form.confirmPassword-unmatched')
})

export default function SignUp() {
  const { control, handleSubmit } = useForm<RegisterUserReq>({
    resolver: yupResolver(schema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  })

  const onSubmit = async (data: RegisterUserReq) => {
    // openDialog('terms', { ...data, referralCode: dialogData?.code })
  }

  return (
    <Stack
      sx={theme => ({
        gap: theme.spacing(2)
      })}
    >
      <Typography component='h4' variant='h4' sx={{ fontSize: 'clamp(1.5rem, 10vw, 2rem)' }}>
        Register now
      </Typography>
      <Typography color='grey'>Register to Silverskystake</Typography>
      <Box
        component='form'
        onSubmit={handleSubmit(onSubmit)} 
        noValidate
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          gap: 2
        }}
      >
        <FormControl>
          <FormLabel htmlFor='username'>username</FormLabel>
          <Controller
            name='username'
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                type='text'
                placeholder={'input username'}
                autoComplete='username'
                fullWidth
                variant='outlined'
                error={Boolean(error)}
                helperText={error?.message && error.message}
              />
            )}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor='email'>email</FormLabel>
          <Controller
            name='email'
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                type='email'
                placeholder={'input email'}
                autoComplete='email'
                fullWidth
                variant='outlined'
                error={Boolean(error)}
                {...(error?.message && { helperText: error.message })}
              />
            )}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor='password'>password</FormLabel>
          <Controller
            name='password'
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                autoComplete='current-password'
                fullWidth
                variant='outlined'
                error={Boolean(error)}
                {...(error?.message && { helperText: error.message })}
              />
            )}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor='confirmPassword'>confirm password</FormLabel>
          <Controller
            name='confirmPassword'
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                autoComplete='current-password'
                fullWidth
                variant='outlined'
                error={Boolean(error)}
                {...(error?.message && { helperText: error.message })}
              />
            )}
          />
        </FormControl>

        <Button type='submit' fullWidth variant='contained' aria-label='Signup Submit'>
          Submit
        </Button>
      </Box>
    </Stack>
  )
}
