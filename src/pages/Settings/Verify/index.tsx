import { useEffect, useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Button, Chip, Divider, Stack, Typography } from '@mui/material'
import { GridExpandMoreIcon } from '@mui/x-data-grid'

import { useVerifyStep } from '@/hooks/useVerifyStep'
import { fetchVerifyData } from '@/services'
import { dispatch, setVerifyStep } from '@/store'

import { Level1 } from './Level1'
import { Level2 } from './Level2'
import { Level3 } from './Level3'
import { Level4 } from './Level4'

interface AccordionProps<P> {
  level: string
  title: string
  status: number
  WrappedComp: React.ComponentType<P>
  wrappedCompProps?: P
}
const CustomAccordion = <P extends object>({
  level,
  title,
  status,
  WrappedComp,
  wrappedCompProps
}: AccordionProps<P>) => {

  return (
    <Accordion>
      <AccordionSummary expandIcon={<GridExpandMoreIcon />} id={`panel1-header`} sx={{ alignItems: 'center' }}>
        <Stack sx={{ flexDirection: { xs: 'column', sm: 'row' }, flex: 1, gap: '4px' }}>
          <Stack sx={{ maxWidth: '400px', flex: 1 }} direction='row' gap='12px'>
            <Typography variant='h6'>{level}</Typography>
            {status >= 0 && (
              <Chip
                label={status === 0 ? 'Action needed' : 'Completed'}
                variant='outlined'
                color={status !== 0 ? 'success' : 'warning'}
                size='medium'
              />
            )}
          </Stack>
          <Typography
            sx={{ fontSize: '16px', lineHeight: '24px', flex: 1, minWidth: 'min-content' }}
            color='secondary'
            noWrap
          >
            {title}
          </Typography>
        </Stack>
      </AccordionSummary>
      <AccordionDetails>
        <WrappedComp {...(wrappedCompProps as P)} />
      </AccordionDetails>
    </Accordion>
  )
}

export default function Verify() {
  const currentStep = useVerifyStep();

  useEffect(() => {
    try {
      const fecthData = async () => {
        const data = await fetchVerifyData()
        console.log(data)
        dispatch(setVerifyStep(data.currentStep))
      }
      fecthData()
    } catch (err) {
      console.log(err)
    }
  }, [])

  return (
    <Stack gap='9px'>
      <CustomAccordion level='Level1' title='Confirm your details' status={currentStep - 0} WrappedComp={Level1} />
      <CustomAccordion level='Level2' title='Upload Identification' status={currentStep - 1} WrappedComp={Level2} />
      <CustomAccordion level='Level3' title='Verification proof of address' status={currentStep - 2} WrappedComp={Level3} />
      <CustomAccordion level='Level4' title='Verification source of fund' status={currentStep - 3} WrappedComp={Level4} />
    </Stack>
  )
}
