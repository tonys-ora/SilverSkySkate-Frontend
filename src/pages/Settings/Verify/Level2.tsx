import { Alert, AlertTitle, Button, Divider, SelectChangeEvent, Stack, Typography } from '@mui/material'
import { FC, useCallback, useEffect, useState } from 'react'

import CustomizedLabelSelect from '@/components/Settings/CustomizedLabelSelect'
import ImageUploader from '@/components/Settings/ImageUploader'
import { residentialAddress } from '@/constants'
import { updateVerifyLevel2Data } from '@/services'

export const Level2: FC = () => {
  const [address, setAddress] = useState<string>('')
  const [selectedFile1, setSelectedFile1] = useState<File | null>(null)
  const [selectedFile2, setSelectedFile2] = useState<File | null>(null)

  useEffect(() => {
    
  }, [])

  const handleSubmit = async () => {
    try {
      if (address === '' || !selectedFile1 || !selectedFile2) {
        alert('fill all the field')
        return
      }
      const formData = new FormData()
      formData.append('residentialAddress', address)
      formData.append('images', selectedFile1)
      formData.append('images', selectedFile2)
      const data = await updateVerifyLevel2Data(formData)
      alert('submit successfully')
    } catch(error) {
      console.log(error);
    }
  };

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
              <AlertTitle variant='subtitle1'>Your verification requires attention</AlertTitle>
              <Typography color='textPrimary' variant='body2'>
                Upload you identification.
              </Typography>
            </Alert>
            <CustomizedLabelSelect label='Occupation Experience' options={residentialAddress} value={address} onChange={(e: SelectChangeEvent<unknown>) => {setAddress(e.target.value as string)}} />
            <Stack gap='8px'>
              <Typography color='secondary'>Upload</Typography>
              <Stack sx={{ flexDirection: { xs: 'column', sm: 'row' }, gap: '24px' }}>
                <ImageUploader description='Front side' setSelectedFile={setSelectedFile1}/>
                <ImageUploader description='Back side' setSelectedFile={setSelectedFile2}/>
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
        <Button variant='contained' color='primary' onClick={handleSubmit}>
          <Typography>SUBMIT</Typography>
        </Button>
      </Stack>
    </Stack>
  )
}
