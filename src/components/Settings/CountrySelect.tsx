import { Autocomplete, Box, FormControl, FormLabel, Typography } from '@mui/material'

import { countries } from '@/constants'

import CustomizedLabelInput from './CustomizedLabelInput'

export default function CountrySelect({
  value,
  setValue
}: {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}) {
  const selectedCountry = countries.find(c => c.label === value) || null
  return (
    <FormControl fullWidth>
      <FormLabel htmlFor='language'>
        <Typography color='secondary'>Language</Typography>
      </FormLabel>
      <Autocomplete
        id='country-select-demo'
        sx={{
          width: '100%',
          ['.MuiAutocomplete-popupIndicator']: {
            marginLeft: '4px',
            height: '20px',
            width: '20px',
            background: 'inherit',
            border: 'none'
          },
          ['.MuiAutocomplete-clearIndicator']: {
            height: '20px',
            width: '20px',
            background: 'inherit',
            border: 'none'
          }
        }}
        options={countries}
        autoHighlight
        value={selectedCountry}
        onChange={(_, newValue) => {
          setValue(newValue ? newValue.label : '')
        }}
        getOptionLabel={option => `${option.label} (${option.code})`}
        renderOption={(props, option) => {
          const { key, ...optionProps } = props

          return (
            <Box key={key} component='li' sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...optionProps}>
              <img
                loading='lazy'
                height='14px'
                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                alt=''
              />
              {option.label} ({option.code})
            </Box>
          )
        }}
        renderInput={params => (
          <CustomizedLabelInput
            {...params}
            slotProps={{
              input: {
                ...params.InputProps,
                startAdornment: params.inputProps.value && (
                  <Box component='span' sx={{ display: 'flex', mr: 1, '& > img': { flexShrink: 0 } }}>
                    <img
                      loading='lazy'
                      height='14px'
                      srcSet={`https://flagcdn.com/w40/${String((params.inputProps.value as string).slice(-3, -1)).toLowerCase()}.png 2x`}
                      src={`https://flagcdn.com/w20/${String((params.inputProps.value as string).slice(-3, -1)).toLowerCase()}.png`}
                      alt=''
                    />
                  </Box>
                )
              },
              htmlInput: {
                ...params.inputProps,
                autoComplete: 'new-password' // disable autocomplete and autofill
              }
            }}
          />
        )}
      />
    </FormControl>
  )
}
