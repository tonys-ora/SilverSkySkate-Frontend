import { Box, Button, Divider, Paper, Stack, Typography } from '@mui/material'
import { QRCodeSVG } from 'qrcode.react'
import React, { FC, useCallback, useEffect, useState } from 'react'

import { useDeviceType } from '@/hooks'

import AppIcon from '@/components/Core/AppIcon'
import CustomLabelInput from '@/components/Settings/CustomizedLabelInput'
import { IOSSwitch } from '@/components/Settings/IOSSwitch'
import { fetchSecurity, setUp2FA, verify2FA } from '@/services'

export const Security: FC = () => {
  const [isShow, setIsShow] = useState<boolean>(false)
  const [qrcode, setQRCode] = useState<string>(
    'URTBAORTICABTEJYINSBERTRYWEE268792BEWJHBNAMS5ARBN6AITBO2R5EU6ABRW7ITENI27EG'
  )
  const [token, setToken] = useState<string>('')
  // const [qrCodeUrl, setQrCodeUrl] = useState<string>('')
  const { isDesktop } = useDeviceType()

  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await fetchSecurity()
        setIsShow(!!data.is2FAEnabled)
        setQRCode(data.secret)
        console.log(data)
      }
      fetchData()
    } catch (err) {
      console.log(err)
    }
  }, [])

  const handleChange = useCallback(async () => {
    if (!isShow) {
      const data = await setUp2FA()
      setQRCode(data.secret)
    }
    setIsShow(prev => !prev)
  }, [])

  const handleSubmit = useCallback(async () => {
    try {
      const data = await verify2FA({ token })
      alert(data.message)
    } catch (err) {
      alert(err)
    }
  }, [])

  return (
    <Paper sx={{ padding: '24px' }} variant='highlighted'>
      <Stack direction='row' gap='50px'>
        {isDesktop && (
          <Typography width='350px' variant='h6'>
            Two Factor Authentication
          </Typography>
        )}

        {/* profile */}
        <Stack gap='24px' flexGrow={1}>
          <Stack direction='row' justifyContent='space-between' alignItems='center'>
            {
              <Stack
                sx={{
                  gap: { xs: '8px', md: '16px' },
                  flexDirection: { xs: 'column', sm: 'row' }
                }}
              >
                {!isDesktop && <Typography variant='h6'>Two Factor Authentication</Typography>}
                <Typography
                  sx={{
                    fontSize: { xs: '14px', sm: '16px' },
                    fontWeight: 400,
                    lineHeight: '24px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: { xs: 2, sm: 1 },
                    WebkitBoxOrient: 'vertical'
                  }}
                  color='secondary'
                >
                  Enable Two factor authentication for extra security.
                </Typography>
              </Stack>
            }
            <IOSSwitch checked={isShow} onChange={handleChange} />
          </Stack>

          {isShow && (
            <>
              <Divider />

              <Stack sx={{ flexDirection: { xs: 'column-reverse', sm: 'row' }, gap: '24px' }}>
                {/* Inputs */}
                <Stack gap='16px' flexGrow={1}>
                  <CustomLabelInput
                    label='Authentication Code'
                    value={qrcode}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQRCode(e.target.value)}
                  />
                  <CustomLabelInput
                    label='Two Factor Code'
                    isRequired={true}
                    placeholder='Type code here'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setToken(e.target.value)}
                  />
                  <Box>
                    <Button
                      sx={{
                        height: 'auto',
                        padding: '8px 24px',
                        bgcolor: '#1B2131',
                        color: 'white',
                        borderRadius: '12px'
                      }}
                      startIcon={<AppIcon name='google' />}
                      onClick={handleSubmit}
                    >
                      <Typography>Re-verify with Google</Typography>
                    </Button>
                  </Box>
                </Stack>
                <Paper
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '14px 16px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'greyLight',
                    height: '230px',
                    minWidth: '230px'
                  }}
                  variant='outlined'
                >
                  <QRCodeSVG value={qrcode} size={150} marginSize={2} radius={'4px'} />
                  <Typography
                    variant='caption'
                    color='secondary'
                    sx={{ mt: '12px', whiteSpace: 'pre-wrap', textAlign: 'center' }}
                  >
                    {'QR Code \n(don’t show anyone)'}
                  </Typography>
                </Paper>
              </Stack>
            </>
          )}
        </Stack>
      </Stack>
    </Paper>
  )
}
