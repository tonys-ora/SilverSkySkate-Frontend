import { Button, Divider, Paper, SelectChangeEvent, Stack, Typography } from '@mui/material'
import { FC, memo, useCallback, useEffect, useState } from 'react'

import CountrySelect from '@/components/Settings/CountrySelect'
import CustomizedLabelSelect from '@/components/Settings/CustomizedLabelSelect'
import { IOSSwitch } from '@/components/Settings/IOSSwitch'
import { fiatNumberFormattings } from '@/constants'
import { fetchPreferences, updatePreferences } from '@/services'

interface PartProps {
  title: string
  WrappedComponent: FC
}

const Part = memo<PartProps>(({ title, WrappedComponent }) => {
  return (
    <Stack direction={{ sm: 'column', md: 'row' }} gap='50px'>
      <Typography width='350px' variant='h6'>
        {title}
      </Typography>

      {/* profile */}
      <WrappedComponent />
    </Stack>
  )
})

const Preference = ({
  language,
  setLanguage
}: {
  language: string
  setLanguage: React.Dispatch<React.SetStateAction<string>>
}) => {
  return (
    <Stack gap='24px' flexGrow={1}>
      <Stack gap='16px' flexGrow={1}>
        <CountrySelect value={language} setValue={setLanguage} />
        {/* <CustomizedLabelSelect label='Language' options={languages} value='' onChange={() => {}} /> */}
      </Stack>
    </Stack>
  )
}

const Marketing = ({
  emailOffers,
  setEmailOffers
}: {
  emailOffers: boolean
  setEmailOffers: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
    <Stack gap='24px' flexGrow={1}>
      <Stack gap='8px' direction='row' justifyContent='space-between'>
        <Stack>
          <Typography>Receive email offers from us</Typography>
          <Typography color='secondary'>Choose if you want to get update via email</Typography>
        </Stack>
        <IOSSwitch checked={emailOffers} onChange={() => setEmailOffers((prev) => !prev)}/>
      </Stack>
      {/* <Stack gap='8px' direction='row' justifyContent='space-between'>
        <Stack flexGrow={1}>
          <Typography>Receive email offers from us</Typography>
          <Typography color='secondary'>Choose if you want to get update via email</Typography>
        </Stack>
        <IOSSwitch />
      </Stack> */}
    </Stack>
  )
}

const FiatNumberFormatting = ({
  fiatFormatting,
  setFiatFormatting
}: {
  fiatFormatting: string
  setFiatFormatting: React.Dispatch<React.SetStateAction<string>>
}) => {
  return (
    <Stack flexGrow={1}>
      <CustomizedLabelSelect options={fiatNumberFormattings} value={fiatFormatting} onChange={(e: SelectChangeEvent<unknown>) => setFiatFormatting(e.target.value as string)} />
    </Stack>
  )
}

export const Preferences: FC = () => {
  const [language, setLanguage] = useState<string>('')
  const [marketing, setMarketing] = useState<boolean>(false)
  const [fiatFormatting, setFiatFormatting] = useState<string>('')

  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await fetchPreferences()
        console.log(data)
        setLanguage(data.language || '')
        setMarketing(data.marketing || false)
        setFiatFormatting(data.fiatFormatting || '')
      }
      fetchData()
    } catch(error) {
      console.log(error)
    }
  }, [])

  const handleSubmit = useCallback(async () => {
    try {
      console.log({language, marketing, fiatFormatting})
      const data = await updatePreferences({language, marketing, fiatFormatting})
      console.log(data)
      alert('submit successfully')
    } catch(error) {
      console.log(error)
    }
  }, [language, marketing, fiatFormatting]);

  return (
    <Paper sx={{ padding: '24px' }} variant='highlighted'>
      <Stack gap='24px'>
        <Part
          title='Preferences'
          WrappedComponent={() => <Preference language={language} setLanguage={setLanguage} />}
        />
        <Divider />
        <Part
          title='Marketing'
          WrappedComponent={() => <Marketing emailOffers={marketing} setEmailOffers={setMarketing} />}
        />
        <Divider />
        <Part
          title='Fiat Number Formatting'
          WrappedComponent={() => (
            <FiatNumberFormatting fiatFormatting={fiatFormatting} setFiatFormatting={setFiatFormatting} />
          )}
        />
        <Divider />
        <Stack alignItems='flex-end'>
          <Button variant='contained' color='primary' onClick={handleSubmit}>
            <Typography>SAVE CHANGES</Typography>
          </Button>
        </Stack>
      </Stack>
    </Paper>
  )
}
