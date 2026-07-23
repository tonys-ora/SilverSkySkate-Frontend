import { Box, Button, Paper, Stack, Typography } from '@mui/material'
import { ChangeEvent, useState } from 'react'

import AppIcon from '@/components/Core/AppIcon'

export default function ImageUploader({ description, setSelectedFile }: { description: string, setSelectedFile: React.Dispatch<React.SetStateAction<File | null>>}) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file))
    } else {
      alert('Please select a valid image file.')
    }
  }

  return (
    <Paper
      variant='outlined'
      sx={{ padding: '14px 16px', bgcolor: 'background.default', minHeight: '190px', flex: 1, borderRadius: '16px' }}
    >
      <Stack gap='12px' alignItems='center' justifyContent='center' height='100%'>
        {previewUrl ? (
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
        ) : (
          <>
            <AppIcon name='scan' size={24} color='greyDark' />

            <Typography color='secondary' variant='caption'>
              {description}
            </Typography>
          </>
        )}
        <Button
          component='label'
          variant='contained'
          color='inherit'
          startIcon={<AppIcon name='upload' color='greyDark' />}
          sx={{ padding: '8px 24px' }}
        >
          <Typography>Upload</Typography>
          <input type='file' hidden accept='image/*' onChange={handleFileChange} />
        </Button>
      </Stack>
    </Paper>
  )
}
