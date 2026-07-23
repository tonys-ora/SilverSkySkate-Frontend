import { SyntheticEvent, useState } from 'react'

import TabContext from '@mui/lab/TabContext'
import TabPanel from '@mui/lab/TabPanel'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'

import { useDialog } from '@/hooks'
import { colors } from '@/theme'

import AppIcon from '@/components/Core/AppIcon'

import SignIn from './SignIn'
import SignUp from './SIgnUp'

export default function AuthModal() {
  const { closeDialog, data } = useDialog()
  const [value, setValue] = useState<number>((data as { tab: string; code?: string })?.tab === 'register' ? 1 : 0)

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <TabContext value={value}>
      <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Tabs value={value} onChange={handleChange} aria-label='auth-tabs'>
          <Tab label={'login'} />
          <Tab label={'register'} />
        </Tabs>

        <IconButton
          data-screenshot='toggle-mode'
          size='small'
          onClick={closeDialog}
          aria-label='toggle mode'
          sx={theme => ({
            backgroundImage: 'none',
            borderColor: colors.border,
            ...theme.applyStyles('dark', {
              border: 'none',
              backgroundColor: colors.borderDark
            })
          })}
        >
          <AppIcon name='close' />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <TabPanel sx={{ p: 0 }} value={0}>
          <SignIn />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value={1}>
          <SignUp />
        </TabPanel>
      </DialogContent>
    </TabContext>
  )
}
