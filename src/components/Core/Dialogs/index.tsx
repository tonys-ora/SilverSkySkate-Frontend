import { ComponentType, FC, memo, useMemo } from 'react'

import Dialog from '@mui/material/Dialog'
import { useTheme } from '@mui/material/styles'

import { useDialog } from '@/hooks'

import Auth from '@/components/Auth'

// Strongly type the dialog names
const DIALOG_NAMES = {
  AUTH: 'auth',
} as const

type DialogName = keyof typeof DIALOG_NAMES
type DialogType = (typeof DIALOG_NAMES)[DialogName]

// Map dialog names to their corresponding components
const DIALOG_COMPONENTS: Record<DialogType, ComponentType> = {
  [DIALOG_NAMES.AUTH]: Auth,

}

const DialogsComponent: FC = () => {
  const theme = useTheme()
  const { activeDialog, closeDialog } = useDialog()

  // Memoize the dialog component to prevent unnecessary re-renders
  const DialogComponent = useMemo(
    () => (activeDialog ? DIALOG_COMPONENTS[activeDialog as DialogType] : null),
    [activeDialog]
  )

  const paperStyles = useMemo(
    () => ({
      minWidth: '20rem',
      backgroundImage: 'none',
      backgroundColor: theme.palette.background.paper,
      borderRadius: '24px',
      boxShadow: theme.shadows[10],
      padding: '16px 12px'
    }),
    [theme]
  )

  return (
    <Dialog
      open={!!activeDialog}
      onClose={closeDialog}
      PaperProps={{ sx: paperStyles }}
      maxWidth='sm'
      aria-labelledby='dialog-title'
    >
      {DialogComponent && <DialogComponent />}
    </Dialog>
  )
}

export default memo(DialogsComponent)
