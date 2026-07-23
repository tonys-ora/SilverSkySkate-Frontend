import { ChangeEvent, FC, useEffect, useState } from 'react'

import { Box, Button, Divider, Paper, Stack, Typography } from '@mui/material'

import AppIcon from '@/components/Core/AppIcon'
import CustomLabeledInput from '@/components/Settings/CustomizedLabelInput'
import { IOSSwitch } from '@/components/Settings/IOSSwitch'
import { BASE_URL } from '@/configs'
import { useDeviceType } from '@/hooks'
import { fetchAccountData, updateAccountData } from '@/services'
import { dispatch, login } from '@/store'
import { AccountData } from '@/types'

export const Account: FC = () => {
  const { isDesktop, isMobile } = useDeviceType()
  const [previewUrl, setPreviewUrl] = useState<string>(`${BASE_URL}/uploads/avatar.png`)
  const [accountData, setAccountData] = useState<AccountData>({
    avatar: null,
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    shareProfile: 'no'
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'shareProfile')
      setAccountData(prevData => ({ ...prevData, shareProfile: e.target.checked ? 'yes' : 'no' }))
    else setAccountData(prevData => ({ ...prevData, [e.target.name]: e.target.value }))
  }

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file && file.type.startsWith('image/')) {
      setAccountData(prevData => ({ ...prevData, avatar: file }))
      setPreviewUrl(URL.createObjectURL(file))
    } else {
      alert('Please select a valid image file.')
    }
  }

  const handleSave = async (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault()
    try {
      const formData = new FormData()
      for (const [key, value] of Object.entries(accountData)) {
        if (value instanceof File && value) formData.append(key, value)
        else if (value) formData.append(key, value)
      }
      const data = await updateAccountData(formData)
      dispatch(login(data))
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await fetchAccountData()
        setAccountData(prevData => ({ ...prevData, ...data }))
        if (!(data.avatar instanceof File) && data.avatar !== null) setPreviewUrl(`${BASE_URL}${data.avatar}`)
      }
      fetchData()
    } catch (err) {
      console.log(err)
    }
  }, [setAccountData])

  return (
    <Paper sx={{ padding: '24px' }} variant='highlighted'>
      <Stack direction='row' gap='50px'>
        {isDesktop && (
          <Typography width='350px' variant='h6'>
            Account Setting
          </Typography>
        )}

        {/* profile */}
        <Stack gap='24px' flexGrow={1}>
          <Stack gap='8px'>
            <Typography color='secondary'>Profile photo</Typography>
            <Stack direction='row' gap={2} alignItems='center'>
              <Box
                component='img'
                src={previewUrl}
                sx={{
                  width: '100px',
                  height: '100px',
                  border: 'solid 1px',
                  borderRadius: '12px',
                  borderColor: 'divider'
                }}
              />
              <Button component='label' variant='outlined' color='inherit' startIcon={<AppIcon name='upload' />}>
                <Typography>Change</Typography>
                <input type='file' hidden accept='image/*' onChange={handleFileChange} />
              </Button>
            </Stack>
          </Stack>

          {/* Inputs */}
          <Stack gap='16px'>
            <Stack direction={isMobile ? 'column' : 'row'} gap='16px'>
              <CustomLabeledInput
                label='First name'
                value={accountData.firstName}
                name='firstName'
                onChange={handleChange}
              />
              <CustomLabeledInput
                label='Last name'
                value={accountData.lastName}
                name='lastName'
                onChange={handleChange}
              />
            </Stack>
            <Stack direction={isMobile ? 'column' : 'row'} gap='16px'>
              <CustomLabeledInput
                label='Username'
                value={accountData.username}
                name='username'
                onChange={handleChange}
              />
              <CustomLabeledInput label='Email' value={accountData.email} name='email' onChange={handleChange} />
            </Stack>
          </Stack>

          <Stack direction='row' justifyContent='space-between' alignItems='center'>
            <Typography sx={{ fontSize: '16px', fontWeight: 400, lineHeight: '24px' }} color='secondary'>
              I want to be anonymous (so don’t show my profile)
            </Typography>
            <IOSSwitch checked={accountData.shareProfile === 'yes'} name='shareProfile' onChange={handleChange} />
          </Stack>
          <Divider />
          <Stack alignItems='flex-end'>
            <Button type='submit' variant='contained' color='primary' onClick={handleSave}>
              <Typography>SAVE CHANGES</Typography>
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  )
}
