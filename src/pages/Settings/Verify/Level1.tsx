import { Button, Divider, SelectChangeEvent, Stack, Typography } from '@mui/material'
import React, { FC, useCallback, useEffect, useState } from 'react'

import CustomizedLabelInput from '@/components/Settings/CustomizedLabelInput'
import CustomizedLabelSelect from '@/components/Settings/CustomizedLabelSelect'
import {
  cityOptions,
  countryOptions,
  dateOfBirthOptions,
  occupationExperience,
  occupationIndustryOptions,
  occupationOptions,
  postalCodeOptions
} from '@/constants'
import { fetchVerifyLevel1Data, updateVerifyLevel1Data } from '@/services'
import { dispatch, updateVerifyStep } from '@/store'
import { Details } from '@/types'

export const Level1: FC = () => {
  const [details, setDetails] = useState<Partial<Details>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetails(prevData => ({ ...prevData, [e.target.name]: e.target.value }))
  }
  const handleSelectChange = (e: SelectChangeEvent<unknown>) => {
    console.log(details, e.target.value)
    setDetails(prevData => ({ ...prevData, [e.target.name]: e.target.value as string }))
  }
  const handleClick = useCallback(async () => {
    try {
      if(Object.values(details).includes('')) {
        alert('fill the required field');
        return;
      }
      const data = await updateVerifyLevel1Data(details)
      alert('submit successfully')
      dispatch(updateVerifyStep(1))
    } catch (err) {
      console.log(err)
    }
  }, [details])

  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await fetchVerifyLevel1Data()
        setDetails(data)

        console.log(data)
      }
      fetchData()
    } catch (err) {
      console.log(err)
    }
  }, [])

  return (
    <Stack gap='24px' flex={1}>
      <Stack direction='row-reverse'>
        <Stack maxWidth='718px' width='718px'>
          <Stack gap='24px' flex={1}>
            <Divider />
            <Stack gap='16px'>
              <Stack gap='4px'>
                <Typography variant='subtitle1'>Confirm your details</Typography>
                <Typography variant='body2' color='secondary'>
                  input your details & confirm your identity. All information private and secure.
                </Typography>
              </Stack>
              <Stack sx={{ flexDirection: { xs: 'column', sm: 'row' }, gap: '16px' }}>
                <CustomizedLabelInput
                  label='First name'
                  isRequired={true}
                  value={details.firstName || ''}
                  name='firstName'
                  onChange={handleChange}
                />
                <CustomizedLabelInput
                  label='Last name'
                  isRequired={true}
                  value={details.lastName || ''}
                  name='lastName'
                  onChange={handleChange}
                />
              </Stack>
              <Stack sx={{ flexDirection: { xs: 'column', sm: 'row' }, gap: '16px' }}>
                <CustomizedLabelSelect
                  label='Country'
                  isRequired={true}
                  options={countryOptions}
                  value={details.country || ''}
                  name='country'
                  onChange={handleSelectChange}
                />
                <CustomizedLabelSelect
                  label='Place of birth'
                  isRequired={true}
                  options={cityOptions}
                  value={details.placeOfBirth || ''}
                  name='placeOfBirth'
                  onChange={handleSelectChange}
                />
                <CustomizedLabelSelect
                  label='Date of birth'
                  isRequired={true}
                  options={dateOfBirthOptions}
                  value={details.dateOfBirth || ''}
                  name='dateOfBirth'
                  onChange={handleSelectChange}
                />
              </Stack>
              <CustomizedLabelInput
                label='Residential Address'
                isRequired={true}
                value={details.residentialAddress || ''}
                name='residentialAddress'
                onChange={handleChange}
              />
              <Stack sx={{ flexDirection: 'row', gap: '16px' }}>
                <CustomizedLabelSelect
                  label='City'
                  isRequired={true}
                  options={cityOptions}
                  value={details.city || ''}
                  name='city'
                  onChange={handleSelectChange}
                />
                <CustomizedLabelSelect
                  label='Postal Code'
                  isRequired={true}
                  options={postalCodeOptions}
                  value={details.postalCode || ''}
                  name='postalCode'
                  onChange={handleSelectChange}
                />
              </Stack>
            </Stack>

            <Divider />
            <Stack gap='16px'>
              <Stack gap='4px'>
                <Typography variant='h6'>Previous Occupation (Work)</Typography>
                <Typography variant='body2' color='secondary'>
                  Previous Occupation (Work)
                </Typography>
              </Stack>
              <Stack sx={{ flexDirection: { xs: 'column', sm: 'row' }, gap: '16px', alignItems: 'center' }}>
                <CustomizedLabelSelect
                  label='Occupation Industry'
                  isRequired={true}
                  options={occupationIndustryOptions}
                  value={details.occupationIndustry || ''}
                  name='occupationIndustry'
                  onChange={handleSelectChange}
                />
                <CustomizedLabelSelect
                  label='Occupation'
                  isRequired={true}
                  options={occupationOptions}
                  value={details.occupation || ''}
                  name='occupation'
                  onChange={handleSelectChange}
                />
                <CustomizedLabelSelect
                  label='Occupation Experience'
                  isRequired={true}
                  options={occupationExperience}
                  value={details.occupationExperience || ''}
                  name='occupationExperience'
                  onChange={handleSelectChange}
                />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Divider />
      <Stack alignItems='flex-end'>
        <Button variant='contained' color='primary' onClick={handleClick}>
          <Typography>SUBMIT</Typography>
        </Button>
      </Stack>
    </Stack>
  )
}
