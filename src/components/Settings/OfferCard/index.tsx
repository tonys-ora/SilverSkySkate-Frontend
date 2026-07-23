import { Button, Paper, Stack, Typography } from '@mui/material'

import CustomizedLabelInput from '../CustomizedLabelInput'

export default function OfferCard() {
  return (
    <Paper sx={{ flex: 1, padding: '24px' }}>
      <Stack gap='24px'>
        <Stack gap='4px'>
          <Typography variant='h6'>Welcome Offer</Typography>
          <Typography variant='body2' color='secondary'>
            Claim your welcome offer bonus. Input your . 24hours code{' '}
          </Typography>
        </Stack>
        <Stack direction='row' alignItems='end' gap='16px'>
          <CustomizedLabelInput label='Bonus code' />
          <Button variant='contained' color='primary'>
            <Typography>SUBMIT</Typography>
          </Button>
        </Stack>
      </Stack>
    </Paper>
  )
}
