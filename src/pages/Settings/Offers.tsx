import { Stack } from '@mui/material'

import OfferCard from '@/components/Settings/OfferCard'

export function Offers() {
  return (
    <Stack sx={{ flexDirection: { xs: 'column', sm: 'column', md: 'row' }, gap: '24px' }}>
      <OfferCard />
      <OfferCard />
    </Stack>
  )
}
