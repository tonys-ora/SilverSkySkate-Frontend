import { useState } from 'react'

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

import { useDeviceType, useDialog } from '@/hooks'
import { loginUser } from '@/services'
import { dispatch, login } from '@/store'
import { LoginUserReq } from '@/types'
import { handleError } from '@/utils'

const defaultValues = {
  email: '',
  password: ''
}

const schema = yup.object().shape({
  email: yup.string().required('form.email-required').email('form.email-invalid'),
  password: yup
    .string()
    .required('form.password-required')
    // .min(4, 'form.password-least')
    // .matches(/[A-Z]/, 'form.password-uppercase')
    // .matches(/[0-9]/, 'form.password-number')
    // .matches(/[!@#$%^&*]/, 'form.password-special')
})

export default function SignIn() {
  const { isMobile } = useDeviceType()
  const { openDialog, closeDialog } = useDialog()
  const { control, handleSubmit } = useForm<LoginUserReq>({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema)
  })
  const [loading, setLoading] = useState<boolean>(false)

  const onSubmit = async (data: LoginUserReq) => {
    setLoading(true)
    try {
      const result = await loginUser(data)
      console.log(result)
      // if (!result?.requires2fa) {
        dispatch(login(result))
        closeDialog()
      // } else {
      //   openDialog('2fa', data.email)
      // }
    } catch (error) {
      handleError(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Stack
      sx={theme => ({
        gap: theme.spacing(2)
      })}
    >
      <Typography component='h4' variant='h4' sx={{ fontSize: 'clamp(1.5rem, 10vw, 2rem)' }}>
        Welcome back fellas!
      </Typography>
      <Typography color='grey'>Login to your Silverskystake account</Typography>
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
          <FormLabel htmlFor='email'>Form.email</FormLabel>
          <Controller
            name='email'
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                type='email'
                placeholder={'form.username.email'}
                autoComplete='email'
                fullWidth
                variant='outlined'
                error={Boolean(error)}
                helperText={error?.message && error.message}
                {...field}
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
                type='password'
                placeholder={'input password'}
                autoComplete='current-password'
                fullWidth
                variant='outlined'
                {...field}
                error={Boolean(error)}
                helperText={error?.message && error.message}
              />
            )}
          />
        </FormControl>

        <Button
          type='submit'
          fullWidth
          variant='contained'
          color='primary'
          loading={loading}
          aria-label='Signin Submit'
        >
          Sign in
        </Button>
      </Box>
    </Stack>
  )
}
