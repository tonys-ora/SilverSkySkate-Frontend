import { Alert, AlertTitle, Box, Button, Divider, Stack, Typography } from '@mui/material'
import { FC } from 'react'

import ImageUploader from '@/components/Settings/ImageUploader'

export const Level4: FC = () => {
  return (
    <Stack gap='24px'>
      <Stack direction='row-reverse'>
        <Stack maxWidth='718px' width='718px'>
          <Stack gap='24px' flexGrow={1}>
            <Divider sx={{ my: '4px' }} />
            <Stack gap='4px'>
              <Typography variant='h6'>Upload Identification</Typography>
              <Typography color='secondary'>Upload you identification.</Typography>
            </Stack>
            <Alert severity='info' variant='outlined'>
              <AlertTitle variant='subtitle1' sx={{ alignItems: 'center' }}>
                Please complete level three verificarion first.
              </AlertTitle>
            </Alert>
            <Stack gap='8px'>
              <Typography color='secondary'>Upload source of fund</Typography>
              <Stack direction='row' gap='24px'>
                <ImageUploader description='Upload source of fund' setSelectedFile={() => {}}/>
                <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' }, flex: 1 }} />
              </Stack>
              <Typography variant='caption' color='secondary'>
                File types: jpg. png.,pdf
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Divider />
      <Stack alignItems='flex-end'>
        <Button variant='contained' color='primary'>
          <Typography>SUBMIT</Typography>
        </Button>
      </Stack>
    </Stack>
  )
}
